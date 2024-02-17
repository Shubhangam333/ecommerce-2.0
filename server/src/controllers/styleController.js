import CustomError from "../errors/CustomError.js";
import { Style } from "../models/style.js";

export const createStyle = async (req, res, next) => {
  const { title, parent_category, sub_category, section } = req.body;

  const slug = title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const styleData = {
    title,
    slug,
    category: parent_category,
    subCategory: sub_category,
    section,
    createdBy: req.user._id,
  };
  const style = new Style(styleData);
  await style.save();

  res.status(200).json({ style, msg: "Style created" });
};
export const updateStyle = async (req, res, next) => {
  const { title, parent_category, sub_category, section, styleId } = req.body;

  const slug = title.toLowerCase().split(" ").join("-");

  const styleData = {
    title,
    slug,
    category: parent_category,
    subCategory: sub_category,
    section,
  };

  const updatedStyle = await Style.findByIdAndUpdate(styleId, styleData, {
    new: true,
  });

  if (!updatedStyle) {
    throw new CustomError(404, "Style Not found");
  }
  res.status(200).json({ msg: "Style updated" });
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

export const getStyleBySubCatAndSection = async (req, res) => {
  const subCatId = req.params.subCatId;
  const section = req.params.section;

  const styles = await Style.find({ subCategory: subCatId, section });

  if (!styles) {
    throw new CustomError(404, "No Style Exist.");
  }

  res.status(200).json(styles);
};

export const getStyleDetailsById = async (req, res) => {
  const styleId = req.params.styleId;

  if (!styleId) {
    throw new CustomError(404, "Style Id is required.");
  }

  const style = await Style.findOne({ _id: styleId })
    .populate("category", "title")
    .populate("subCategory", "title");

  if (!style) {
    throw new CustomError(404, "Style not found");
  }

  res.status(200).json(style);
};
