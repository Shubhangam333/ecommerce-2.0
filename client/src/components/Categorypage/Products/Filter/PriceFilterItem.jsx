import { IoIosClose } from "react-icons/io";

const PriceFilterItem = ({ priceFilter }) => {
  return (
    <div className="border-[1px] border-slate-500 rounded-full px-2 py-1 flex gap-1 wrap items-center">
      <span>
        Rs. {priceFilter.lb} to Rs. {priceFilter.hb}
      </span>
      <button>
        <IoIosClose className="text-2xl" />
      </button>
    </div>
  );
};

export default PriceFilterItem;
