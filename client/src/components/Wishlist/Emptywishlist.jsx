import logo from "/wishList-empty-icon.png";
import Navbtn from "../Navbtns/Navbtn";

const Emptywishlist = () => {
  return (
    <div className="emp-wishlist  flex flex-col items-center gap-4">
      <img src={logo} alt="" className="w-72 h-72 object-cover" />
      <h3 className="text-2xl font-bold">
        Your wishlist is lonely and looking for love.
      </h3>
      <p className="text-lg">
        Add products to your wishlist, review them anytime and easily move to
        cart.
      </p>
      <Navbtn />
    </div>
  );
};

export default Emptywishlist;
