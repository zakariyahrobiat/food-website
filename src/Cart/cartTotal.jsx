import React from "react";
import { useAppContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import PayStack from "../payStack";
const CartTotal = ({ history }) => {
  const { cartTotal, clearItem } = useAppContext();
  return (
    <div className="w-full text-center">
      {/* <Link to="/">
        <button
          onClick={() => clearItem()}
          className="border border-black text-xl font-bold px-2 rounded mb-2 "
        >
          clear cart
        </button>
      </Link> */}
      <div className="flex justify-between">
      <h1 className="text-2xl font-bold mb-2">TOTAL : </h1>
      <h1 className="text-2xl font-bold mb-2">#{cartTotal}</h1>
      </div>
      <Link to="/payment">
        <button className="bg-white shadow-shadow w-1/3 text-xl font-bold rounded-tl-2xl rounded-br-2xl py-2 mb-2">
          PAY NOW
        </button>
      </Link>
      {/* <PayStack total={cartTotal} clearItem={clearItem} history={history} /> */}
    </div>
  );
};

export default CartTotal;
