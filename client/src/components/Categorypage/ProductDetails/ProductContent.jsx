import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import {
  useAddToCartMutation,
  useAddToWishListMutation,
} from "../../../redux/api/user/userapi";
import { toast } from "react-toastify";
import { setCartItems } from "../../../redux/slice/cartSlice";

const ProductContent = ({ product }) => {
  const { section } = useSelector((state) => state.auth);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { user } = useSelector((state) => state.auth);
  const [addItemstoCart] = useAddToCartMutation();
  const [addItemstoWishList] = useAddToWishListMutation();
  const dispatch = useDispatch();

  const isSizeAvailable = () => {
    const selectedItem = product.sizes.find(
      (item) => item.sizeType === selectedSize
    );

    return selectedItem && selectedItem.quantity >= quantity;
  };

  const handleWishList = async () => {
    if (!user) {
      return toast.error("Login is required");
    }
    if (!selectedSize) {
      return toast.error("Please select a particular size");
    }
    if (!isSizeAvailable()) {
      return toast.error("Specified quantiy is out of stock");
    }

    try {
      const res = await addItemstoWishList({
        product,
        quantity,
        sizeType: selectedSize,
      }).unwrap();
      toast.success(res.msg);
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const handleCart = async () => {
    if (!user) {
      return toast.error("Login is required");
    }

    if (!selectedSize) {
      return toast.error("Please select a particular size");
    }
    if (!isSizeAvailable()) {
      return toast.error("Specified quantiy is out of stock");
    }

    try {
      const res = await addItemstoCart({
        product,
        quantity,
        sizeType: selectedSize,
      }).unwrap();
      if (res) {
        toast.success(res.msg);
        dispatch(setCartItems(res.cartItems));
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="basis-[40%] flex flex-col md:pr-24">
      <h1 className="capitalize text-3xl text-slate-600 font-extrabold">
        {product.title}
      </h1>
      <Link
        to={`/${section}/${product.subCategory.slug}`}
        className="text-sm text-slate-400 hover:text-[#194C8C]"
      >
        {product.subCategory.title}
      </Link>
      <span className="my-8 text-2xl font-bold text-slate-600">
        Rs. {product.price}
      </span>
      <div className="flex gap-2 ">
        {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map((sizeType) => (
          <button
            key={sizeType}
            className={`rounded-2xl border-2 basis-[100%] ${
              selectedSize == sizeType
                ? " border-[#117A7A] border-2 "
                : "border-gray-400 "
            }`}
            onClick={() => setSelectedSize(sizeType)}
          >
            {sizeType}
          </button>
        ))}
      </div>

      <div className="my-6 flex gap-4">
        <label htmlFor="quantity" className="font-light">
          Quantity
        </label>
        <select
          name=""
          id="quantity"
          className="outline-none border-2 px-2 border-gray-300"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="flex gap-2 ">
        <button
          className="sm:basis-[100%] basis-[70%] bg-[#EC3D25] py-2 text-white font-extrabold rounded-sm active:scale-95 "
          onClick={handleCart}
        >
          Add to Cart
        </button>
        <button
          className="basis-[70%] sm:px-2 flex items-center justify-center rounded-sm border-[#117A7A] text-[#117A7A] border-[1px] active:scale-95"
          onClick={handleWishList}
        >
          <CiHeart className="text-xl" />
          <span>Add to WishList</span>
        </button>
      </div>
      <div className="flex items-start gap-2 my-4 ">
        <BsClockHistory className="text-4xl text-gray-500" />
        <span className="text-sm text-gray-500 ">
          This product is eligible for return or exchange under our 30-day
          return or exchange policy. No questions asked.
        </span>
      </div>
    </div>
  );
};

export default ProductContent;
