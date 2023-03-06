import passport from "passport";
import mongoose from "mongoose";
import { Strategy as Google_strategy } from "passport-google-oauth20";
import { google_client_ID, google_client_secret } from "../config/keys.js";

// Set up the passportJS library for google.
const passport_config = () => {
  const user_class = mongoose.model("users");
  passport.use(
    new Google_strategy(
      {
        clientID: google_client_ID,
        clientSecret: google_client_secret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        new user_class({ google_ID: profile.id }).save();
      }
    )
  );
};

export { passport_config };
