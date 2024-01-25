import { useSelector } from "react-redux";
import CheckOutSection from "./CheckOutSection";
import CheckOutSummary from "./CheckOutSummary";

const CheckOutContainer = () => {
  const { cartItems, cartTotal, gst } = useSelector((state) => state.cart);
  return (
    <section className="flex gap-4 p-4 w-full h-full">
      <CheckOutSection cartItems={cartItems} />
      <CheckOutSummary cartItems={cartItems} cartTotal={cartTotal} gst={gst} />
    </section>
  );
};

export default CheckOutContainer;
