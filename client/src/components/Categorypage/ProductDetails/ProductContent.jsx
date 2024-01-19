import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";

const ProductContent = ({ product }) => {
  const { section } = useSelector((state) => state.auth);
  const [selectedSize, setSelectedSize] = useState("");
  const [accordionActive, setAccordionActive] = useState(false);
  const contentHeight = useRef();
  return (
    <div className="basis-[40%] flex flex-col pr-24">
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
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="flex gap-2 ">
        <button className="basis-[100%] bg-[#EC3D25] py-2 text-white font-extrabold rounded-sm">
          Add to Cart
        </button>
        <button className="basis-[70%] px-2 flex items-center rounded-sm border-[#117A7A] text-[#117A7A] border-[1px]">
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
