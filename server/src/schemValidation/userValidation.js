import { check } from "express-validator";

export const userValidate = [
  check("firstName", "First Name is required").isString().trim(),
  check("lastName", "Last Name is required").isString().trim(),
  check("email", "Email is required").isEmail(),
  check("password", "Password with 6 or more characters required").isLength({
    min: 6,
  }),
  check("gender", "Gender is required").isString(),
];
