import { useDispatch } from "react-redux";
import { setPriceFilter } from "../../../../../redux/slice/sortSlice";

const PriceRadioInput = ({ price, index }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setPriceFilter({ lb: price.lb, hb: price.hb }));
  };

  return (
    <div className="flex items-center">
      <input type="radio" name="price" id={index} onChange={handleChange} />
      <label htmlFor={index} className="font-light text-md">
        Rs. {price.lb} to Rs. {price.hb}
      </label>
    </div>
  );
};

export default PriceRadioInput;
