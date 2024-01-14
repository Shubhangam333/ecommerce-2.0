import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import { upload } from "../config/imageupload.js";
import { createCategory } from "../controllers/categoryController.js";

const router = express.Router();

router
  .route("/createCategory")
  .post(isAuthenticated, isAdmin, upload.single("catImage"), createCategory);

export default router;
