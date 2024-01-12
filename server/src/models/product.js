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
    stock: { type: Number, default: 5 },
    productImages: [{ url: { type: String, required: true } }],
    section: { type: String, enum: ["Men", "Women", "Kids"] },
    sizes: [
      {
        sizeType: {
          type: String,
          enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          required: true,
        },
        quanity: {
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
        review: String,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
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

export const Product = new mongoose.Schema("Product", productSchema);
