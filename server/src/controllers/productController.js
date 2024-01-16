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

  await Product.findByIdAndDelete(req.params.id);

  res.status(200).json({ msg: "Product Deleted" });
};
