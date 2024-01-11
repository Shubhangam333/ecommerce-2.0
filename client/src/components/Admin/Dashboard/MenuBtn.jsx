import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setNavActive } from "../../../redux/slice/dashboardSlice";

const MenuBtn = () => {
  const dispatch = useDispatch();
  const { isActive } = useSelector((state) => state.dashboard);

  return (
    <button
      className={`cursor-pointer px-4 py-2 text-2xl  ${
        isActive ? "hidden" : ""
      }`}
      onClick={() => dispatch(setNavActive())}
    >
      <RxHamburgerMenu className="text-[#17B987] text-2xl font-bold " />
    </button>
  );
};

export default MenuBtn;
