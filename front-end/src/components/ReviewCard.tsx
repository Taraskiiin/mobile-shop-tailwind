import React, { useState } from "react";
import cn from "classnames";

import { Review } from "../types";
import StarRating from "./common/StarRating";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { author, date, rating, comment } = review;
  const [showFullFeedback, setShowFullFeedback] = useState(false);

  const maxLengthText = 80;

  const handleReadMore = () => {
    setShowFullFeedback(!showFullFeedback);
  };

  return (
    <li className="w-full mb-[10px] border-b border-solid border-primary pb-[20px]">
      <h4 className="text-primary text-2xl font-[500] mb-[12px]">{author}</h4>
      <p className="text-secondary text-xs font-[500] mb-[12px]">{date}</p>
      <StarRating rating={rating} />
      <p
        className={cn(
          showFullFeedback ? "text-clip " : "truncate",
          "text-primary text-sm font-[500] mt-[16px]"
        )}
      >
        {comment}
      </p>
      {comment.length > maxLengthText && (
        <button
          className="text-primary cursor-pointer underline text-sm font-[500] uppercase mt-[20px]"
          onClick={handleReadMore}
        >
          {showFullFeedback ? "Read Less" : "Read More"}
        </button>
      )}
    </li>
  );
};
