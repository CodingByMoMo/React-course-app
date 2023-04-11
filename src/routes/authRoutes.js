import passport from "passport";
import express from "express";

//  Create a new Router
const auth_router = express.Router();

//  Create Middleware for router
auth_router.use((req, res, next) => {
  console.log("Action on: ", Date.now());
  next();
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
    //  Redirect to root :fire:.
    res.redirect("/surveys");
  }
);

auth_router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

auth_router.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

export { auth_router };
