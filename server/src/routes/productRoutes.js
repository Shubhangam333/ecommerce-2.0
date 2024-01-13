import express from "express";
import { isAuthenticated } from "../middleware/authMiddleware.js";
import { createProduct } from "../controllers/productController.js";
import { upload } from "../config/imageupload.js";

const router = express.Router();

router
  .route("/createProduct")
  .get(isAuthenticated, upload.array("productImages"), createProduct);

export default router;
