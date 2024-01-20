import React from "react";

const WishListCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-2 md:w-[270px]">
      <img
        src={product.productImages[0].url}
        alt=""
        className="w-full h-full object-cover border-[#17B987]"
      />
      <div className="flex flex-col px-4 ">
        <h3 className="text-slate-900 text-lg font-bold">{product.title}</h3>
        <h3 className="text-slate-900 text-lg font-bold">
          {product.subCategory.title}
        </h3>
        <p className="text-md">Rs. {product.price}</p>
      </div>
    </div>
  );
};

export default WishListCard;
