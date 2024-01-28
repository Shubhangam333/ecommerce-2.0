import { useForm } from "react-hook-form";
import { useCreateProductReviewMutation } from "../../../../redux/api/product/productapi";
import RatingComponent from "../RatingComponent";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const { user } = useSelector((state) => state.auth);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [createReview, { isLoading, data }] = useCreateProductReviewMutation();

  const onSubmit = async (data) => {
    const reviewData = {
      productId,
      userId: user._id,
      ratings: rating,
      ...data,
    };
    try {
      const res = await createReview(reviewData).unwrap();
      if (res) {
        toast.success("Review Created Successfully.");
        reset();
        setRating(0);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <form
      className="flex flex-col items-start gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <RatingComponent handleRating={handleRating} />
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="title">
          <span className="text-red-500 text-xl">*</span>Title:
        </label>
        <input
          {...register("title", { required: true })} // Register field with validation
          type="text"
          name="title"
          className="w-full outline-none border-[1px] border-slate-500 p-2  focus:border-blue-300 focus:border-2"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">Please enter a title</span>
        )}
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="review">
          <span className="text-red-500 text-xl">*</span>Review:
        </label>
        <textarea
          {...register("review", { required: true })} // Register field with validation
          name="review"
          className="w-full outline-none border-[1px] border-slate-500 p-2  focus:border-blue-300 focus:border-2"
        />
        {errors.review && (
          <span className="text-red-500 text-sm">Please enter a review</span>
        )}
      </div>
      <button className="bg-[#148C8D] px-8 opacity-90 text-white py-1 hover:opacity-100">
        Post
      </button>
    </form>
  );
};

export default ReviewForm;
