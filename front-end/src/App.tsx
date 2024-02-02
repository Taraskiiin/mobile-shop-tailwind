import React from "react";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";

import { Item, Home } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </>
  );
};

export default App;
