import React from "react";
import { ItemCard } from "./components/ItemCard";

const App = () => {
  return (
    <div className="App">
      <ItemCard
        image="https://i.postimg.cc/pdBswPb8/ORH8-S60-removebg-preview.png"
        title="Super Phone"
        price="300$"
        description="Super Phone to everyone"
        available={true}
        whereCanFind="in out shop"
      />
    </div>
  );
};

export default App;
