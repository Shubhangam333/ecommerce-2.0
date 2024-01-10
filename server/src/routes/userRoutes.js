import express from "express";
import { profile } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/profile/:userId").get(isAuthenticated, profile);

export default router;
