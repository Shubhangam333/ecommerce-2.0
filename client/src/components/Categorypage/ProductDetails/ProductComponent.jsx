import { useEffect, useState } from "react";
import { useGetProductBySlugNameMutation } from "../../../redux/api/product/productapi";
import Breadcrumb from "../Breadcrumb";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import ProductImages from "./ProductImageSection/ProductImages";
import ProductContent from "./ProductContent";
import ProductImageModal from "./ProductImageSection/ProductImageModal";

const ProductComponent = () => {
  const [getProductDetails, { data: product, isLoading }] =
    useGetProductBySlugNameMutation();
  const { productname } = useParams();
  const [imageModal, setImageModal] = useState(false);
  useEffect(() => {
    const getDetails = async () => {
      await getProductDetails(productname).unwrap();
    };

    getDetails();
  }, [getProductDetails, productname]);

  if (isLoading) {
    return <Loader />;
  }

  if (!product) {
    return null;
  }

  return (
    <>
      <Breadcrumb title={product.title} />
      <section className="flex justify-between items-start min-h-screen">
        <ProductImages
          images={product.productImages}
          setImageModal={setImageModal}
        />
        <ProductContent product={product} />
        {imageModal && (
          <ProductImageModal
            images={product.productImages}
            setImageModal={setImageModal}
          />
        )}
      </section>
    </>
  );
};

export default ProductComponent;
