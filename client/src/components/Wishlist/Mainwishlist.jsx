import { useSelector } from "react-redux";
import Emptywishlist from "./Emptywishlist";
import WishListSection from "./WishListSection";

const Mainwishlist = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="m-4 flex ">
      {user.wishlistItems.length <= 0 && <Emptywishlist />}
      {user.wishlistItems.length > 0 && (
        <>
          <WishListSection wishlistItems={user.wishlistItems} />
        </>
      )}
    </section>
  );
};

export default Mainwishlist;
