import React from "react";
import CartColumn from "./cartColumn";
import Navbar from "../components/Navbar";
import EmptyCart from "./emptyCart";
import CartList from "./cartList";
import CartTotal from "./cartTotal";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AuthContext";
import BackgroundLayout from "../layout/BackgroundLayout";
import { FaTrash } from "react-icons/fa";
import Footer from "../components/Footer";
const Cart = () => {
  const { cart, clearItem } = useAppContext();

  return (
    <BackgroundLayout>
      <Navbar/>
      <div className="my-20 w-2/3 mx-auto">
      <div className="flex justify-between item-center">
      <h1 className="text-2xl font-bold pb-5 ">YOUR CART</h1>
      <Link to="/">
        <button
          onClick={() => clearItem()}
          className="border flex justify-center items-center border-black text-xl font-bold px-2 rounded mb-2 "
        >
        <FaTrash />clear cart
        </button>
      </Link>
      </div>
      {(cart.length && (
        <>
        <CartColumn/>
          <CartList /> 
         
          <CartTotal history={history} />
        </>
      )) || <EmptyCart />}
      </div>
      <Footer/>
    </BackgroundLayout>
  );
};

export default Cart;
