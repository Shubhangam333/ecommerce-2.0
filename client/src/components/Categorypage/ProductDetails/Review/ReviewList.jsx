import { useGetAllProductReviewQuery } from "../../../../redux/api/product/productapi";
import Loader from "../../../Loader/Loader";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ productId }) => {
  const { data, isLoading } = useGetAllProductReviewQuery(productId);

  return (
    <div className="px-6">
      <h3 className="text-xl font-bold text-gray-600 underline mb-6">
        Reviews
      </h3>
      <section className="flex flex-wrap gap-2">
        {data
          ? data.map((rev) => <ReviewCard key={rev._id} review={rev} />)
          : "No Review Found"}
        {isLoading && <Loader />}
      </section>
    </div>
  );
};

export default ReviewList;
