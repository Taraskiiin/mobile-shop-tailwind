import React from "react";
import { ItemCard } from "../components/ItemCard";

const mockList = [
  {
    image: "https://i.postimg.cc/d0x9P6tR/s-l1600-removebg-preview.png",
    title: "Fast & Furious Mustang",
    price: "$19.99",
    description: "Replica of the iconic Mustang from Fast & Furious.",
    available: true,
    whereCanFind: "Toy Store A",
    liked: false,
    id: "1",
  },
  {
    image: "https://i.postimg.cc/1RnyQ3MD/s-l960-removebg-preview.png",
    title: "1960 Chevy Impala Miniature Replica",
    price: "$20.99",
    description: "1:24 Scale Diecast Metal Car Model Replica",
    available: false,
    whereCanFind: "Toy Store B",
    liked: true,
    id: "2",
  },
  {
    image: "https://i.postimg.cc/yd8P3NvP/s-l640-removebg-preview.png",
    title: "Volkswagen Jetta Car",
    price: "$18.99",
    description:
      "Beautiful Volkswagen Jetta for all you fast furious collectors!",
    available: true,
    whereCanFind: "Supermarket C",
    liked: true,
    id: "3",
  },
  {
    image: "https://i.postimg.cc/vT1C9h33/s-l960-removebg-preview-1.png",
    title: "Toyota Trueno",
    price: "$5.99",
    description: "Scale Diecast Metal Car Model Toy Toyota Trueno",
    available: true,
    whereCanFind: "Department Store D",
    liked: false,
    id: "4",
  },
  {
    image:
      "https://i.postimg.cc/vZPjPCk3/jada-253255038-16-1280x800-removebg-preview.png",
    title: "DeLorean",
    price: "$16.99",
    description: "Back To The Future film",
    available: false,
    whereCanFind: "Toy Store E",
    liked: true,
    id: "5",
  },
  {
    image:
      "https://i.postimg.cc/J4jH5LDC/harry-potter-1967-ford-anglia-253185002-en-01-removebg-preview.png",
    title: "1967 Ford Anglia",
    price: "$24.99",
    description: "Harry Potter 1967 Ford Anglia",
    available: true,
    whereCanFind: "Toy Store F",
    liked: false,
    id: "6",
  },
  {
    image:
      "https://i.postimg.cc/3JfV1PP9/fast-furious-2002-nissan-skyline-1-24-253203044-en-00-removebg-preview.png",
    title: "2002 Nissan Skyline",
    price: "$24.99",
    description: "Fast & Furious 2002 Nissan Skyline",
    available: false,
    whereCanFind: "Toy Store G",
    liked: true,
    id: "7",
  },
  {
    image:
      "https://i.postimg.cc/3RnH29mv/fast-furious-1995-mitsubishi-eclipse-253203007-en-00-removebg-preview.png",
    title: "1995 Mitsubishi Eclipse",
    price: "$16.99",
    description: "Fast & Furious 1995 Mitsubishi Eclipse",
    available: true,
    whereCanFind: "Toy Store H",
    liked: false,
    id: "8",
  },
  {
    image:
      "https://i.postimg.cc/VNhhwTq4/batman-the-dark-knight-batmobile-1-24-253215005-en-01.jpg",
    title: "Batmobile",
    price: "$28.99",
    description: "Batman The Dark Knight Batmobile",
    available: true,
    whereCanFind: "Toy Store I",
    liked: true,
    id: "9",
  },
  {
    image:
      "https://i.postimg.cc/sDfbppgY/batman-1989-batmobile-1-24-253215002-en-02-removebg-preview.png",
    title: "Batmobile",
    price: "$27.99",
    description: "Batman 1989 Batmobile",
    available: false,
    whereCanFind: "Toy Store J",
    liked: false,
    id: "10",
  },
];

const HomePage = () => {
  return (
    <section className="max-w-[1360px] px-[24px] l:px-[0px] w-100% mx-auto">
      <ul className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] align-center">
        {mockList.map((listItem) => (
          <ItemCard
            key={listItem.id}
            image={listItem.image}
            title={listItem.title}
            price={listItem.price}
            description={listItem.description}
            available={listItem.available}
            whereCanFind={listItem.whereCanFind}
            liked={listItem.liked}
          />
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
