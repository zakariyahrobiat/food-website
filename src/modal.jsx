import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./context";
const Modal = () => {
  const { modalOpen, closeModal, modalProduct } = useAppContext();
  const { image, title, price } = modalProduct;
  if (!modalOpen) {
  }
  return (
    <div>
      {(modalOpen && (
        <div className=" w-screen px-5 bg-white bg-opacity-30 fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center text-center">
          <div className="bg-white p-5  ">
            <h1 className="pb-4 text-xl">Item added to the cart</h1>
            <div className="flex justify-center w-full h-40">
              <img
                src={image}
                alt=""
                srcset=""
                className="w-3/5 h-full object-cover"
              />
            </div>
            <p className="text-xl">{title}</p>
            <p className="text-xl">${price}</p>
            <Link to="/">
              <button
                className="border-2 border-black  rounded px-4 py-1 mb-2"
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
                className="border-2 border-black  rounded px-4 py-1"
                onClick={() => closeModal()}
              >
                {" "}
                Go to cart
              </button>
            </Link>
          </div>
        </div>
      )) ||
        null}
    </div>
  );
};

export default Modal;
