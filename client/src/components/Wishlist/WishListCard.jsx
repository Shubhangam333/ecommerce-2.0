import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const WishListCard = ({ product, handleDeleteItem, id }) => {
  return (
    <div className="flex flex-col gap-2 md:w-[270px] relative border-[1px] border-slate-950">
      <button
        className="absolute top-2 right-2 text-md rounded-full border-[1px] p-2 border-slate-950"
        onClick={() => handleDeleteItem(id)}
      >
        <RxCross1 />
      </button>
      <img
        src={product.productImages[0].url}
        alt=""
        className="w-full h-full object-cover border-[#17B987]"
      />
      <div className="flex flex-col px-4 ">
        <h3 className="text-slate-900 text-lg font-bold">{product.title}</h3>
        <Link to={"/"} className="text-slate-700 text-md font-light">
          {product.subCategory.title}
        </Link>
        <p className="text-md">Rs. {product.price}</p>
      </div>
    </div>
  );
};

export default WishListCard;
