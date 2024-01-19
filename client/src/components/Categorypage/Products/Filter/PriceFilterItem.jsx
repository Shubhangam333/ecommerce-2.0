import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setPriceFilter } from "../../../../redux/slice/sortSlice";

const PriceFilterItem = ({ priceFilter }) => {
  const dispatch = useDispatch();
  return (
    <>
      {priceFilter.lb > 0 && (
        <div className="border-[1px] border-slate-500 rounded-full px-2 py-1 flex gap-1 wrap items-center">
          <span>
            Rs. {priceFilter.lb} to Rs. {priceFilter.hb}
          </span>
          <button onClick={() => dispatch(setPriceFilter(priceFilter))}>
            <IoIosClose className="text-2xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default PriceFilterItem;
