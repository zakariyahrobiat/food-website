import React, { useState } from "react";
import { useAppContext } from "./context/AuthContext";
import { Link } from "react-router-dom";

export const Button = ({ deleteCart, id }) => {
  const { AddToCart, openModal } = useAppContext();
  return (
    <button
      onClick={() => {
        AddToCart(id);
        openModal(id);
      }}
      disabled={deleteCart ? true : false}
      className="w-full border border-black p-1 rounded mt-2 text-base font-bold"
    >
      {deleteCart ? <p disabled>In cart</p> : <p> Add To Cart</p>}
    </button>
  );
};

function Product({ image, id, price, title, deleteCart }) {
  const { handleDetail } = useAppContext();
  return (
    <div>
      <div>
        <Link to="/product">
          <img
            src={image}
            alt=""
            srcSet=""
            className="h-40 object-cover w-full rounded"
            onClick={() => handleDetail(id)}
          />
        </Link>

        <div className="lg:flex justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <h2 className="font-bold tracking-wide text-xl">#{price / 100}</h2>
        </div>
        <Button deleteCart={deleteCart} id={id} />
      </div>
    </div>
  );
}

export default Product;
