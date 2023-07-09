import passport from "passport";
import express from "express";
import mongoose from "mongoose";

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

auth_router.post("/register", (req,res) => {
  User.register(new User({email: req.body.email, username: req.body.username}), req.body.password, (err, user)=>{
    if (err) res.json({success: false, message: "Your account could not be save. Error: " + err});
    req.login(user, (er) => {
      if (er) res.json({success: false, message: er});
      res.json({ success: true, message: "Your account has been saved."});
    })
  })
});

auth_router.post("/login", (req, res) => {
  if (!req.body.username) res.json({success: false, message: "No username was given."});
  if (!req.body.password) res.json({ success: false, message: "No password was given."});
  passport.authenticate("local", (err, user, info)=>{
    if(err) res.json({success: false, message: err});
    if(!user) res.json({success: false, message: "Username or password incorrect"});
    const token = jwt.sign({ userId: user._id, username }, secretkey, {expiresIn: "24h"});
    res.json({success: true, message: "User authenticated", token: token});
  })(req,res);
});

auth_router.post("/resetpassword", (req,res) => {
  const User  = mongoose.model("users");
  let current_user = new User();
  current_user = current_user.load(req.user._id);
  current_user.setPassword(req.body.password, (err, user)=>{
    if (err) res.json({success: false, message: "Password reset failed."});
    res.json({success: true, message: "Your password was reset."});
  });
});

auth_router.post("/changepassword", (req,res) => {
  const User  = mongoose.model("users");
  let current_user = new User();
  current_user = current_user.load(req.user._id);
  current_user.changePassword(req.body.oldpassword, req.body.newpassword, (err)=>{
    if (err) res.json({success: false, message: "Password change failed."});
    res.json({success: true, message: "Your password was changed."});
  });
});

export default auth_router;
