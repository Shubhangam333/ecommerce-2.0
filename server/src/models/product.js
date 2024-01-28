import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    productImages: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
    section: { type: String, enum: ["men", "women", "kids"] },
    sizes: [
      {
        sizeType: {
          type: String,
          enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          required: true,
        },
        quantity: {
          type: Number,
          default: 0,
        },
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        title: String,
        review: String,
        ratings: {
          type: Number,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    style: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Style",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedAt: Date,
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
