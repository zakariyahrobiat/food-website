import React from "react";
import Register from "./register";
import Login from "./login";
import Navbar from "./navbar";
import Menu from "./menu";
import SinglePage from "./singlePage";
import Cart from "./Cart/cart";
import Header from "./header";
import Modal from "./modal";
import PayStack from "./Cart/payStack";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const All = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Menu />
      {/* <Cart /> */}
    </div>
  );
};

// const router = createBrowserRouter([
//   { path: "/", element: <All /> },
//   // { path: "/discription", element: <Discription /> },
//   { path: "/product", element: <SinglePage /> },
// ]);
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route path="/product" element={<SinglePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PayStack />} />
        </Routes>
        <Modal />
      </Router>
    </div>
  );
};

export default App;
