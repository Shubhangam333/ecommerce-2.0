import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import { upload } from "../config/imageupload.js";
import {
  createCategory,
  getAllCategories,
  deleteCategoryById,
} from "../controllers/categoryController.js";

const router = express.Router();

router
  .route("/createCategory")
  .post(isAuthenticated, isAdmin, upload.single("catImage"), createCategory);
router.route("/categories").get(isAuthenticated, isAdmin, getAllCategories);
router.route("/:id").delete(isAuthenticated, isAdmin, deleteCategoryById);

export default router;
