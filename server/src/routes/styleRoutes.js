import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import {
  createStyle,
  getAllStyles,
  deleteStyleById,
  getStyleBySubCat,
  updateStyle,
  getStyleDetailsById,
} from "../controllers/styleController.js";

const router = express.Router();

router.route("/createStyle").post(isAuthenticated, isAdmin, createStyle);
router.route("/updateStyle").post(isAuthenticated, isAdmin, updateStyle);
router
  .route("/getStyle/:styleId")
  .post(isAuthenticated, isAdmin, getStyleDetailsById);
router.route("/styles").get(isAuthenticated, isAdmin, getAllStyles);
router.route("/:id").delete(isAuthenticated, isAdmin, deleteStyleById);
router.route("/styles/:subCatId").get(getStyleBySubCat);

export default router;
