import { toast } from "react-toastify";
import {
  useDeleteCartItemsMutation,
  useGetCartItemsQuery,
} from "../../redux/api/user/userapi";
import Loader from "../Loader/Loader";
import CartItem from "./CartItem";

const CartSection = ({ cartItems }) => {
  const [deleteItem] = useDeleteCartItemsMutation();

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id).unwrap();
      toast.success("Item deleted");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <section className="flex flex-col gap-2 basis-[60%] w-full">
      {cartItems.map((item) => (
        <CartItem
          key={item.product._id}
          item={item}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </section>
  );
};

export default CartSection;
