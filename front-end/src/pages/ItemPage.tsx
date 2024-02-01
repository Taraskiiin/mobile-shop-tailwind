import React, { useEffect, useState } from "react";
import { ItemCard } from "../components/ItemCard";

const ItemPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  //   useEffect(() => {
  //     setLoading(true);
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("http://localhost:8000/home");

  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }

  //         const data = await response.json();
  //         setData(data);
  //       } catch (error: any) {
  //         console.error("Error fetching data:", error.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <section className="max-w-[1360px] px-[24px] l:px-[0px] w-100% mx-auto pb-[24px]"></section>
  );
};

export default ItemPage;
