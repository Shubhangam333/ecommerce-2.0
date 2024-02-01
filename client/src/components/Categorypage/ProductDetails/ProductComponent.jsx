import { useEffect, useState } from "react";
import { useGetProductBySlugNameMutation } from "../../../redux/api/product/productapi";
import Breadcrumb from "../Breadcrumb";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import ProductImages from "./ProductImageSection/ProductImages";
import ProductContent from "./ProductContent";
import ProductImageModal from "./ProductImageSection/ProductImageModal";
import { MdEdit } from "react-icons/md";
import ReviewComponent from "./Review/ReviewComponent";
import ReviewList from "./Review/ReviewList";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const [getProductDetails, { data: product, isLoading }] =
    useGetProductBySlugNameMutation();
  const { productname } = useParams();
  const [imageModal, setImageModal] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
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
      {user && (
        <div className="flex w-full flex-col">
          <button
            className="mt-8 self-end flex gap-2 items-center text-gray-500"
            onClick={() => setIsReviewOpen(!isReviewOpen)}
          >
            <MdEdit />
            Write a Review
          </button>

          <ReviewComponent
            setIsReviewOpen={setIsReviewOpen}
            isReviewOpen={isReviewOpen}
            productId={product._id}
          />
          <ReviewList productId={product._id} />
        </div>
      )}
    </>
  );
};

export default ProductComponent;
