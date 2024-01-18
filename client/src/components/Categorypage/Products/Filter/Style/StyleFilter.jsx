import { useEffect, useState } from "react";
import CheckboxInput from "./CheckboxInput";
import SearchInput from "./SearchInput";
import { useGetAllStylesBySubCatMutation } from "../../../../../redux/api/style/styleapi";
import Loader from "../../../../Loader/Loader";

const StyleFilter = ({ categoryId }) => {
  const [getStyleBySubCat, { data: styles, isLoading }] =
    useGetAllStylesBySubCatMutation();

  useEffect(() => {
    const getStyleList = async () => {
      await getStyleBySubCat(categoryId).unwrap();
    };

    getStyleList();
  }, [getStyleBySubCat, categoryId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!styles) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <h2 className="mb-2 font-bold">Search for Styles</h2>
      <div className="mb-4">
        <SearchInput />
      </div>
      {styles.map((style) => (
        <CheckboxInput key={style._id} style={style} />
      ))}
    </div>
  );
};

export default StyleFilter;
