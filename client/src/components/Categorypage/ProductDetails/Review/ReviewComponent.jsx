import ReviewForm from "./ReviewForm";

// Inside ReviewComponent
const ReviewComponent = ({ isReviewOpen, setIsReviewOpen, productId }) => {
  return (
    <section
      className={`p-6 flex flex-col gap-4 overflow-hidden duration-300 opacity-0 transition-all max-h-0 ${
        isReviewOpen ? "max-h-full opacity-100  py-16 " : ""
      }`}
    >
      <p className="text-xl font-light">Write a Review</p>
      <p className="flex gap-[1px]">
        <span className="text-red-500 text-xl">*</span> Indicates a required
        field
      </p>
      <p className="flex gap-[1px]">
        <span className="text-red-500 text-xl">*</span>Score
      </p>
      <ReviewForm productId={productId} />
    </section>
  );
};

export default ReviewComponent;
