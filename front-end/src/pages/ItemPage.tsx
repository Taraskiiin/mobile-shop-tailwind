import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ItemType } from "../types";

const ItemPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ItemType | null>(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/${id}`);

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
    <section className="max-w-[1360px] px-[24px] l:px-[0px] w-100% mx-auto pb-[24px]"></section>
  );
};

export default ItemPage;
