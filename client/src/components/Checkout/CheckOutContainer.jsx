import { useGetCartItemsQuery } from "../../redux/api/user/userapi";
import Loader from "../Loader/Loader";
import CheckOutSection from "./CheckOutSection";
import CheckOutSummary from "./CheckOutSummary";

const CheckOutContainer = () => {
  const { data, isLoading } = useGetCartItemsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (!data || !data.cartItems || !data.cartItems.length > 0) {
    return <h1>No Items Found</h1>;
  }
  return (
    <section className="flex gap-4 p-4 w-full h-full">
      <CheckOutSection cartItems={data.cartItems} />

      <CheckOutSummary cartItems={data.cartItems} />
    </section>
  );
};

export default CheckOutContainer;
