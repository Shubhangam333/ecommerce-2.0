import CustomError from "../errors/CustomError.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { auth_token } = req.cookies;

  if (!auth_token) {
    throw new CustomError(401, "Please Login to access this resource");
  }

  const decoded = jwt.verify(auth_token, process.env.JWT_SECRET_KEY);

  const user = await User.findById({ _id: decoded.userId });

  req.user = user;

  next();
};

export const isAdmin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new CustomError(
      400,
      "You are not authorized to access this resouce."
    );
  }

  next();
};
