import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connection success ✅");
  } catch (error) {
    console.log("Database connection failed ❌", error);
  }
}
