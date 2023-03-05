import express from "express";
import mongoose from "mongoose";
import { mongoDB_base_URI } from "./config/keys.js";
import { passport_config } from "./service/passport.js";
import { auth_routes } from "./routes/authRoutes.js ";

mongoose.connect(mongoDB_base_URI);
passport_config();
const app = express();
auth_routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
