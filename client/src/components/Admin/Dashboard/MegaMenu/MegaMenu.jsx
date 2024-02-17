import { FaHome, FaRegUser, FaShoppingBag } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const navItems = [
  {
    icon: <FaHome className="text-xl text-[#17B987]  " />,
    title: "Dashboard",
    url: "/admin/dashboard",
  },
  {
    icon: <FaShoppingBag className="text-xl text-[#17B987]  " />,
    title: "Product",
    url: "/admin/dashboard/products",
  },
  {
    icon: <BiSolidCategory className="text-xl text-[#17B987]  " />,
    title: "Category",
    url: "/admin/dashboard/category",
  },
  {
    icon: <BsCartFill className="text-xl text-[#17B987]  " />,
    title: "Orders",
    url: "/admin/dashboard/orders",
  },
  {
    icon: <BsCartFill className="text-xl text-[#17B987]  " />,
    title: "Styles",
    url: "/admin/dashboard/styles",
  },
  {
    icon: <FaRegUser className="text-xl text-[#17B987]  " />,
    title: "Users",
    url: "/admin/dashboard/users",
  },
];

const MegaMenu = () => {
  const { isActive } = useSelector((state) => state.dashboard);
  return (
    <div
      className={` bg-slate-700 px-8 dashboard-layout-menu fixed top-0 bottom-0 left-0 w-[250px] translate-x-[-100%] duration-1000  ${
        isActive ? "translate-x-[0%]" : ""
      }`}
    >
      <MenuHeader />
      <nav className="navbar">
        {navItems.map((nav, index) => (
          <MenuItem
            key={index}
            icon={nav.icon}
            title={nav.title}
            url={nav.url}
          />
        ))}
      </nav>
    </div>
  );
};

export default MegaMenu;
