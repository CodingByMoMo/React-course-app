import express from "express";
import check_user_aut from "../middlewares/requireLogin.js";
import check_user_credits from "../middlewares/creditsChecks.js";

const surveys_router = express.Router();

surveys_router.get("/api/surveys", (req, res) => {
  res.send("surveys");
});

surveys_router.post("/api/surveys", check_user_aut, check_user_credits, (req, res) => {
    res.send("new surveys");
});

export default surveys_router;
