import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleClientID, googleClientSecret } from "../config/keys.js";

const app = express();
// Set up the passportJS library for google.
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken',refreshToken);
      console.log('profile',profile);
    }
  )
);

// Make call to google oauth and authenticate.
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

//Get a profile and access token.
app.get(
  "/auth/google/callback",
  passport.authenticate("google")
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
