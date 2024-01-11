import headerLogo from "../../../../assets/shopping-cart.svg";
import { IoClose } from "react-icons/io5";
import { setNavActive } from "../../../../redux/slice/dashboardSlice";
import { useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
const MenuHeader = () => {
  const dispatch = useDispatch();
  return (
    <section className="py-4 px-2 text-black flex justify-between items-center">
      <h1 className="text-3xl text-[#17B987] font-extrabold">Admin</h1>
      <button
        className="cursor-pointer"
        onClick={() => dispatch(setNavActive())}
      >
        <RxHamburgerMenu className="text-[#17B987] text-2xl font-bold " />
      </button>
    </section>
  );
};

export default MenuHeader;
