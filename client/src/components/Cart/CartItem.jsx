import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  console.log("item", item);
  return (
    <div className="flex justify-between">
      <div className="basis-[30%] h-[200px]">
        <img
          src={item.product.productImages[0].url}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="basis-[70%] flex justify-between">
        <div>
          <Link
            to="/"
            className="text-md text-slate-800 font-bold hover:text-[#014c8c]"
          >
            {item.product.title}
          </Link>
          <p className="text-sm text-gray-600">
            {item.product.subCategory.title}
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-bold text-sm self-end">
            {item.product.price}
          </span>
          <button className="px-6 mb-6 text-sm opacity-90 hover:opacity-100 bg-[#147D7B] py-1 text-white rounded-lg ">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
