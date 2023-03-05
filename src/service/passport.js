import passport from "passport";
import { Strategy as Google_strategy } from "passport-google-oauth20";
import { google_client_ID, google_client_secret } from "../config/keys.js";

// Set up the passportJS library for google.
const passport_config = () => {
  passport.use(
    new Google_strategy(
      {
        clientID: google_client_ID,
        clientSecret: google_client_secret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log("accessToken", accessToken);
        console.log("refreshToken", refreshToken);
        console.log("profile", profile);
      }
    )
  );
};

export { passport_config };
