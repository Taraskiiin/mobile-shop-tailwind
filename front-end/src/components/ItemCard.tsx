import React, { FC } from "react";
import { AvailablePoint } from "./AvalablePoint";

interface ItemCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  available: boolean;
  whereCanFind: string;
}

export const ItemCard: FC<ItemCardProps> = ({
  image,
  title,
  price,
  description,
  available,
  whereCanFind,
}) => {
  return (
    <div className="">
      <img src={image} alt={`photo of ${title}`} />
      <div>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <p>{description}</p>
      <div>
        <AvailablePoint available={available} />
        <p>{whereCanFind}</p>
      </div>
    </div>
  );
};
