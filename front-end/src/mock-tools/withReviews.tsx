import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "../utils/fetchData";
import { fakeEndpoint } from "./constants";
import { Product, Review } from "../types";

export interface WithReviewsProps {
  loading: boolean;
  productData: Product | null;
  reviews: Review[] | null;
}

const withReviews = (WrappedComponent: React.ElementType) => {
  const WithReviews = (props: any) => {
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState(null);
    const [reviews, setReviews] = useState(null);

    const { id } = useParams();

    const productEndpoint = fakeEndpoint + "products" + `/${id}`;
    const reviewsEndpoint = fakeEndpoint + "reviews";

    useEffect(() => {
      const fetchDataAndSetState = async () => {
        setLoading(true);

        const fetchedProductData = await fetchData(productEndpoint);
        const fetchedReviews = await fetchData(reviewsEndpoint);

        if (fetchedProductData) {
          setProductData(fetchedProductData);
        }

        if (fetchedReviews.length) {
          const filteredByIdReview = await fetchedReviews.filter(
            (review: any) => review.productId === id
          );

          setReviews(filteredByIdReview);
        }

        setLoading(false);
      };

      fetchDataAndSetState();
    }, [id]);

    return (
      <WrappedComponent
        {...props}
        loading={loading}
        productData={productData}
        reviews={reviews}
      />
    );
  };

  return WithReviews;
};

export default withReviews;
