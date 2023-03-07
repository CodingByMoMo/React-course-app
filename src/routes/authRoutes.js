import passport from "passport";
import express from "express";

const auth_router = express.Router();

auth_router.get("/auth/google", (req, res) => {
  res.send(
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
});

auth_router.get("/auth/google/callback", (req, res) => {
  res.send(passport.authenticate("google"));
});

export { auth_router };
