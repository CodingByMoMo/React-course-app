import express from "express";
import mongoose from "mongoose";
import check_user_aut from "../middlewares/requireLogin.js";
import check_user_credits from "../middlewares/creditsChecks.js";

const Survey = mongoose.model("surveys");

const surveys_router = express.Router();

surveys_router.get("/api/surveys", (req, res) => {
  res.send("surveys");
});

surveys_router.post(
  "/api/surveys",
  check_user_aut,
  check_user_credits,
  (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })),
      _user: req.user.id,
      date_sent: Date.now(),
    });
  }
);

export default surveys_router;
