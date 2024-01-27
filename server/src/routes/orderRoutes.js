import express from "express";

import { isAuthenticated } from "../middleware/authMiddleware.js";
import {
  createOrder,
  getOrdersByUserId,
  getOrderDetailsByOrderId,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createOrder);
router.route("/:userId").get(isAuthenticated, getOrdersByUserId);
router.route("/:orderId").post(isAuthenticated, getOrderDetailsByOrderId);

export default router;
