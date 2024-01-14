import { v2 as cloudinary } from "cloudinary";
import { Category } from "../models/category.js";
import CustomError from "../errors/customError.js";

export const createCategory = async (req, res, next) => {
  const { title, catImage } = req.body;

  const slug = title.split(" ").join("-");

  const catData = {
    title,
    slug,
    createdBy: req.user._id,
  };
  let imageData = {};
  if (catImage) {
    const myCloud = await cloudinary.uploader.upload(catImage, {
      folder: "ecommerce_category",
      crop: "scale",
    });
    imageData.public_id = myCloud.public_id;
    imageData.url = myCloud.secure_url;
  }

  catData.categoryImage = imageData;

  const category = new Category(catData);
  await category.save();

  res.status(200).json({ category, msg: "Category created" });
};

export const getAllCategories = async (req, res, next) => {
  const categories = await Category.find()
    .populate("createdBy", "firstName")
    .sort("-createdAt");

  if (!categories) {
    throw new CustomError(404, "No Categories Found");
  }

  res.status(200).json({ categories });
};

export const deleteCategoryById = async (req, res, next) => {
  const catId = req.params.id;

  const category = await Category.findById(catId);

  if (!category) {
    throw new CustomError(400, "No Category with this Id exist.");
  }

  if (!category.categoryImage) {
    throw new CustomError(404, "No Image exist");
  }
  await cloudinary.uploader.destroy(category.categoryImage.public_id);
  await Category.findByIdAndDelete(catId);

  res.status(200).json({ msg: "deleted successfully" });
};
