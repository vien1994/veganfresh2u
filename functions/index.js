const functions = require("firebase-functions");

exports.createStripeCheckout = functions.https.onCall(async (data, context) => {
  const stripe = require("stripe")(functions.config().stripe.secret_key);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: "http://localhost:3000/orders",
    cancel_url: "http://localhost:3000/orders",
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
    customer_email: data.email,
  });

  return {
    id: session.id,
  };
});
