import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useCreatePaymentIntentMutation } from "../../redux/api/payment/paymentapi";
import { useDispatch, useSelector } from "react-redux";
import { useEmptyCartMutation } from "../../redux/api/user/userapi";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../../redux/api/order/orderapi";
import "./PaymentForm.css";
import Loader from "../Loader/Loader";
import { useState } from "react";
import { clearCart } from "../../redux/slice/cartSlice";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal, gst, cartItems, cartAddress } = useSelector(
    (state) => state.cart
  );
  const [Loading, setLoading] = useState(false);
  const [createOrder] = useCreateOrderMutation();
  const [removeCart] = useEmptyCartMutation();
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = cartItems.map((item) => {
    return {
      productId: item.product._id,
      payablePrice: item.product.price,
      purchasedQty: item.quantity,
    };
  });

  const handlePayment = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await createPaymentIntent({ amount: cartTotal + gst });
    console.log("respos", response);
    if (response) {
      const confirmPayment = await stripe.confirmCardPayment(response.data, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      try {
        const orderData = {
          totalAmount: cartTotal + gst,
          items,
          paymentStatus: confirmPayment.paymentIntent.status,
          paymentType: "card",
          address: cartAddress,
          orderStatus: [{ type: "ordered" }],
        };

        const orderes = await createOrder(orderData).unwrap();

        if (orderes && confirmPayment.paymentIntent.status === "succeeded") {
          await removeCart();
          dispatch(clearCart());
          setLoading(false);

          setTimeout(() => {
            navigate("/user/success");
          }, 2000);
        } else {
          setLoading(false);

          setTimeout(() => {
            navigate("/user/cancel");
          }, 3000);
        }
      } catch (error) {
        toast.error("Something went wrong.");
      }
    }
  };

  return (
    <div className="flex  flex-col items-center justify-center">
      {Loading && <Loader />}
      <form onSubmit={handlePayment} className="stripe-form ">
        <label>
          Card Number
          <CardNumberElement className="stripe-input" />
        </label>

        <label>
          Expiration Date
          <CardExpiryElement className="stripe-input" />
        </label>

        <label>
          CVC
          <CardCvcElement className="stripe-input" />
        </label>

        <button type="submit" disabled={Loading}>
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
