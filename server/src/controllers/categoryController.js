import { v2 as cloudinary } from "cloudinary";
import { Category } from "../models/category.js";
import CustomError from "../errors/CustomError.js";

export const createCategory = async (req, res, next) => {
  const { title, catImage, parent_category } = req.body;

  const slug = title.toLowerCase().split(" ").join("-");

  const catData = {
    title,
    slug,
    createdBy: req.user._id,
  };
  if (parent_category) {
    catData.parentId = parent_category;
  }
  let imageData = {};
  if (catImage) {
    const myCloud = await cloudinary.uploader.upload(catImage, {
      folder: "ecommerce_category",
      crop: "scale",
    });
    imageData.public_id = myCloud.public_id;
    imageData.url = myCloud.secure_url;

    catData.categoryImage = imageData;
  }

  const category = new Category(catData);
  await category.save();

  res.status(200).json({ category, msg: "Category created" });
};

export const updateCategory = async (req, res, next) => {
  const { categoryId, title, catImage, parent_category } = req.body;

  const updatedData = {
    title,
    slug: title.toLowerCase().split(" ").join("-"),
    modifiedBy: req.user._id,
  };

  if (parent_category) {
    updatedData.parentId = parent_category;
  }

  let imageData = {};
  if (catImage) {
    const myCloud = await cloudinary.uploader.upload(catImage, {
      folder: "ecommerce_category",
      crop: "scale",
    });
    imageData.public_id = myCloud.public_id;
    imageData.url = myCloud.secure_url;

    updatedData.categoryImage = imageData;
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    categoryId,
    updatedData,
    { new: true }
  );

  if (!updatedCategory) {
    throw new CustomError(404, "Category Not found");
  }

  res.status(200).json({ message: "Category Updated Successfully" });
};

export const getAllCategories = async (req, res, next) => {
  const categories = await Category.find()
    .populate("createdBy", "firstName")
    .populate("parentId", "title")
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

  if (category.categoryImage) {
    await cloudinary.uploader.destroy(category.categoryImage.public_id);
  }

  await Category.findByIdAndDelete(catId);

  console.log("ccc");

  res.status(200).json({ msg: "deleted successfully" });
};

export const getAllParentCategories = async (req, res, next) => {
  const parentCat = await Category.find({
    parentId: { $exists: false },
  });

  if (!parentCat) {
    throw new CustomError(404, "No Category Found");
  }

  res.status(200).json(parentCat);
};
export const getAllSubCategories = async (req, res, next) => {
  const subCat = await Category.find({
    parentId: { $exists: true },
  });

  if (!subCat) {
    throw new CustomError(404, "No Sub Category Found");
  }

  res.status(200).json(subCat);
};

export const getSubCategoriesByParentCategoryId = async (req, res, next) => {
  const parentCatId = req.params.parentCatId;

  const subCat = await Category.find({ parentId: parentCatId });

  if (!subCat) {
    throw new CustomError("No SubCategory Exist");
  }

  res.status(200).json(subCat);
};

export const getCategoryWithSubCategories = async (req, res, next) => {
  const parentCategories = await Category.find({
    parentId: { $exists: false },
  });

  const categoriesWithSubcategories = await Promise.all(
    parentCategories.map(async (parentCategory) => {
      const subcategories = await Category.find({
        parentId: parentCategory._id,
      });
      return {
        parent: parentCategory,
        subcategories: subcategories,
      };
    })
  );
  res.status(200).json(categoriesWithSubcategories);
};

export const getCategoryBySlug = async (req, res, next) => {
  const category = await Category.findOne({ slug: req.params.slug });

  if (!category) {
    throw new CustomError(404, "No Category Exists.");
  }

  res.status(200).json(category);
};
