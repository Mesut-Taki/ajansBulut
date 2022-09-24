import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../common/Hero";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default CustomRoutes;
