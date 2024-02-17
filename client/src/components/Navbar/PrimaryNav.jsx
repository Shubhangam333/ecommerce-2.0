import { Link, useNavigate } from "react-router-dom";
import headerLogo from "/shopping-cart.svg";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown, IoIosLogIn, IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCategoriesWithSubCatQuery } from "../../redux/api/category/categoryapi";
import { useGetWishListItemsQuery } from "../../redux/api/user/userapi";
import { useLogoutMutation } from "../../redux/api/auth/authapi";
import { toast } from "react-toastify";
import { clearCart } from "../../redux/slice/cartSlice";

const PrimaryNav = ({ setSecondaryNav }) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const { data: categoryList } = useGetAllCategoriesWithSubCatQuery();
  const { data: wishList } = useGetWishListItemsQuery();
  const [logoOut] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate("/");

  const navbar = useRef();

  const handleLogout = async () => {
    try {
      const res = await logoOut().unwrap();
      if (res) {
        dispatch(clearCart());
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

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
  const { section } = useSelector((state) => state.auth);

  return (
    <nav
      id="navbar"
      ref={navbar}
      className={`bg-white h-[50px] md:px-12 px-4 z-[1000] flex items-center shadow-2xl border-b-2 border-slate-300 ${navbarClass} w-full justify-between`}
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
        {categoryList &&
          categoryList.map((cat) => (
            <li className="h-full flex items-center" key={cat._id}>
              <div className="navItem relative z-[10000] h-full flex flex-col justify-center">
                <h3 className="cursor-pointer h-full flex items-center uppercase font-extrabold gap-2 text-slate-700 text-sm hover:text-[#E01B23]">
                  {cat.parent.title} <IoIosArrowDown />
                </h3>
                <ul
                  key={cat.parent._id}
                  className="absolute dropdown-menu w-max top-[110%] z-[1000] bg-white p-4 hidden left-0  transition-all font-light text-md "
                >
                  {cat.subcategories &&
                    cat.subcategories.map((subcat, index) => (
                      <>
                        <li className="w-max block" key={index}>
                          <Link
                            to={`/${section}/${subcat.slug}`}
                            className="hover:text-[#E01B23] w-full block"
                          >
                            {subcat.title}
                          </Link>
                        </li>
                      </>
                    ))}
                </ul>
              </div>
            </li>
          ))}
      </ul>
      <div className="button-container flex items-center md:gap-4 order-2 md:order-2 h-full">
        {user ? (
          <Link className="text-2xl flex items-center relative navItem h-full">
            <FaRegUser />
            <ul
              key="1"
              className="absolute dropdown-menu w-max left-[-80%] top-[110%] z-[1000] bg-white p-4 hidden transition-all font-light text-md "
            >
              <li className="text-sm font-bold">
                <Link
                  to="/user/profile"
                  className="hover:text-red-600 text-slate-700"
                >
                  Profile
                </Link>
              </li>
              {user.role === "admin" && (
                <li className="text-sm font-bold">
                  <Link
                    to="/admin/dashboard"
                    className="hover:text-red-600 text-slate-700"
                  >
                    Admin Dashboard
                  </Link>
                </li>
              )}
              <li className="text-sm font-bold">
                <button
                  onClick={handleLogout}
                  className="hover:text-red-600 text-slate-700"
                >
                  Logout
                </button>
              </li>
            </ul>
          </Link>
        ) : (
          <Link className="text-4xl flex items-center" to="/auth/login">
            <IoIosLogIn />
          </Link>
        )}
        <Link
          className="text-3xl flex items-center relative"
          to="/user/mywishlist"
        >
          <IoMdHeartEmpty />
          {wishList &&
            wishList.wishlistItems &&
            wishList.wishlistItems.length > 0 && (
              <span className="absolute text-sm font-bold rounded-full right-[-4px] top-[-2px]  text-white bg-red-500  h-4 w-4 flex items-center justify-center">
                {wishList.wishlistItems.length}
              </span>
            )}
        </Link>
        <Link className="text-3xl flex items-center relative" to="/user/cart">
          <IoBagHandleOutline />
          {cartItems.length > 0 && (
            <span className="absolute text-sm font-bold rounded-full right-[-4px] top-[-2px]  text-white bg-red-500  h-4 w-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default PrimaryNav;
