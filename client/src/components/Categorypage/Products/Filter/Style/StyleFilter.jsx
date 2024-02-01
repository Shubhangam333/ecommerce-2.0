import { useEffect, useState } from "react";
import CheckboxInput from "./CheckboxInput";
import SearchInput from "./SearchInput";
import { useGetAllStylesBySubCatAndSectionMutation } from "../../../../../redux/api/style/styleapi";
import Loader from "../../../../Loader/Loader";
import { useSelector } from "react-redux";

const StyleFilter = ({ categoryId }) => {
  const [getStyleBySubCatAndSection, { data: styles, isLoading }] =
    useGetAllStylesBySubCatAndSectionMutation();
  const { section } = useSelector((state) => state.auth);

  useEffect(() => {
    const getStyleList = async () => {
      await getStyleBySubCatAndSection({
        subCatId: categoryId,
        section,
      }).unwrap();
    };

    getStyleList();
  }, [getStyleBySubCatAndSection, categoryId, section]);

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
