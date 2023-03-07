import passport from "passport";
import express from "express";

const auth_router = express.Router();

auth_router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

auth_router.get("/auth/google/callback", passport.authenticate("google"));

export { auth_router };
