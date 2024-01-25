import { Order } from "../models/order.js";

export const createOrder = async (req, res) => {
  const { totalAmount, items, paymentStatus, paymentType, address } = req.body;

  const newOrder = new Order({
    user: req.user._id,
    totalAmount,
    items,
    paymentStatus,
    paymentType,
    address,
  });

  const savedOrder = await newOrder.save();
  res.status(201).json(savedOrder);
};
