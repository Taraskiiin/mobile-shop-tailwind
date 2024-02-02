export type Review = {
  id: string;
  productId: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  imageSrc: string;
  isAvailable: boolean;
  isFavorite: boolean;
  salesPoint: string;
};

export type TextFieldType = "password" | "text";

export type ButtonType = "submit" | "reset" | "button";

export type StarType = "full" | "empty";
