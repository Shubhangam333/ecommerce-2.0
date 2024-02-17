import { useEffect, useRef } from "react";
import headerLogo from "/shopping-cart.svg";

const SecondaryNav = ({ setSecondaryNav, secondaryNav }) => {
  const navContainer = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navContainer.current &&
        !navContainer.current.contains(event.target)
      ) {
        setSecondaryNav(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 800) {
        setSecondaryNav(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setSecondaryNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      window.addEventListener("resize", handleResize);
    };
  }, [setSecondaryNav]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-white  z-[100]  w-[90%] px-4 py-2 ${
          secondaryNav ? "navContainer" : "navContainer closed"
        }`}
        ref={navContainer}
      >
        <div className="flex gap-8 items-center ">
          <img src={headerLogo} alt="logo" className="w-20 h-20 object-cover" />
          <button className="text-[#117A7A] p-2 border-[2px] border-[#117A7A]">
            Login/Register
          </button>
        </div>
        <div className="mt-4 text-md">
          <div className="flex justify-between">
            <button className=" text-center basis-[100%]">Men</button>
            <button className=" text-center basis-[100%]">Women</button>
            <button className=" text-center basis-[100%]">Kids</button>
          </div>
        </div>
        <div className="my-4">
          <ul>
            <li>
              <div>WinterWear</div>
              <ul className="translate-x-[-100%]">
                <li>All Winterwear</li>
                <li>Hoodies</li>
                <li>SweatShirts</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default SecondaryNav;
