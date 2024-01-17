import { v2 as cloudinary } from "cloudinary";
import { Product } from "../models/product.js";
import CustomError from "../errors/customError.js";

export const createProduct = async (req, res, next) => {
  const {
    title,
    description,
    price,
    sizes,
    section,
    category,
    subCategory,
    style,
  } = req.body;

  const slug = title.toLowerCase().split(" ").join("-");

  const sizesData = JSON.parse(sizes);

  const sizesArray = Object.keys(sizesData).map((sizeType) => ({
    sizeType,
    quantity: parseInt(sizesData[sizeType].quantity, 10) || 0,
  }));

  let imagesData = [];
  if (req.files) {
    let images = req.files;
    for (let i = 0; i < images.length; i++) {
      const myCloud = await cloudinary.uploader.upload(images[i].path, {
        folder: "ecommerce_products",
        crop: "scale",
      });
      imagesData.push({
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      });
    }
  }
  const productData = {
    title,
    description,
    price,
    sizes: sizesArray,
    section,
    category,
    subCategory,
    style,
    slug,
    productImages: imagesData,
    createdBy: req.user._id,
  };
  const product = new Product(productData);
  await product.save();

  res.status(200).json(product);
};

export const getAllProducts = async (req, res, next) => {
  const products = await Product.find()
    .populate("createdBy", "firstName")
    .populate("category", "title")
    .populate("subCategory", "title")
    .populate("style", "title")
    .sort("-createdAt");

  if (!products) {
    throw new CustomError("No Products found");
  }

  res.status(200).json({ products });
};

export const deleteProductById = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new CustomError(404, "No Product with such id exist");
  }

  if (product.productImages) {
    for (let i = 0; i < product.productImages.length; i++) {
      await cloudinary.uploader.destroy(product.productImages[i].public_id);
    }
  }
  await Product.findByIdAndDelete(req.params.id);

  res.status(200).json({ msg: "Product Deleted" });
};

export const getProductsBySubCategoryId = async (req, res, next) => {
  // Filtering

  const queryObj = { ...req.query };
  const excludeFields = ["page", "limit", "fields", "q", "sortBy", "orderBy"];
  excludeFields.forEach((el) => delete queryObj[el]);
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  console.log(queryStr);

  let query = Product.find(JSON.parse(queryStr)).populate("category", "-__v");

  if (req.query.q) {
    query = query
      .find({
        name: { $regex: req.query.q, $options: "i" },
      })
      .populate("category", "-__v");
  }

  // Sorting

  const sort = {};

  if (req.query.sortBy) {
    const sortOrder = req.query.orderBy === "desc" ? -1 : 1;

    // Construct the sort object
    sort[req.query.sortBy] = sortOrder;
    query = query.sort(sort);
  } else {
    query = query.sort("-createdAt");
  }

  if (req.params.categoryId) {
    query.find({ subCategory: req.params.categoryId });
  }

  // limiting the fields

  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }
  const productCount = await Product.countDocuments(query);
  // pagination

  const page = req.query.page || 1;
  const limit = req.query.limit || 6;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  const pages = Math.ceil(productCount / limit);

  if (skip >= productCount)
    throw new CustomError(404, "This Page does not exists");

  const products = await query.populate("subCategory", "title");

  if (!products) {
    throw new CustomError(404, "No Product with such category exist.");
  }

  res.status(200).json({ productCount, products, pages });
};
