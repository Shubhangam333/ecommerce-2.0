import { useSelector } from "react-redux";
import Emptywishlist from "./Emptywishlist";
import WishListSection from "./WishListSection";
import { useGetWishListItemsQuery } from "../../redux/api/user/userapi";
import Loader from "../Loader/Loader";

const Mainwishlist = () => {
  const { data: wishList, isLoading } = useGetWishListItemsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (
    !wishList ||
    !wishList.wishlistItems ||
    !wishList.wishlistItems.length > 0
  ) {
    return <Emptywishlist />;
  }

  return (
    <section className="m-4 flex ">
      {wishList.wishlistItems.length > 0 && (
        <>
          <WishListSection wishlistItems={wishList.wishlistItems} />
        </>
      )}
    </section>
  );
};

export default Mainwishlist;
