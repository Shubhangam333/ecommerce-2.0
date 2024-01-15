import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import {
  createStyle,
  getAllStyles,
  deleteStyleById,
  getStyleBySubCat,
} from "../controllers/stylecontroller.js";

const router = express.Router();

router.route("/createStyle").post(isAuthenticated, isAdmin, createStyle);
router.route("/styles").get(isAuthenticated, isAdmin, getAllStyles);
router.route("/:id").delete(isAuthenticated, isAdmin, deleteStyleById);
router
  .route("/styles/:subCatId")
  .get(isAuthenticated, isAdmin, getStyleBySubCat);

export default router;
