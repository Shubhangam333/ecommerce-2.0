import express from "express";
import {
  profile,
  addToCart,
  getAllCartItems,
  addToWishList,
  getAllWishListItems,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/profile/:userId").get(isAuthenticated, profile);
router.route("/addToCart").post(isAuthenticated, addToCart);
router.route("/getCartItems").get(isAuthenticated, getAllCartItems);
router.route("/addToWishList").post(isAuthenticated, addToWishList);
router.route("/getWishListItems").get(isAuthenticated, getAllWishListItems);

export default router;
