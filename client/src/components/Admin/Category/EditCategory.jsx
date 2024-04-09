import { useCallback, useEffect } from "react";
import { useGetCategoryByIdMutation } from "../../../redux/api/category/categoryapi";
import CategoryForm from "./CategoryForm";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";

const EditCategory = () => {
  const { catId } = useParams();
  console.log("c", catId);

  const [getCategory, { data, isLoading }] = useGetCategoryByIdMutation();

  const getStyleDetails = useCallback(async () => {
    if (catId) {
      await getCategory(catId).unwrap();
    }
  }, [getCategory, catId]);

  useEffect(() => {
    getStyleDetails();
  }, [getStyleDetails]);

  console.log("d", data);

  return (
    <section className="p-4 min-h-screen">
      {isLoading && <Loader />}
      {data && <CategoryForm isEditable={true} catInfo={data} />}
    </section>
  );
};

export default EditCategory;
