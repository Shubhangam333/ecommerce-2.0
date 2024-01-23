import express from "express";
import {
  createAddress,
  deleteAddressById,
  getUserAddress,
} from "../controllers/addressController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/newaddress").post(isAuthenticated, createAddress);
router.route("/alladdress").get(isAuthenticated, getUserAddress);
router.route("/:addressId").delete(isAuthenticated, deleteAddressById);

export default router;
