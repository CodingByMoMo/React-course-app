import express from "express";
import { stripe_secret_key } from "../config/keys.js";
import Stripe from "stripe";

const stripe = new Stripe(stripe_secret_key);

//  Create a new Router
const billing_router = express.Router();

//  Create Middleware for router

billing_router.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        description: "Add more credits",
        source: req.body.id
    });
    console.log(charge);
});

export { billing_router };
