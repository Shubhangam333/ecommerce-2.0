import { Link } from "react-router-dom";
import headerLogo from "../../assets/shopping-cart.svg";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown, IoIosLogIn, IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const PrimaryNav = ({ setSecondaryNav }) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const navbar = useRef();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > navbar.current.offsetTop) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isNavbarFixed ? "fixed top-0 left-0 right-0" : "";

  return (
    <nav
      id="navbar"
      ref={navbar}
      className={`bg-white md:px-12 px-4 z-[1000] flex items-center shadow-2xl border-b-2 border-slate-300 ${navbarClass} w-full justify-between`}
      // className=" fixed top-0 left-0 right-0 bg-white  md:px-12 px-4 flex items-center justify-between shadow-2xl border-b-2 border-slate-300 h-12"
    >
      <div className="logo flex items-center order-1 md:order-0 ">
        <img src={headerLogo} alt="" className="w-12 h-12 object-cover" />
      </div>
      <button
        className="menu-icon md:hidden order-0 "
        onClick={() => setSecondaryNav(true)}
      >
        <RxHamburgerMenu className="text-3xl" />
      </button>
      <ul className="justify-between items-center basis-[70%] h-full md:flex hidden md:order-1">
        <li className="h-full flex items-center">
          <div className="navItem relative h-full flex flex-col justify-center">
            <h3 className="cursor-pointer flex items-center uppercase font-extrabold text-slate-700 text-sm hover:text-[#E01B23]">
              WinterWear <IoIosArrowDown />
            </h3>
            <ul className="absolute top-[100%] p-4 z-50 bg-white  dropdown-menu left-0 w-full transition-all font-light text-md ">
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  All WinterWear
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  SweatShirt
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="h-full flex items-center">
          <div className="navItem relative h-full flex flex-col justify-center">
            <h3 className="cursor-pointer flex items-center uppercase font-extrabold text-slate-700 text-sm hover:text-[#E01B23]">
              TopWear <IoIosArrowDown />
            </h3>
            <ul className="absolute top-[100%] z-[1000] bg-white p-4 dropdown-menu left-0 w-full transition-all font-light text-md ">
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  All WinterWear
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  SweatShirt
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="h-full flex items-center">
          <div className="navItem relative h-full flex flex-col justify-center">
            <h3 className="cursor-pointer flex items-center uppercase font-extrabold text-slate-700 text-sm hover:text-[#E01B23]">
              Sneakers <IoIosArrowDown />
            </h3>
            <ul className="absolute top-[100%] z-[1000] bg-white  p-4 dropdown-menu left-0 w-full transition-all font-light text-md ">
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  All WinterWear
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  SweatShirt
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="h-full flex items-center">
          <div className="navItem relative h-full flex flex-col justify-center">
            <h3 className="cursor-pointer flex items-center uppercase font-extrabold text-slate-700 text-sm hover:text-[#E01B23]">
              Accessories <IoIosArrowDown />
            </h3>
            <ul className="absolute top-[100%] p-4 z-[1000] bg-white  dropdown-menu left-0 w-full transition-all font-light text-md ">
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  All WinterWear
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  SweatShirt
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="h-full flex items-center">
          <div className="navItem relative h-full flex flex-col justify-center">
            <h3 className="cursor-pointer flex items-center uppercase font-extrabold text-slate-700 text-sm hover:text-[#E01B23]">
              Collections <IoIosArrowDown />
            </h3>
            <ul className="absolute top-[100%] p-4 z-[1000] bg-white  dropdown-menu left-0 w-full transition-all font-light text-md ">
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  All WinterWear
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#E01B23]">
                  SweatShirt
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="button-container flex items-center md:gap-4 order-2 md:order-2">
        {user ? (
          <Link className="text-2xl flex items-center">
            <FaRegUser />{" "}
          </Link>
        ) : (
          <Link className="text-4xl flex items-center" to="/auth/login">
            <IoIosLogIn />
          </Link>
        )}
        <Link className="text-3xl flex items-center" to="/mywishlist">
          <IoMdHeartEmpty />
        </Link>
        <Link className="text-3xl flex items-center">
          <IoBagHandleOutline />
        </Link>
      </div>
    </nav>
  );
};

export default PrimaryNav;
