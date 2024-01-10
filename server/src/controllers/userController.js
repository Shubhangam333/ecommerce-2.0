import CustomError from "../errors/customError.js";
import { User } from "../models/user.js";

export const profile = async (req, res) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    throw new CustomError("No user found.");
  }

  res.status(200).json(user);
};
