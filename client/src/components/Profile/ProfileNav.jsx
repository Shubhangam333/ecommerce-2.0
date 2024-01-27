import { Link, useNavigate } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import { useLogoutMutation } from "../../redux/api/auth/authapi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";

const ProfileNav = () => {
  const [logoOut] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logoOut().unwrap();
      console.log("r", res);
      if (res) {
        dispatch(clearCart());
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  return (
    <div className="h-full flex flex-col gap-8">
      <ProfileHeader />
      <div className="flex flex-col gap-4">
        <div className="hover:text-red-600">
          <Link to="/user/profile">Profile</Link>
        </div>
        <div className="hover:text-red-600">
          <Link to="/user/orders">Orders</Link>
        </div>
        <button
          onClick={() => handleLogout()}
          className="w-44 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileNav;
