import express, { json } from "express";
import mongoose from "mongoose";
import { new_user_schema } from "./models/user.js";
import { mongoDB_base_URI } from "./config/keys.js";
import { passport_config } from "./service/passport.js";
import { auth_router } from "./routes/authRoutes.js ";
import session from "express-session";

//  Inti connection with MongoDB
mongoose.connect(mongoDB_base_URI);

// Crate user Schema.
new_user_schema();

//  Configure passport.
passport_config();

// Create express app and use auth router.
const app = express();
app.use(
  session({
    secret: "MoMo is love",
    cookie: {},
  })
);
app.use(auth_router);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
