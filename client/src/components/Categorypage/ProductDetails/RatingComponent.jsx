import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const RatingComponent = ({ handleRating }) => {
  return (
    <div>
      <Rating onClick={handleRating} allowFraction size={30} />
    </div>
  );
};

export default RatingComponent;
