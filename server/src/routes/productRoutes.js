import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import {
  createProduct,
  getAllProducts,
  deleteProductById,
  getProductsBySubCategoryId,
} from "../controllers/productController.js";
import { upload } from "../config/imageupload.js";

const router = express.Router();

router
  .route("/createProduct")
  .post(isAuthenticated, isAdmin, upload.array("productImages"), createProduct);
router.route("/products").get(isAuthenticated, isAdmin, getAllProducts);
router.route("/:id").delete(isAuthenticated, isAdmin, deleteProductById);

router.route("/products/:categoryId").get(getProductsBySubCategoryId);

export default router;
