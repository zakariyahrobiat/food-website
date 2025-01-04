import React from "react";
import CartColumn from "./cartColumn";
import Navbar from "../components/Navbar";
import EmptyCart from "./emptyCart";
import CartList from "./cartList";
import CartTotal from "./cartTotal";
import { useAppContext } from "../context/AuthContext";
const Cart = () => {
  const { cart } = useAppContext();

  return (
    <div className="p-5 w-screen text-center">
      <Navbar />
      <h1 className="text-2xl font-bold pb-5 ">YOUR CART</h1>
      {(cart.length && (
        <>
          <CartList /> <CartTotal history={history} />
        </>
      )) || <EmptyCart />}
    </div>
  );
};

export default Cart;
