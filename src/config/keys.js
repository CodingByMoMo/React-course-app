import {
  google_client_ID_dev,
  google_client_secret_dev,
  mongoDB_base_URI_dev,
  cookie_key_dev,
  stripe_public_key_dev,
  stripe_secret_key_dev,
} from "./dev.js";

var google_client_ID = "";
var google_client_secret = "";
var mongoDB_base_URI = "";
var cookie_key = "";
var callback_URL = "https://app.momocodes.com/auth/google/callback";
var stripe_public_key = "";
var stripe_secret_key = "";

if (process.env.NODE_ENV === "production") {
  //Data Set for production.
  google_client_ID = process.env.GOOGLE_CLIENT_ID;
  google_client_secret = process.env.GOOGLE_CLIENT_SECRET;
  mongoDB_base_URI = process.env.MONGODB_BASE_URI;
  cookie_key = process.env.COOKIE_KEY;
  stripe_public_key = process.env.STRIPE_PUBLISHABLE_KEY;
  stripe_secret_key = process.env.STRIPE_SECRET_KEY;
} else {
  //Data set for developer envaiorment.
  google_client_ID = google_client_ID_dev;
  google_client_secret = google_client_secret_dev;
  mongoDB_base_URI = mongoDB_base_URI_dev;
  cookie_key = cookie_key_dev;
  stripe_public_key = stripe_public_key_dev;
  stripe_secret_key = stripe_secret_key_dev;
}

export {
  google_client_ID,
  google_client_secret,
  mongoDB_base_URI,
  cookie_key,
  callback_URL,
};
// {cookieKey,google_client_ID, google_client_secret, mongoDB_base_URI}
