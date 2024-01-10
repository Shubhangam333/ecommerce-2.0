import CustomError from "../errors/customError.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { auth_token } = req.cookies;

  if (!auth_token) {
    return next(new CustomError(401, "Please Login to access this resource"));
  }

  const decoded = jwt.verify(auth_token, process.env.JWT_SECRET_KEY);

  const user = await User.findById({ _id: decoded.userId });

  req.user = user;

  next();
};
