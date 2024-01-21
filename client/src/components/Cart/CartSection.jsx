import { useGetCartItemsQuery } from "../../redux/api/user/userapi";
import Loader from "../Loader/Loader";
import CartItem from "./CartItem";

const CartSection = () => {
  const { data, isFetching } = useGetCartItemsQuery();

  if (isFetching) {
    return <Loader />;
  }

  if (!data || !data.cartItems || !data.cartItems.length > 0) {
    return <h1>No Items Found</h1>;
  }

  return (
    <section className="flex flex-col gap-2 basis-[60%] w-full">
      {data.cartItems.map((item) => (
        <CartItem key={item.product._id} item={item} />
      ))}
    </section>
  );
};

export default CartSection;
