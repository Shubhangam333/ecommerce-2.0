import express from "express";
import {
  profile,
  addToCart,
  getAllCartItems,
  addToWishList,
  getAllWishListItems,
  deleteCartItemById,
  deleteWishListItemById,
  removeCartItems,
  getAllUsers,
} from "../controllers/userController.js";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/profile/:userId").get(isAuthenticated, profile);
router.route("/allusers").get(isAuthenticated, isAdmin, getAllUsers);
router.route("/addToCart").post(isAuthenticated, addToCart);
router.route("/getCartItems").get(isAuthenticated, getAllCartItems);
router.route("/addToWishList").post(isAuthenticated, addToWishList);
router.route("/getWishListItems").get(isAuthenticated, getAllWishListItems);
router.route("/emptycart").post(isAuthenticated, removeCartItems);

router.route("/cart/:cartItemId").delete(isAuthenticated, deleteCartItemById);
router
  .route("/wishlist/:wishlistItemId")
  .delete(isAuthenticated, deleteWishListItemById);

export default router;
