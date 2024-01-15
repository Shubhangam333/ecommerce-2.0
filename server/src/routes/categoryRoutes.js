import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import { upload } from "../config/imageupload.js";
import {
  createCategory,
  getAllCategories,
  deleteCategoryById,
  getAllParentCategories,
  getAllSubCategories,
  getSubCategoriesByParentCategoryId,
} from "../controllers/categoryController.js";

const router = express.Router();

router
  .route("/createCategory")
  .post(isAuthenticated, isAdmin, upload.single("catImage"), createCategory);
router.route("/categories").get(isAuthenticated, isAdmin, getAllCategories);
router.route("/:id").delete(isAuthenticated, isAdmin, deleteCategoryById);
router
  .route("/parentCategories")
  .get(isAuthenticated, isAdmin, getAllParentCategories);
router
  .route("/subCategories")
  .get(isAuthenticated, isAdmin, getAllSubCategories);
router
  .route("/subCategories/:parentCatId")
  .get(isAuthenticated, isAdmin, getSubCategoriesByParentCategoryId);

export default router;
