import { toast } from "react-toastify";
import {
  useDeleteWishListItemsMutation,
  useGetWishListItemsQuery,
} from "../../redux/api/user/userapi";
import Loader from "../Loader/Loader";
import WishListCard from "./WishListCard";

const WishListSection = ({ wishlistItems }) => {
  const { data: wishList, isLoading } = useGetWishListItemsQuery();

  const [deleteItem, { data }] = useDeleteWishListItemsMutation();
  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id).unwrap();
      toast.success("Item Removed from WishList.");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!wishList) {
    return null;
  }
  return (
    <div className="p-8 flex flex-col gap-4">
      <h2 className="text-xl font-extrabold text-gray-900">
        My WishList ({wishList.wishlistItems.length} items)
      </h2>
      <div className="flex flex-wrap gap-2 ">
        {wishList.wishlistItems.map((item) => (
          <WishListCard
            key={item.product._id}
            product={item.product}
            handleDeleteItem={handleDeleteItem}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default WishListSection;
