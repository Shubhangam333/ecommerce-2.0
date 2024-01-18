import { useDispatch, useSelector } from "react-redux";
import {
  setStyleByFilter,
  setStyleByFilterTitle,
} from "../../../../../redux/slice/sortSlice";

const CheckboxInput = ({ style, onToggle }) => {
  const { checkedInput } = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setStyleByFilter(style._id));
    dispatch(setStyleByFilterTitle(style));
  };
  return (
    <div className="flex gap-2 ">
      <input
        type="checkbox"
        className="cursor-pointer w-5 accent-[#117A7A] "
        id={style.title}
        onClick={handleClick}
        checked={checkedInput.includes(style._id)}
      />
      <label
        htmlFor={style.title}
        className="w-full cursor-pointer text-md font-light text-slate-600"
      >
        {style.title}
      </label>
    </div>
  );
};

export default CheckboxInput;
