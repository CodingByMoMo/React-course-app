import express from "express";
import { passportConfig } from "./service/passport.js";
import { authRoutes } from "./routes/authRoutes.js ";

passportConfig();
const app = express()
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
