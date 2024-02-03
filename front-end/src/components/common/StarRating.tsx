import React from "react";

import { StarType } from "../../types";

import emptyStarIcon from "../../assets/icons/star-empty.svg";
import starIcon from "../../assets/icons/star.svg";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const clampedStars = Math.min(Math.max(0, rating), 5);

  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < clampedStars ? "full" : "empty";
  });

  const renderStar = (type: StarType, index: number) => {
    return (
      <img
        src={type === "full" ? starIcon : emptyStarIcon}
        alt={`rating-star-to-element-${index}`}
        className="h-[20px]"
      />
    );
  };

  return (
    <ul className="flex">
      {stars.map((star, index) => (
        <li key={index}>{renderStar(star, index)}</li>
      ))}
    </ul>
  );
};

export default StarRating;
