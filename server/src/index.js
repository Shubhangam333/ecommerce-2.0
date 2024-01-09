import express from "express";
import dotenv from "dotenv";
import { db } from "./utils/connectDB.js";
import { authRoutes } from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
db();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
