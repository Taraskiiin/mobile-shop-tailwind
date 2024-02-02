import React from "react";
import { useNavigate } from "react-router-dom";

import { AvailablePoint } from "./common/AvailablePoint";

import likeEmptyIcon from "../assets/icons/heart-empty.svg";
import likeIcon from "../assets/icons/heart.svg";
import { Product } from "../types";

interface ItemCardProps {
  productData: Product;
}

export const ProductCard: React.FC<ItemCardProps> = ({ productData }) => {
  const {
    imageSrc,
    title,
    price,
    currency,
    description,
    isAvailable,
    salesPoint,
    isFavorite,
    id,
  } = productData;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <li
      onClick={handleClick}
      className="max-w-[300px] w-full bg-white rounded-xl p-[10px] relative cursor-pointer transition-transform border border-solid border-white transform hover:scale-105 hover:border-primary duration-700 "
    >
      <img
        src={isFavorite ? likeIcon : likeEmptyIcon}
        alt="Save to 'Favorite'"
        className="w-[25px] h-[25px] absolute top-[10px] right-[10px] cursor-pointer"
      />
      <img src={imageSrc} alt={title} className="h-[300px] object-contain" />
      <div className="flex justify-between items-start">
        <h4 className="text-l text-primary">{title}</h4>
        <p className="text-xl text-primary">
          {price}
          {currency}
        </p>
      </div>
      <p className="text-sm text-secondary truncate mt-[6px] mb-[6px]">
        {description}
      </p>
      <div className="flex items-center gap-[5px]">
        <AvailablePoint available={isAvailable} />
        <p className="text-secondary text-sm">{salesPoint}</p>
      </div>
    </li>
  );
};
