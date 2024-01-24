import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetAllAddressQuery } from "../../redux/api/address/addressapi";
import Loader from "../Loader/Loader";
import { useGetCartItemsQuery } from "../../redux/api/user/userapi";
import { useEffect } from "react";
import { setCartTotal } from "../../redux/slice/cartSlice";

const AddressSummary = () => {
  const { cartTotal, gst } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useGetAllAddressQuery();
  const { data: cartItems, isLoading } = useGetCartItemsQuery();

  const handleClick = () => {
    if (data.length !== 0) {
      navigate("/user/checkout");
    } else {
      toast.error("Please add your address first");
    }
  };

  useEffect(() => {
    const totalPrice = cartItems.cartItems.reduce(
      (accumulator, currentItem) => {
        const { product, quantity } = currentItem;
        const itemPrice = product.price * quantity;
        return accumulator + itemPrice;
      },
      0
    );
    dispatch(setCartTotal(totalPrice));
  }, [cartItems, dispatch]);

  return (
    <div className="basis-[30%] flex flex-col">
      <button
        className="hover:bg-[#298E83] active:bg-[#298E83] active:scale-95 bg-[#147D7B] py-2 rounded-md text-white"
        onClick={handleClick}
      >
        Proceed to Checkout
      </button>
      <div className="flex flex-col gap-6 p-2 my-4">
        <h2>Billing Details</h2>
        <div className="flex flex-col gap-2 px-4 ">
          <div className="flex justify-between">
            <span className="text-lg font-light">Cart Total</span>
            <span className="text-md font-bold">1200</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-light">GST</span>
            <span className="text-md font-light">{gst}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-light">Shipping Charges</span>
            <span className="text-md font-light">0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-light">Total Amount</span>
            <span className="text-md font-bold">{cartTotal + gst}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSummary;
