import React from "react";
import Details from "../pages/productDetail/Details";
import Cart from "../Cart/cart";
import LandingPage from "../pages/home/LandingPage";
import PayStack from "../Cart/payStack";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/product" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PayStack />} />
        </Routes>
             </Router>
    </div>
  );
};

export default AppRoutes;
