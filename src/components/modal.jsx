import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AuthContext";
const Modal = () => {
  const { modalOpen, closeModal, modalProduct } = useAppContext();
  const { image, title, price } = modalProduct;

  return (
    <div>
      {(modalOpen && (
        <div className=" w-full px-5 bg-white bg-opacity-90 fixed top-16 left-0 bottom-0 right-0 flex items-center justify-center text-center">
          <div className="bg-white p-5 shadow-shadow md:w-1/2">
            <h1 className="pb-4 text-2xl uppercase font-bold">Item added to the cart</h1>
            <div className="w-full md:w-5/6 m-auto">
              <img
                src={image}
                alt=""
                srcSet=""
                className="w-full  object-contain"
              />
          
            <div className="flex justify-between">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-xl font-semibold">#{price}</p>
            </div>
            <div className="flex justify-between mt-2">
            <Link to="/">
              <button
                className=" bg-blue-500 text-white text-lg font-semibold rounded px-4 py-1 mb-2"
                onClick={() => {
                  closeModal();
                }}
              >
                Continue Shopping
              </button>
            </Link>{" "}
            <br />
            <Link to="/cart">
              <button
                className="bg-blue-500 text-white text-lg font-semibold rounded px-4 py-1"
                onClick={() => closeModal()}
              >
                {" "}
                Go to cart
              </button>
            </Link>
            </div>
          </div>
        </div>
        </div>
      )) ||
        null}
    </div>
  );
};

export default Modal;
