import CustomError from "../errors/CustomError.js";
import { Order } from "../models/order.js";

export const createOrder = async (req, res) => {
  const {
    totalAmount,
    items,
    paymentStatus,
    paymentType,
    address,
    orderStatus,
  } = req.body;

  const newOrder = new Order({
    user: req.user._id,
    totalAmount,
    items,
    paymentStatus,
    paymentType,
    address,
    orderStatus,
  });

  const savedOrder = await newOrder.save();
  res.status(201).json(savedOrder);
};
export const getOrdersByUserId = async (req, res) => {
  const orders = await Order.find({ user: req.params.userId });

  if (!orders.length > 0) {
    throw new CustomError("404", "No Orders found");
  }

  res.status(200).json(orders);
};
export const getOrderDetailsByOrderId = async (req, res) => {
  const order = await Order.findOne({ _id: req.params.orderId })
    .populate("address")
    .populate({
      path: "items.productId",
      select: "title productImages price slug",
      populate: {
        path: "subCategory",
        model: "Category",
        select: "title slug",
      },
    });

  if (!order) {
    throw new CustomError("404", "No Order found");
  }

  res.status(200).json(order);
};
export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user").populate({
    path: "items.productId",
    select: "title price ",
  });

  if (!orders) {
    throw new CustomError("404", "No Order found");
  }

  res.status(200).json(orders);
};
