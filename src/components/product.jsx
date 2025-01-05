import React, { useState } from "react";
import { useAppContext } from "../context/AuthContext";
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
      className="w-full bg-blue-500 text-white p-1 rounded-lg mt-2 text-base font-bold"
    >
      {deleteCart ? <p disabled>In cart</p> : <p> Add To Cart</p>}
    </button>
  );
};

function Product({ image, id, price, title, deleteCart }) {
  const { handleDetail } = useAppContext();
  return (
  
      <div className="shadow-shadow p-4 bg-white">
        <Link to="/product">
          <img
            src={image}
            alt=""
            srcSet=""
            className="h-40 object-cover w-full rounded"
            onClick={() => handleDetail(id)}
          />
        </Link>

        <div className="flex  items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <h2 className="font-bold tracking-wide text-xl">#{price}</h2>
        </div>
        <Button deleteCart={deleteCart} id={id} />
      </div>
 
  );
}

export default Product;
