import { useDispatch } from "react-redux";
import { setOrderByFilter, setSortFilter } from "../../redux/slice/sortSlice";

const Sortfilter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "titleasc") {
      dispatch(setSortFilter("title"));
      dispatch(setOrderByFilter("asc"));
    }
    if (e.target.value === "titledesc") {
      dispatch(setSortFilter("title"));
      dispatch(setOrderByFilter("desc"));
    }
    if (e.target.value === "priceasc") {
      dispatch(setSortFilter("price"));
      dispatch(setOrderByFilter("asc"));
    }
    if (e.target.value === "pricedesc") {
      dispatch(setSortFilter("price"));
      dispatch(setOrderByFilter("desc"));
    }
  };
  return (
    <select
      name="productfilter"
      id=""
      className="py-4 px-2 border-2 border-slate-500 outline-none rounded-lg"
      onChange={handleChange}
    >
      <option value="Select Sorting Options">Select Sorting Options</option>
      <option value="titleasc">A to Z</option>
      <option value="titledesc">Z to A</option>
      <option value="priceasc">Price - Low to High</option>
      <option value="pricedesc">Price - High to Low</option>
    </select>
  );
};

export default Sortfilter;
