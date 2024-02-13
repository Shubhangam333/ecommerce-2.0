import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_API_KEY);

export const processPayment = async (req, res, next) => {
  const { cartItems } = req.body;
  let baseURL = "";

  if (process.env.NODE_ENV === "development") {
    baseURL = process.env.DEV_BASE_URL;
  } else {
    baseURL = process.env.PROD_BASE_URL;
  }

  const lineItems = cartItems.map((item) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.product.title,
      },
      unit_amount: item.product.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${baseURL}/user/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseURL}/user/cancel?session_id={CHECKOUT_SESSION_ID}`,
  });
  res.status(200).json({ id: session.id });
};

export const getPaymentInfo = async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  res
    .status(200)
    .json({ id: session.payment_intent, status: session.payment_status });
};

export const createPaymentIntent = async (req, res) => {
  const { amount } = req.body;
  console.log("a", amount);

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "inr",
  });

  res.status(200).json(paymentIntent.client_secret);
};
