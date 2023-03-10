import passport from "passport";
import express from "express";

const auth_router = express.Router();

auth_router.use((req, res, next) => {
  console.log("Action on: ", Date.now());
  next();
});

auth_router.get("/", (req, res, next) => {
  res.send("Hello World 🔥");
});

auth_router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

auth_router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: '/login' }), (req, res) => {
  res.redirect("/");
});

export { auth_router };
