import React from "react";
import { Route, Routes } from "react-router-dom";

import { Product, Home, NotFound } from "./pages";
import { Header } from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
