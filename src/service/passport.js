import passport from "passport";
import mongoose from "mongoose";
import { Strategy as Google_strategy } from "passport-google-oauth20";
import { google_client_ID, google_client_secret } from "../config/keys.js";

/**
 * @author CodingByMoMo
 * @description This is a module to set up a Passport configuration for this web app.
 *
 */
const passport_config = () => {
  //  This class loads user data schema.
  const User_class = mongoose.model("users");
  passport.use(
    //  Here we create a new google auth strategy.
    //  And define key and secret to authentication.
    new Google_strategy(
      {
        clientID: google_client_ID,
        clientSecret: google_client_secret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        //  Find a document in database with this Google ID.
        User_class.findOne({ googleId: profile.id }).then((existing_user) => {
          if (existing_user) {
            //  There is a user in Database.
          } else {
            //  There is no user in Database.
            //  Create new user and save it to Database.
            new User_class({ googleId: profile.id }).save();
          }
        });
      }
    )
  );
};

export { passport_config };
