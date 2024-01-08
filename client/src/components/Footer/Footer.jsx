import { Link } from "react-router-dom";
import headerLogo from "../../assets/shopping-cart.svg";

const Footer = () => {
  return (
    <footer className="py-4 my-4 ">
      <div className="bg-[#E11B23] py-4">
        <h1 className="text-4xl text-white text-center">
          Over 6 Million Happy Customers
        </h1>
      </div>
      <section className="flex flex-col gap-4 ">
        <div className="logo flex justify-center  w-full">
          <img
            src={headerLogo}
            alt=""
            className="w-12 h-12 object-cover block"
          />
        </div>
        <section className="grid sm:grid-cols-4 grid-cols-1 justify-center sm:gap-16 gap-2 px-8">
          <div className="flex flex-col items-start ">
            <h2 className="text-xl uppercase text-[#E11B23] font-extrabold mb-2">
              About Us
            </h2>
            <ul className="text-slate-800 font-bold  items-center ">
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start ">
            <h2 className="text-xl uppercase text-[#E11B23] font-extrabold mb-2">
              ASSISTANCE
            </h2>
            <ul className="text-slate-800 font-bold items-start flex flex-col">
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Size Chart
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Guarantee
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start ">
            <h2 className="text-xl uppercase text-[#E11B23] font-extrabold mb-2">
              my Account
            </h2>
            <ul className="text-slate-800 font-bold flex flex-col items-start">
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  Order Status
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-slate-500 hover:underline">
                  terms and Condition
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  ">
            <h2 className="text-xl uppercase text-[#E11B23] font-extrabold mb-2">
              Subscribe Now
            </h2>
            <div className="flex flex-col gap-2">
              <p>Get the latest updates on products & promotions.</p>
              <form action="" className="flex flex-col gap-2">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email "
                  className="px-2 py-2 border-2 border-red-400 outline-none"
                  required
                />
                <button className="self-start hover:bg-red-600 bg-red-500 px-2 py-2 rounded-md text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
