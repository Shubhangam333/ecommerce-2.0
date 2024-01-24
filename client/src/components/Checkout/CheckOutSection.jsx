import { useSelector } from "react-redux";
import { useGetProfileQuery } from "../../redux/api/auth/authapi";
import { useGetCartItemsQuery } from "../../redux/api/user/userapi";
import Loader from "../Loader/Loader";
import CheckOutItemCard from "./CheckOutItemCard";

const CheckOutSection = ({ cartItems }) => {
  return (
    <div className="basis-[60%]">
      <h2 className="text-xl font-extrabold">Order Summary</h2>
      <div className="flex flex-col gap-2">
        {cartItems.map((item) => (
          <CheckOutItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CheckOutSection;
