import { useSelector } from "react-redux";
import { useGetProductsBySectionMutation } from "../../redux/api/product/productapi";
import { useCallback, useEffect } from "react";
import Loader from "../Loader/Loader";
import ArrivalProductCard from "./ArrivalProductCard";

const ArrivalProductListing = () => {
  const { section } = useSelector((state) => state.auth);
  const [getLatestProducts, { data: arrivalItems, isLoading }] =
    useGetProductsBySectionMutation();

  const getProd = useCallback(async () => {
    if (section) {
      await getLatestProducts(section);
    }
  }, [section, getLatestProducts]);

  useEffect(() => {
    getProd();
  }, [getProd]);

  return (
    <section className="p-4 flex gap-2 w-full ">
      {isLoading && <Loader />}
      {arrivalItems &&
        arrivalItems.map((arrivalItem) => (
          <ArrivalProductCard
            arrivalItem={arrivalItem}
            key={Math.floor(Math.random() * 100)}
          />
        ))}
    </section>
  );
};

export default ArrivalProductListing;
