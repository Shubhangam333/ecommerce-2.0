import CustomError from "../errors/CustomError.js";
import { User } from "../models/user.js";

export const profile = async (req, res) => {
  if (!req.params.userId) {
    throw new CustomError(400, "No user found.");
  }
  const user = await User.findById(req.params.userId);

  if (!user) {
    throw new CustomError(400, "No user found.");
  }

  res.status(200).json(user);
};

export const addToCart = async (req, res, next) => {
  const { product, quantity, sizeType } = req.body;

  if (!product || !quantity || !sizeType) {
    throw new CustomError(400, "Invalid details");
  }
  await User.findByIdAndUpdate(req.user._id, {
    $push: {
      cartItems: {
        product,
        quantity,
        sizeType,
      },
    },
  });

  res.status(200).json({ msg: "Product Added to cart" });
};

export const getAllCartItems = async (req, res, next) => {
  const user = await User.findById({ _id: req.user._id }).populate({
    path: "cartItems.product",
    select: "title productImages price slug sizes",
    populate: {
      path: "subCategory",
      model: "Category",
      select: "title slug",
    },
  });

  res.status(200).json({ cartItems: user.cartItems });
};
export const addToWishList = async (req, res, next) => {
  const { product, quantity, sizeType } = req.body;

  if (!product || !quantity || !sizeType) {
    throw new CustomError(400, "Invalid details");
  }
  await User.findByIdAndUpdate(req.user._id, {
    $push: {
      wishlistItems: {
        product,
        quantity,
        sizeType,
      },
    },
  });

  res.status(200).json({ msg: "Added to WishList" });
};

export const getAllWishListItems = async (req, res, next) => {
  const user = await User.findById({ _id: req.user._id }).populate({
    path: "wishlistItems.product",
    select: "title productImages price slug sizes",
    populate: {
      path: "subCategory",
      model: "Category",
      select: "title",
    },
  });

  res.status(200).json({ wishlistItems: user.wishlistItems });
};
export const deleteCartItemById = async (req, res, next) => {
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $pull: { cartItems: { _id: req.params.cartItemId } } },
    { new: true }
  );

  if (!user) {
    throw new CustomError(500, "Item not found");
  }
  res.status(200).json({ msg: "Item deleted" });
};
export const deleteWishListItemById = async (req, res, next) => {
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $pull: { wishlistItems: { _id: req.params.wishlistItemId } } },
    { new: true }
  );

  if (!user) {
    throw new CustomError(500, "Item not found");
  }
  res.status(200).json({ msg: "Item Removed from Wishlist" });
};
