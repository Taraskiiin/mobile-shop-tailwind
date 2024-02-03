import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Review } from "../types";

import { FeedbackForm } from "../components/FeedbackForm";
import { ReviewCard } from "../components/ReviewCard";
import withReviews, { WithReviewsProps } from "../mock-tools/withReviews";

const ProductPage: React.FC<WithReviewsProps> = (props) => {
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  const { loading, productData, reviews } = props;

  const handleToggleShowAllReviews = () => {
    setShowAllReviews((prev) => !prev);
  };

  if (loading) {
    return <span>Loading...</span>;
  }

  if (!productData && !reviews?.length) {
    return <span>No data</span>;
  }

  return (
    <section className="max-w-[660px] px-[24px] l:px-[0px] w-100% mx-auto pb-[24px]">
      <div className="flex items-center gap-[40px] mb-[40px]">
        <img
          src={productData?.imageSrc}
          alt="product"
          className="max-w-[50%] w-full"
        />
        <div>
          <h2 className="text-primary text-4xl font-[500] mb-[16px]">
            {productData?.title}
          </h2>
          <p className="text-primary text-md mb-[8px]">
            {productData?.description}
          </p>
          <p className="text-primary text-xl">
            {productData?.price}
            {productData?.currency}
          </p>
        </div>
      </div>
      <ul className="mb-[20px]">
        {showAllReviews ? (
          reviews?.map((review: Review, index: number) => (
            <ReviewCard key={index} review={review} />
          ))
        ) : (
          <ReviewCard review={reviews?.[reviews?.length - 1] as Review} />
        )}
      </ul>
      <button
        onClick={handleToggleShowAllReviews}
        className="underline text-primary text-sm font-[500] uppercase mb-[40px] cursor-pointer"
      >
        {showAllReviews ? "Show Less" : "Read all reviews"}
      </button>
      <FeedbackForm />
    </section>
  );
};

export default withReviews(ProductPage);
