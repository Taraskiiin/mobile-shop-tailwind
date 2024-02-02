import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Product, Review } from "../types";
import { fetchData } from "../utils/fetchData";
import { fakeEndpoint } from "../mock-tools/constants";

import { FeedbackForm } from "../components/FeedbackForm";
import { ReviewCard } from "../components/ReviewCard";

const ProductPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productData, setProductData] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [showAllReviews, setShowAllReviews] = useState<boolean>(false);

  const { id } = useParams();

  const productEndpoint = fakeEndpoint + "products" + `/${id}`;
  const reviewsEndpoint = fakeEndpoint + "reviews";

  useEffect(() => {
    setLoading(true);

    const manageFetchedData = async () => {
      const fetchedProductData = await fetchData(productEndpoint);
      const fetchedReviews = await fetchData(reviewsEndpoint);

      if (fetchedProductData) {
        setProductData(fetchedProductData);
      }

      if (fetchedReviews.length) {
        const filteredByIdReview = await fetchedReviews.filter(
          (review: Review) => review.productId === id
        );

        setReviews(filteredByIdReview);
      }
    };

    manageFetchedData();
    setLoading(false);
  }, [id]);

  const handleToggleShowAllReviews = () => {
    setShowAllReviews((prev) => !prev);
  };

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

export default ProductPage;
