import express from "express";
import mongoose from "mongoose";
import { mongoDB_base_URI } from "./config/keys.js";
import { passport_config } from "./service/passport.js";
import auth_router from "./routes/authRoutes.js ";
import { billing_router } from "./routes/billingRoutes.js";
import surveys_router from "./routes/surveysRoutes.js";
import cookieSession from "cookie-session";
import { cookie_key } from "./config/keys.js";
import passport from "passport";
import bodyParser from "body-parser";
import * as path from 'path';
import { new_user_schema } from "./models/user.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//  Inti connection with MongoDB
mongoose.connect(mongoDB_base_URI);

// Crate data Schema.
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
app.use(bodyParser.json());
//  Use authentication route.
app.use(surveys_router);
app.use(auth_router);
app.use(billing_router);


if(process.env.NODE_ENV === "production"){
    //  Serve up Production assets.
    app.use(express.static("client/build"));

     //  Server will give user the html file if route is not recognized.
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
