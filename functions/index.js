/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();


// Configuration for the checkout session
exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key); // This is the test key and needs to be swapped for the LIVE key
  const checkoutPayload = {
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "https://veganfresh2u.com/orders",
    cancel_url: "https://veganfresh2u.com/orders", // required
    line_items: data.line_items,
    customer: data.customer_id, // This ties the checkout session to the appropriate customer in our DB. Once a payment succeeds, stripe knows which customer to update in our DB.
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
  };

  // If the order is under 30 dollars, then we apply shipping
  if (data.shipping) {
    checkoutPayload.shipping_options = [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {amount: 500, currency: "usd"},
          display_name: "Shipping fee for orders under $30",
        },
      },
    ];
  }

  const session = await stripe.checkout.sessions.create(checkoutPayload);

  return {
    id: session.id,
  };
});

// Listen for changes in all documents in the 'products' collection and inserts the price to the main product document
// The price comes from stripe but is stored in a separate subcollection which is hard to query. This allows us to query product details with the price included.
exports.insertProductPrice = functions.firestore
    .document("products/{docId}/prices/{productPrices}")
    .onWrite((change, context) => {
      db.doc(`products/${context.params.docId}`).set({
        price: change.after.data().unit_amount,
        price_id: context.params.productPrices,
      }, {merge: true});
    });

// Automatically sends an email when a successful payment has been made (stored in db)
// Writes to the mail collection to trigger the Trigger Email firebase extension
exports.sendEmailReceipt = functions.firestore
    .document("customers/{uid}/payments/{payment_intent}")
    .onWrite((change, context) => {
      const newData = change.after.data();
      if (newData.status !== "succeeded") {
        return;
      }
      db.doc(`mail/${context.params.payment_intent}`).create({
        toUids: [`${context.params.uid}`],
        from: "",
        message: {
          subject: "Your VeganFresh2U Order Has Been Received!",
          html: `<h3 style='color:black;'>Thank you for your order! Your receipt can be found <a href='${newData.charges.data[0].receipt_url}'><i>here</i></a></h3>`,
        },
      });
    });

// Automatically send the customer an email when the order status has changed (Delivered/On the way) ///THIS DOES NOT WORK YET
exports.sendEmailDeliveryStatus = functions.firestore
    .document("adminContent/{payment_intent}")
    .onWrite((change, context) => {
      const newData = change.after.data();
      let orderMessage;
      let subject;
      // If it's a new order, then don't send an email
      if (newData.status === "Order Placed") {
        return;
      } else if (newData.status === "OTW") {
        subject = "Your VeganFresh2U order is on the way!";
        orderMessage = "Thank you for your patience. Your order will arrive shortly!";
      } else if (newData.status === "Delivered") {
        subject = "Your VeganFresh2U order has been delivered!";
        orderMessage = "Thank you for ordering at VeganFresh2U. We hope you enjoy your meal!";
      }
      // Create a new unique entry in the mail collection so it triggers an email. Use the payment_intent plus the status to avoid dupes.
      db.doc(`mail/${context.params.payment_intent}-${newData.status}`).create({
        toUids: [`${newData.uid}`],
        from: "",
        message: {
          subject: `${subject}`,
          html: `<h3 style='color:black;'>${orderMessage}</h3>`,
        },
      });
    });


// Automatically populates adminContent collection when an order is placed
// Stores active orders for the administrator only to view
exports.insertAdminContent = functions.firestore
    .document("customers/{uid}/payments/{payment_intent}")
    .onWrite((change, context) => {
      const newData = change.after.data();
      const orderItems = [];
      if (newData.status !== "succeeded") {
        return;
      }

      // Create the list of items ordered
      for (let i = 0; i < newData.items.length; i++) {
        orderItems.push({
          item: newData.items[i].description,
          quantity: newData.items[i].quantity,
        });
      }

      // Write to the adminContent collection with the order details
      db.doc(`adminContent/${context.params.payment_intent}`).create({
        uid: `${context.params.uid}`,
        status: "Order Placed",
        customer: `${newData.charges.data[0].billing_details.name} - ${newData.charges.data[0].billing_details.email}`,
        amount: `${(newData.charges.data[0].amount/100).toFixed(2)}`,
        items: orderItems,
        created: newData.created,
      });
    });

