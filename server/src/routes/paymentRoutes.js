import express from "express";
import {
  processPayment,
  getPaymentInfo,
  createPaymentIntent,
} from "../controllers/paymentController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/process").post(isAuthenticated, processPayment);
router.route("/paymentInfo").post(isAuthenticated, getPaymentInfo);

router.post("/payment-intent", createPaymentIntent);

export default router;
