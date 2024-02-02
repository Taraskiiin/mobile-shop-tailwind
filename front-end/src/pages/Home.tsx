import React, { useEffect, useState } from "react";

import { Product } from "../types";
import { fetchData } from "../utils/fetchData";
import { fakeEndpoint } from "../mock-tools/constants";

import { ProductCard } from "../components/ProductCard";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Product[] | null>(null);

  const productsEndpoint = fakeEndpoint + "products";

  useEffect(() => {
    setLoading(true);

    const manageFetchedData = async () => {
      const fetchedData = await fetchData(productsEndpoint);

      if (fetchedData?.length) {
        setData(fetchedData);
      }
    };

    manageFetchedData();
    setLoading(false);
  }, []);

  if (!data?.length) {
    return <span>Nothing found</span>;
  }

  return (
    <section className="max-w-[1360px] px-[24px] l:px-[0px] w-100% mx-auto pb-[24px]">
      <ul className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] align-center">
        {data?.map((product: Product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
