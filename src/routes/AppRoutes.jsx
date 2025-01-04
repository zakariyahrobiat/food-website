import React from "react";
// import Register from "../register";
// import Login from "../login";
// import Navbar from "./navbar";
// import Menu from "../menu";
import Details from "../pages/productDetail/Details";
import Cart from "../Cart/cart";

import Modal from "../modal";
import LandingPage from "../pages/home/LandingPage";
import PayStack from "../Cart/payStack";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
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
        <Modal />
      </Router>
    </div>
  );
};

export default AppRoutes;
