import { validationResult } from "express-validator";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import CustomError from "../errors/CustomError.js";

export const register = async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    throw new CustomError(400, `User already exists`);
  }

  user = new User(req.body);
  await user.save();

  const token = jwt.sign(
    { userId: user._id },
    {
      expiresIn: "1d",
    }
  );

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: process.env.MAX_AGE,
  });

  return res.status(200).send({ message: "Registration Successful" });
};
