import React from "react";
import CartItem from "./CartItem";
import { useAppContext } from "../context/AuthContext";
const CartList = () => {
  const { cart } = useAppContext();

  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CartList;
