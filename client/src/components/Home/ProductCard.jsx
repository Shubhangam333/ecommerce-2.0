import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-2 md:w-[270px] relative border-[1px] border-slate-950">
      <button className="absolute top-2 right-2 text-md rounded-full border-[1px] p-2 border-slate-950">
        <RxCross1 />
      </button>
      <img
        src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt=""
        className="w-full h-full object-cover border-[#17B987]"
      />
      <div className="flex flex-col px-4 ">
        <h3 className="text-slate-900 text-lg font-bold">hello</h3>
        <Link to={"/"} className="text-slate-700 text-md font-light">
          title
        </Link>
        <p className="text-md">Rs. 2000</p>
      </div>
    </div>
  );
};

export default ProductCard;
