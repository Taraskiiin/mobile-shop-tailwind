import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemType, ReviewsType } from "../types";
import { FeedbackForm } from "../components/FeedbackForm";
import { ReviewCard } from "../components/ReviewCard";

const ItemPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ItemType | null>(null);
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleToggleShowAllReviews = () => {
    setShowAllReviews((prev) => !prev);
  };

  return (
    <section className="max-w-[660px] px-[24px] l:px-[0px] w-100% mx-auto pb-[24px]">
      <div className="flex items-center gap-[40px] mb-[40px]">
        <img src={data?.image} alt="product" className="max-w-[50%] w-full" />
        <div>
          <h2 className="text-primary text-4xl font-[500] mb-[16px]">
            {data?.title}
          </h2>
          <p className="text-primary text-md mb-[8px]">{data?.description}</p>
          <p className="text-primary text-xl">{data?.price}</p>
        </div>
      </div>
      <ul className="mb-[20px]">
        {data &&
          (showAllReviews ? (
            data.reviews.map((review: ReviewsType, index) => (
              <ReviewCard key={index} review={review} />
            ))
          ) : (
            <ReviewCard review={data.reviews[data.reviews.length - 1]} />
          ))}
      </ul>
      <button
        onClick={handleToggleShowAllReviews}
        className="underline text-primary text-sm font-[500] uppercase mb-[40px] cursor-pointer"
      >
        {!showAllReviews ? "Read all reviews" : "Show Less"}
      </button>
      <FeedbackForm />
    </section>
  );
};

export default ItemPage;
