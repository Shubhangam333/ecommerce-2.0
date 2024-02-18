import { useEffect } from "react";
import { useGetCartItemsQuery } from "../../redux/api/user/userapi";
import Loader from "../Loader/Loader";
import CartSection from "./CartSection";
import CartSummary from "./CartSummary";
import { useDispatch } from "react-redux";
import { setCartItems } from "../../redux/slice/cartSlice";

const CartDetails = () => {
  const { data, isLoading } = useGetCartItemsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCartItems(data.cartItems));
    }
  }, [dispatch, data]);
  if (isLoading) {
    return <Loader />;
  }

  if (!data || !data.cartItems || !data.cartItems.length > 0) {
    return <h1>No Items Found</h1>;
  }

  return (
    <section className="flex p-6 gap-6 md:flex-row flex-col">
      <CartSection cartItems={data.cartItems} />
      <CartSummary cartItems={data.cartItems} />
    </section>
  );
};

export default CartDetails;
