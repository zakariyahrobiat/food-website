import React, { useState } from "react";
import Navbar from "./navbar";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";
import Product from "./product";

const SinglePage = () => {
  const { detail, AddToCart, Products, openModal } = useAppContext();
  console.log(detail);
  const { title, image, price, desc, deleteCart, id } = detail.detail;

  return (
    <div>
      <Navbar />

      <div className="px-5 py-7 md:grid grid-cols-2">
        <img src={image} alt="" srcset="" />
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="font-bold tracking-wide text-xl">${price}</p>
          </div>
          <p className="text-lg py-2">{desc}</p>
          <div className="flex items-center gap-3 py-2">
            <Link to="/">
              <button className="border-2 border-black  rounded px-4 py-1">
                Back Home
              </button>
            </Link>

            <button
              disabled={deleteCart ? true : false}
              onClick={() => {
                AddToCart(id);
                openModal(id);
              }}
              className="border-2 border-black  rounded px-4 py-1"
            >
              {" "}
              {deleteCart ? "incart" : "add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
