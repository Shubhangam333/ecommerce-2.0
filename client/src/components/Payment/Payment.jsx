import { useCallback, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import Success from "./Success";
import Cancel from "./Cancel";
import { useCreateOrderMutation } from "../../redux/api/order/orderapi";
import { useSelector } from "react-redux";
import { useEmptyCartMutation } from "../../redux/api/user/userapi";
import { toast } from "react-toastify";

const Payment = () => {
  // const [getPaymentInfo, { data, isLoading }] = useGetPaymentInfoMutation();
  const { cartTotal, gst, cartItems, cartAddress } = useSelector(
    (state) => state.cart
  );
  const [createOrder, { isLoading: orderloading }] = useCreateOrderMutation();
  const [removeCart, { isLoading: emptycartloading }] = useEmptyCartMutation();
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParamValue = searchParams.get("session_id");

  const getPaymentDetails = useCallback(async () => {
    const items = cartItems.map((item) => {
      return {
        productId: item.product._id,
        payablePrice: item.product.price,
        purchasedQty: item.quantity,
      };
    });

    try {
      const res = await getPaymentInfo(queryParamValue).unwrap();
      const orderData = {
        totalAmount: cartTotal + gst,
        items,
        paymentStatus: res.status === "paid" ? "completed" : "cancelled",
        paymentType: "card",
        address: cartAddress,
        orderStatus: [{ type: "ordered" }],
      };
      if (res) {
        const orderes = await createOrder(orderData).unwrap();

        if (orderes && res.status === "paid") {
          await removeCart();
        }
      }

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong.");
    }
  }, [
    cartAddress,
    cartItems,
    cartTotal,
    createOrder,
    getPaymentInfo,
    gst,
    queryParamValue,
    removeCart,
    navigate,
  ]);

  useEffect(() => {
    getPaymentDetails();
  }, [getPaymentDetails]);

  if (isLoading || orderloading || emptycartloading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }
  return data.status === "paid" ? <Success /> : <Cancel />;
};

export default Payment;
