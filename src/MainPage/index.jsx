import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../components/Cart/cart";
import DashboardHome from "../components/Dashboard";
import History from "../components/History";
import Navbar from "../components/Navbar";
import ProductPage from "../components/Products";
import Search from "../components/Search";
import Settings from "../components/settings";
import { MainPageContainer } from "./style";

function MainPages({ props }) {
  return (
    <>
      <MainPageContainer>
        <Search />
        <br />
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </MainPageContainer>
    </>
  );
}

export default MainPages;
