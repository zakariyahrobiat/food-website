import React from "react";
import { useAppContext } from "../context";
import { Link } from "react-router-dom";
const CartTotal = () => {
  const { cartTotal, clearItem } = useAppContext();
  return (
    <div className="w-full text-textAlign" style={{ textAlign: `right` }}>
      <Link to="/">
        <button
          onClick={() => clearItem()}
          className="border border-black text-xl font-bold px-2 rounded mb-2 "
        >
          clear cart
        </button>
      </Link>
      <h1 className="text-2xl font-bold">TOTAL : ${cartTotal}</h1>
    </div>
  );
};

export default CartTotal;
