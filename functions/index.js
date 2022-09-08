/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key); // This is the test key and needs to be swapped for the LIVE key
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000/orders",
    cancel_url: "http://localhost:3000/orders", // required
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: (100) * data.total, // 10,000 = $100
          product_data: {
            name: "Jackfruit Burger",
          },
        },
      },
    ],
    customer: data.customer_id, // This ties the checkout session to the appropriate customer in our DB. Once a payment succeeds, stripe knows which customer to update in our DB.
  });

  return {
    id: session.id,
  };
});

// When a new user is created, we create a new record for them
// in the stripe_customers collection with data we get from stripe
// This happens automatically on it's own
// exports.createStripeCustomer = functions.auth.user().onCreate(async (user) => {
//   const stripe = require("stripe")(functions.config().stripe.secret_key);
//   const customer = await stripe.customers.create({email: user.email});
//   const intent = await stripe.setupIntents.create({
//     customer: customer.id,
//   });
//   await admin.firestore().collection("stripe_customers").doc(user.uid).set({
//     customer_id: customer.id,
//     setup_secret: intent.client_secret,
//   });
//   return;
// });

