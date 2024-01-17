import { useState } from "react";
import { Link } from "react-router-dom";
import { setSection } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";

const navItems = [
  { name: "men", path: "/men" },
  { name: "women", path: "/women" },
  { name: "kids", path: "/kids" },
];

const Topnav = () => {
  const dispatch = useDispatch();
  const { section } = useSelector((state) => state.auth);
  return (
    <div className="relative top-0 left-0 right-0 md:flex md:px-24 px-4 bg-[#E11B23] hidden justify-between items-center">
      <ul className="flex justify-between basis-80 md:text-md text-sm text-white uppercase ">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={`${item.path}`}
            className={`border-[1px] relative   border-black font-bold  basis-1/3 py-2 text-center border-y-0  cursor-pointer
            
            ${section === item.name ? "bg-white text-black" : ""}`}
            onClick={() => dispatch(setSection(item.name))}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      <ul className="flex basis-44 justify-between">
        <li className="font-normal text-white uppercase text-sm">
          <Link to="/">Track Order</Link>
        </li>
        <li className="font-normal text-white uppercase text-sm">
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Topnav;
