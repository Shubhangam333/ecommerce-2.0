import { v2 as cloudinary } from "cloudinary";
import { Category } from "../models/category.js";

export const createCategory = async (req, res, next) => {
  const { title, catImage } = req.body;

  const slug = title.split(" ").join("-");

  const catData = {
    title,
    slug,
    createdBy: req.user._id,
  };

  if (catImage) {
    const myCloud = await cloudinary.uploader.upload(catImage, {
      folder: "technews_category",
      crop: "scale",
    });
    catData.categoryImage = myCloud.secure_url;
  }

  const category = new Category(catData);
  await category.save();

  res.status(200).json({ category, msg: "Category created" });
};
