import mongoose from "mongoose";
import express from "express";
import Mailer from "../service/Mailer.js";
import check_user_aut from "../middlewares/requireLogin.js";
import check_user_credits from "../middlewares/creditsChecks.js";
import email_template from "../service/emailTemplates.js";
import Survey from "../models/surveys.js";
import _ from "lodash";
import { Path } from "path-parser";
import { URL } from "url";

const surveys_router = express.Router();

surveys_router.get("/api/surveys", (req, res) => {
  res.send("surveys");
});

surveys_router.post(
  "/api/surveys",
  check_user_aut,
  check_user_credits,
  async (req, res) => {
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

    //  Send Mail.
    const mailer = new Mailer(survey, email_template(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  }
);

surveys_router.post("/api/surveys/webhook", (req, res) => {
  console.log(req.body);
  const events = _.map(req.body, ({url, email, event}) => {
    if (event == "click") {
      const path_name = new URL(url).pathname;
      const parser = new Path("/api/surveys/:survey_Id/:choice");
      const match = parser.test(path_name);
      if (match) {
        return {
          email: email,
          survey: match.survey_Id,
          choice: match.choice,
        };
      }
    } else {
      return undefined;
    }
  });
  console.log("events: ", events);
});

surveys_router.get("/thanks", (req, res) => {
  res.send("Thanks for Voting!");
});

export default surveys_router;
