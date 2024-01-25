import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartTotal } from "../../redux/slice/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { useCreatePaymentMutation } from "../../redux/api/payment/paymentapi";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const CheckOutSummary = ({ cartItems, cartTotal, gst }) => {
  const [processPayment, { isLoading }] = useCreatePaymentMutation();

  const dispatch = useDispatch();

  const makePayment = async () => {
    const publishablekey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    const stripe = await loadStripe(publishablekey);
    try {
      const res = await processPayment({ cartItems }).unwrap();
      if (res) {
        stripe.redirectToCheckout({
          sessionId: res.id,
        });
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, currentItem) => {
      const { product, quantity } = currentItem;
      const itemPrice = product.price * quantity;
      return accumulator + itemPrice;
    }, 0);
    dispatch(setCartTotal(totalPrice));
  }, [cartItems, dispatch]);

  return (
    <div className="basis-[40%] flex flex-col">
      <div className="flex flex-col gap-6 p-2 my-4">
        <h2 className="text-xl font-extrabold">Billing Details</h2>
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
      <button
        onClick={makePayment}
        className="hover:bg-[#298E83] active:bg-[#298E83] active:scale-95 bg-[#147D7B] py-2 rounded-md text-white"
      >
        Proceed to Payment {isLoading && <Loader />}
      </button>
    </div>
  );
};

export default CheckOutSummary;
