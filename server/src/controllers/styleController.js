import CustomError from "../errors/customError.js";
import { Style } from "../models/style.js";

export const createStyle = async (req, res, next) => {
  const { title, parent_category, sub_category } = req.body;

  const slug = title.toLowerCase().split(" ").join("-");

  const styleData = {
    title,
    slug,
    category: parent_category,
    subCategory: sub_category,
    createdBy: req.user._id,
  };
  const style = new Style(styleData);
  await style.save();

  res.status(200).json({ style, msg: "Style created" });
};

export const getAllStyles = async (req, res, next) => {
  const styles = await Style.find()
    .populate("category", "title")
    .populate("subCategory", "title")
    .populate("createdBy", "firstName")
    .sort("-createdAt");

  if (!styles) {
    throw new CustomError(404, "No Styles Found");
  }

  res.status(200).json({ styles });
};

export const deleteStyleById = async (req, res, next) => {
  const styleId = req.params.id;

  const style = await Style.findById(styleId);

  if (!style) {
    throw new CustomError(400, "No Style with this Id exist.");
  }

  await Style.findByIdAndDelete(style);

  res.status(200).json({ msg: "deleted successfully" });
};

export const getStyleBySubCat = async (req, res) => {
  const subCatId = req.params.subCatId;

  const styles = await Style.find({ subCategory: subCatId });

  if (!styles) {
    throw new CustomError(404, "No Style Exist.");
  }

  res.status(200).json(styles);
};
