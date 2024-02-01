import { useParams } from "react-router-dom";
import StyleForm from "./StyleForm";
import { useGetStyleDetailByIdMutation } from "../../../redux/api/style/styleapi";
import { useCallback, useEffect } from "react";
import Loader from "../../Loader/Loader";

const EditStyle = () => {
  const { styleId } = useParams();

  const [getStyle, { data, isLoading }] = useGetStyleDetailByIdMutation();

  const getStyleDetails = useCallback(async () => {
    if (styleId) {
      await getStyle(styleId).unwrap();
    }
  }, [getStyle, styleId]);

  useEffect(() => {
    getStyleDetails();
  }, [getStyleDetails]);

  console.log("s", styleId);
  return (
    <section className="p-4 min-h-screen">
      {isLoading && <Loader />}
      {data && <StyleForm isEditable={true} styleinfo={data} />}
    </section>
  );
};

export default EditStyle;
