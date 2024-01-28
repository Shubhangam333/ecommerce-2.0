import StarRatings from "react-star-ratings";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex gap-2 w-[300px] ">
      <p className="p-4 bg-gray-400 text-green-400 rounded-full h-8 flex items-center">
        {review.userId.firstName[0]}
      </p>
      <div className="flex flex-col basis-80%">
        <p className="flex w-full justify-between font-bold capitalize">
          <span>{review.userId.firstName}</span>
          <span>{review.createdAt.slice(0, 10)}</span>
        </p>
        <StarRatings
          rating={review.rating}
          starDimension="20px"
          starSpacing="4px"
          starRatedColor="red"
        />
        <p className="font-bold text-xl">{review.title}</p>
        <p className="text-lg">{review.review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
