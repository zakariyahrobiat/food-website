import React from "react";
import Details from "../pages/productDetail/Details";
import Cart from "../Cart/cart";
import LandingPage from "../pages/home/LandingPage";
import FoodPayment from "../pages/foodPayment/FoodPayment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/product" element={<Details />} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/payment" element={<FoodPayment/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
             </Router>
    </div>
  );
};

export default AppRoutes;
