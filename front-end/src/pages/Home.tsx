import React, { useEffect, useState } from "react";
import { ItemCard } from "../components/ItemCard";

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/home");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-[1360px] px-[24px] l:px-[0px] w-100% mx-auto pb-[24px]">
      <ul className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] align-center">
        {data?.length > 0 &&
          data.map((listItem: any) => (
            <ItemCard
              key={listItem.id}
              image={listItem.image}
              title={listItem.title}
              price={listItem.price}
              description={listItem.description}
              available={listItem.available}
              whereCanFind={listItem.whereCanFind}
              liked={listItem.liked}
              id={listItem.id}
            />
          ))}
      </ul>
    </section>
  );
};

export default HomePage;
