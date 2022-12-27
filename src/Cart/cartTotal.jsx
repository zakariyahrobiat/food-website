import React from "react";
import { useAppContext } from "../context";
import { Link } from "react-router-dom";
import PayStack from "./payStack";
const CartTotal = ({ history }) => {
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
      <h1 className="text-2xl font-bold mb-2">TOTAL : #{cartTotal / 100}</h1>
      <Link to="/payment">
        <button className="border border-black text-xl font-bold px-2 rounded mb-2">
          PAY NOW
        </button>
      </Link>
      {/* <PayStack total={cartTotal} clearItem={clearItem} history={history} /> */}
    </div>
  );
};

export default CartTotal;
