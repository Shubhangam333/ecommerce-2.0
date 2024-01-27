import { useEffect, useId, useState } from "react";
import { useGetProductsBySubCategoryIdMutation } from "../../../redux/api/product/productapi";
import Productcard from "./Productcard";
import Loader from "../../Loader/Loader";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const Productsection = ({ categoryId }) => {
  const [getProductByCategory, { data, isLoading, error }] =
    useGetProductsBySubCategoryIdMutation();
  const { section } = useSelector((state) => state.auth);
  const { sort, orderBy, styles, currentPage, priceFilter } = useSelector(
    (state) => state.sort
  );

  useEffect(() => {
    const getProducts = async () => {
      await getProductByCategory({
        categoryId,
        currentPage,
        section,
        sort,
        orderBy,
        styles,
        priceFilter,
      });
    };

    getProducts();
  }, [
    categoryId,
    getProductByCategory,
    currentPage,
    section,
    sort,
    orderBy,
    styles,
    priceFilter,
  ]);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { products, pages } = data;

  return (
    <>
      <section className="col-span-12 grid grid-cols-9 gap-12 justify-center">
        {products.map((product) => (
          <Productcard key={product._id} product={product} />
        ))}
        {pages > 1 && <Pagination pages={pages} currentPage={currentPage} />}
      </section>
    </>
  );
};

export default Productsection;
