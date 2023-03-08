import express from "express";
import mongoose from "mongoose";
import { new_user_schema } from "./models/user.js";
import { mongoDB_base_URI } from "./config/keys.js";
import { passport_config } from "./service/passport.js";
import { auth_router } from "./routes/authRoutes.js ";

mongoose.connect(mongoDB_base_URI);
new_user_schema();
passport_config();
const app = express();
//app.use(auth_router);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/auth/google", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
