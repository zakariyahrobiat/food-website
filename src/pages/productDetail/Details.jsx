import React, { useState } from "react";
import NavBar from "../../components/Navbar";
import { useAppContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Details = () => {
  const { detail, AddToCart, Products, openModal } = useAppContext();

  const { title, image, price, desc, deleteCart, id } = detail;

  return (
    <div>
      <NavBar />

      <div className="px-5 mt-20 md:grid grid-cols-2 items-center gap-10 md:px-10 lg:px-20">
        <img src={image} alt="" srcSet="" />
        <div>
          <div className="flex justify-between items-center pb-5">
            <h1 className="text-xl font-semibold ">{title}</h1>
            <p className="font-bold tracking-wide text-xl">&#8358;{price}</p>
          </div>
          <p className="text-lg py-2">{desc}</p>
          <div className="flex items-center gap-3 py-2 mt-10">
            <Link to="/">
              <button className="border-2 border-black  rounded px-4 py-1 ">
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

export default Details;
