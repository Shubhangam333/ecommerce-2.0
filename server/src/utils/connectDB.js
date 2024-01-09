import mongoose from "mongoose";

export const db = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};
