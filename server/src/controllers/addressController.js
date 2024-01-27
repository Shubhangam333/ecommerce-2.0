import CustomError from "../errors/CustomError.js";
import { Address } from "../models/address.js";
import { User } from "../models/user.js";

export const createAddress = async (req, res) => {
  const address = new Address({ ...req.body, user: req.user._id });

  await address.save();

  const user = await User.findById({ _id: req.user._id });

  if (!user) {
    throw new CustomError(400, "User does not exist");
  }

  if (!user.address || address.defaultAddress) {
    user.address = address._id;
    await user.save();
  }

  res.status(200).json({ message: "Address Created" });
};

export const getUserAddress = async (req, res) => {
  const addressInfo = await Address.find({ user: req.user._id });

  res.status(200).json(addressInfo);
};

export const deleteAddressById = async (req, res, next) => {
  const addressId = req.params.addressId;
  const address = await Address.findById(addressId);

  if (!address) {
    throw new CustomError(400, "Address not found");
  }

  const isDefault = address.defaultAddress;
  const user = await User.findOne({ address: addressId });

  if (!user) {
    await Address.deleteOne({ _id: addressId });
    return res.status(200).json({ message: "Address Removed from Profile" });
  }

  if (isDefault) {
    const otherAddress = await Address.findOne({
      user: req.user._id,
      _id: { $ne: addressId },
    });

    if (otherAddress) {
      await User.findByIdAndUpdate(req.user._id, { address: otherAddress._id });
    } else {
      await User.findByIdAndUpdate(req.user._id, { $unset: { address: 1 } });
    }
  }

  await Address.deleteOne({ _id: addressId });
  res.status(200).json({ message: "Address Removed" });
};
