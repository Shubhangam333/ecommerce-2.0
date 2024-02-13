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

  res.status(200).send({ message: "Registration Successful" });
};

export const login = async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email }).select("+password");

  if (!user) {
    throw new CustomError(400, "Account does not exist .Please register");
  }

  const isPassMatched = await user.matchPassword(req.body.password);

  if (!isPassMatched) {
    throw new CustomError(400, "Invalid Username or password");
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.MAX_AGE,
  });

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: process.env.MAX_AGE,
  });

  console.log("u", user);
  const { password, wishlistItems, cartItems, ...rest } = user._doc;

  res.status(200).json({ user: rest });
};

export const logout = async (req, res) => {
  const options = {
    expires: new Date(Date.now()),
    httpOnly: true,
  };
  res.status(200).cookie("auth_token", null, options).json({
    success: true,
    message: "Logout Successful",
  });
};
