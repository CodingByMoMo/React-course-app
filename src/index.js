import express from "express";
import mongoose from "mongoose";
import { new_user_schema } from "./models/user.js";
import { mongoDB_base_URI } from "./config/keys.js";
import { passport_config } from "./service/passport.js";
import { auth_router } from "./routes/authRoutes.js ";
import cookieSession from "cookie-session";
import { cookie_key } from "./config/keys.js";
import passport from "passport";

//  Inti connection with MongoDB
mongoose.connect(mongoDB_base_URI);

// Crate user Schema.
new_user_schema();

//  Configure passport.
passport_config();

// Create express app.
const app = express();
//  init session manager with cookie-session
app.use(cookieSession({
    maxAge: 2*60*60*1000,
    keys: [cookie_key]
}));

//  Init passport session.
app.use(passport.initialize());
app.use(passport.session());
//  Use authentication route.
app.use(auth_router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
