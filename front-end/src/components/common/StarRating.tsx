import React from "react";

import emptyStarIcon from "../../assets/icons/star-empty.svg";
import starIcon from "../../assets/icons/star.svg";

interface StarRatingProps {
  numberOfStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ numberOfStars }) => {
  const clampedStars = Math.min(Math.max(0, numberOfStars), 5);

  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < clampedStars ? "full" : "empty";
  });

  const renderStar = (type: "full" | "empty") => {
    return (
      <img
        src={type === "full" ? starIcon : emptyStarIcon}
        alt="rating-star"
        className="h-[20px]"
      />
    );
  };

  return (
    <ul className="flex">
      {stars.map((star, index) => (
        <li key={index}>{renderStar(star)}</li>
      ))}
    </ul>
  );
};

export default StarRating;
