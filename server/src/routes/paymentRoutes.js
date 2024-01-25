import express from "express";
import {
  processPayment,
  getPaymentInfo,
} from "../controllers/paymentController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/process").post(isAuthenticated, processPayment);
router.route("/paymentInfo").post(isAuthenticated, getPaymentInfo);

export default router;
