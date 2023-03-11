import passport from "passport";
import express from "express";

//  Create a new Router
const auth_router = express.Router();

//  Create Middleware for router
auth_router.use((req, res, next) => {
  console.log("Action on: ", Date.now());
  next();
});

//  Create a new root route.
auth_router.get("/", (req, res, next) => {
  res.send("Hello World 🔥");
});

//  Crate a auth route for google and execute passport authenticate.
auth_router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//  Create callback for google and handle it.
auth_router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    //  Redirect to root.
    res.redirect("/");
  }
);

export { auth_router };
