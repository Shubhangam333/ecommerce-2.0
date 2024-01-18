import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  setStyleByFilter,
  setStyleByFilterTitle,
} from "../../../../redux/slice/sortSlice";

const StyleFilterItem = ({ style }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setStyleByFilter(style._id));
    dispatch(setStyleByFilterTitle(style));
  };
  return (
    <div className="border-[1px] border-slate-500 rounded-full px-2 py-1 flex gap-1 wrap items-center">
      <span>{style.title}</span>
      <button onClick={handleClick}>
        <IoIosClose className="text-2xl" />
      </button>
    </div>
  );
};

export default StyleFilterItem;
