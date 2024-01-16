import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qbmtaop.mongodb.net/orgado`;

const mongooseOptions: mongoose.ConnectOptions = {
  serverSelectionTimeoutMS: 30000,
};

export async function dbConnect() {
  try {
    await mongoose.connect(mongoUrl, mongooseOptions);
    console.log("Database connected");
  } catch (e) {
    console.log("Database connection error", e);
  }
}
