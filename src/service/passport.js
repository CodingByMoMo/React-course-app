import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleClientID, googleClientSecret } from "../config/keys.js";

// Set up the passportJS library for google.
const passportConfig = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: googleClientID,
        clientSecret: googleClientSecret,
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

export {passportConfig};