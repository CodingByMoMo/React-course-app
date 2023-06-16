import passport from "passport";
import mongoose from "mongoose";
import { Strategy as Google_strategy } from "passport-google-oauth20";
import { Strategy as Local_strategy } from "passport-local";
import crypto from 'crypto';
import {
  google_client_ID,
  google_client_secret,
  callback_URL,
} from "../config/keys.js";

/**
 * @author CodingByMoMo
 * @description This is a module to set up a Passport configuration for this web app.
 *
 */
const passport_config = () => {
  //  This class loads user data schema.
  const User_class = mongoose.model("users");
  //  Serialization of the user.
  //  Use record to turn it into Id.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //  Deserialization of user
  //  Use Id to turn into user record.
  passport.deserializeUser((id, done) => {
    User_class.findById(id).then((user) => {
      done(null, user);
    });
  });

  var callbackURL;
  if (process.env.NODE_ENV === "production") {
    callbackURL = callback_URL;
  } else {
    callbackURL = "/auth/google/callback";
  }

  passport.use(
    //  Here we create a new google auth strategy.
    //  And define key and secret to authentication.
    new Google_strategy(
      {
        clientID: google_client_ID,
        clientSecret: google_client_secret,
        callbackURL: callbackURL,
      },
      async (accessToken, refreshToken, profile, done) => {
        //  Find a document in database with this Google ID.
        const existing_user = await User_class.findOne({
          googleId: profile.id,
        });
        if (existing_user) {
          //  There is a user in Database.
          done(null, existing_user);
        } else {
          //  There is no user in Database.
          //  Create new user and save it to Database.
          const user = await new User_class({ googleId: profile.id }).save();
          done(null, user);
        }
      }
    )
  );

  passport.use(new Local_strategy(User_class.authenticate()));
};

export { passport_config };
