import express from "express";

import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import {
  createOrder,
  getOrdersByUserId,
  getOrderDetailsByOrderId,
  getAllOrders,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createOrder);
router.route("/:userId").get(isAuthenticated, getOrdersByUserId);
router.route("/:orderId").post(isAuthenticated, getOrderDetailsByOrderId);
router.route("/orders/all").get(isAuthenticated, isAdmin, getAllOrders);

export default router;
