import express from "express";
import { stripe_secret_key } from "../config/keys.js";
import Stripe from "stripe";
import check_user_aut from "../middlewares/requireLogin.js";

const stripe = new Stripe(stripe_secret_key);

//  Create a new Router
const billing_router = express.Router();

//  Create Middleware for router

billing_router.post("/api/stripe", check_user_aut, async (req, res) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must be login to make this action." });
  }
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "Add more credits",
    source: req.body.id,
  });

  req.user.credits += 5;
  const user = await req.user.save();
  res.send(user);
});

export { billing_router };
