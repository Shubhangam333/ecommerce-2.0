import { useParams } from "react-router-dom";
import Categoryheader from "./Categoryheader";
import Categorynavsection from "./Categorynavsection";
import Mainsection from "./Mainsection";
import { useCallback, useEffect } from "react";
import { useGetCategoryBySlugMutation } from "../../redux/api/category/categoryapi";
import Loader from "../Loader/Loader";

const Category = () => {
  const { catname } = useParams();

  console.log("p", catname);

  const [categoryDetails, { data, isFetching }] =
    useGetCategoryBySlugMutation();

  const getCategoryDetails = useCallback(async () => {
    await categoryDetails(catname);
  }, [catname, categoryDetails]);

  useEffect(() => {
    getCategoryDetails();
  }, [getCategoryDetails]);

  console.log("c", data);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {data && (
            <>
              <Categoryheader />
              <Categorynavsection title={data.title} />
              <Mainsection categoryId={data._id} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Category;
