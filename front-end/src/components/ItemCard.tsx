import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { AvailablePoint } from "./AvailablePoint";

import likeEmptyIcon from "../assets/icons/heart-empty.svg";
import likeIcon from "../assets/icons/heart.svg";

interface ItemCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  available: boolean;
  whereCanFind: string;
  liked: boolean;
  id: string;
}

export const ItemCard: FC<ItemCardProps> = ({
  image,
  title,
  price,
  description,
  available,
  whereCanFind,
  liked,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${id}`);
  };

  return (
    <li
      onClick={handleClick}
      className="max-w-[300px] w-full bg-bg rounded-xl p-[10px] relative cursor-pointer transition-transform border border-solid border-backgroundCard transform hover:scale-105 hover:border-[#000] duration-700 "
    >
      <img
        src={liked ? likeIcon : likeEmptyIcon}
        alt="like icon"
        className="w-[25px] h-[25px] absolute top-[10px] right-[10px] cursor-pointer"
      />
      <img src={image} alt={title} className="h-[300px] object-contain" />
      <div className="flex justify-between items-start">
        <h4 className="text-l text-primary">{title}</h4>
        <p className="text-xl text-primary">{price}</p>
      </div>
      <p className="text-sm text-secondary truncate mt-[6px] mb-[6px]">
        {description}
      </p>
      <div className="flex items-center gap-[5px]">
        <AvailablePoint available={available} />
        <p className="text-secondary text-sm">{whereCanFind}</p>
      </div>
    </li>
  );
};
