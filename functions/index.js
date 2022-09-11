/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key); // This is the test key and needs to be swapped for the LIVE key
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "https://veganfresh2u.com/orders",
    cancel_url: "https://veganfresh2u.com/orders", // required
    line_items: data.line_items,
    customer: data.customer_id, // This ties the checkout session to the appropriate customer in our DB. Once a payment succeeds, stripe knows which customer to update in our DB.
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
  });

  return {
    id: session.id,
  };
});
