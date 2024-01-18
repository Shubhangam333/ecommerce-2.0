import { useDispatch, useSelector } from "react-redux";
import { setOrderByFilter, setSortFilter } from "../../redux/slice/sortSlice";
import { useNavigate } from "react-router-dom";

const Sortfilter = () => {
  const { sort } = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.value === "titleasc") {
      dispatch(setSortFilter("title"));
      dispatch(setOrderByFilter("asc"));
      navigate(`?sort=${sort}&orderBy=asc`);
    }
    if (e.target.value === "titledesc") {
      dispatch(setSortFilter("title"));
      dispatch(setOrderByFilter("desc"));
      navigate(`?sort=${sort}&orderBy=desc`);
    }
    if (e.target.value === "priceasc") {
      dispatch(setSortFilter("price"));
      dispatch(setOrderByFilter("asc"));
      navigate(`?sort=price&orderBy=asc`);
    }
    if (e.target.value === "pricedesc") {
      dispatch(setSortFilter("price"));
      dispatch(setOrderByFilter("desc"));
      navigate(`?sort=price&orderBy=desc`);
    }
  };
  return (
    <select
      name="productfilter"
      id=""
      className="py-2 px-4 border-[1px] border-slate-400 outline-none rounded-lg"
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
