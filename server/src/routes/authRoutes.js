import express from "express";
import { register } from "../controllers/authController.js";
import { userValidate } from "../schemValidation/userValidation.js";

const router = express.Router();

router.route("/register").post(userValidate, register);

export default router;
