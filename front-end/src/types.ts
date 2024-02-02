export type ReviewsType = {
  author: string;
  date: string;
  stars: number;
  feedback: string;
};

export type ItemType = {
  image: string;
  title: string;
  price: string;
  description: string;
  available: boolean;
  whereCanFind: string;
  liked: boolean;
  id: string;
  reviews: ReviewsType[];
};
