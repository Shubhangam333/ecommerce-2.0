import { useEffect, useId, useState } from "react";
import { useGetProductsBySubCategoryIdMutation } from "../../../redux/api/product/productapi";
import Productcard from "./Productcard";
import Loader from "../../Loader/Loader";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const Productsection = ({ categoryId }) => {
  const [getProductByCategory, { data, isFetching, error }] =
    useGetProductsBySubCategoryIdMutation();

  const [currenPage, setCurrenPage] = useState(1);
  const { section } = useSelector((state) => state.auth);
  const { sort } = useSelector((state) => state.sort);

  // const [id] = useId();

  console.log("dd", data && data.productCount);

  useEffect(() => {
    const getProducts = async () => {
      await getProductByCategory({ categoryId, currenPage, section, sort });
    };

    getProducts();
  }, [categoryId, getProductByCategory, currenPage, section, sort]);

  if (isFetching) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  const { products, productCount, pages } = data;

  return (
    <>
      <section className="col-span-12 grid grid-cols-9 gap-12 justify-center">
        {products.map((product) => (
          <Productcard key={product._id} product={product} />
        ))}
        <Pagination
          pages={pages}
          currenPage={currenPage}
          setCurrenPage={setCurrenPage}
        />
      </section>
    </>
  );
};

export default Productsection;
