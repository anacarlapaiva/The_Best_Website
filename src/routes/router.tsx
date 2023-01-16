import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/:teste" element={<SignUp />} />
        <Route path="/produtos" element={<Products />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
