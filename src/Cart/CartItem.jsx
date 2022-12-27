import React from "react";
import { useAppContext } from "../context";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ title, image, price, count, total, id }) => {
  const { increase, decrease, removeItem } = useAppContext();

  return (
    <div className="flex  justify-between items-center mb-6 text-center w-full md:px-10 lg:px-20">
      <div className="w-20 max-w-full flex">
        <img
          src={image}
          alt=""
          srcSet=""
          className="h-20 w-width object-cover"
          style={{ width: `5rem` }}
        />
      </div>

      <p className="py-1 font-semibold text-xl">#{price / 100}</p>
      <div className="bg-black flex justify-between items-center px-2  ">
        <span
          onClick={() => decrease(id)}
          className=" text-white text-2xl font-bold"
        >
          -
        </span>
        <span className="text-white  text-2xl font-bold px-2">{count}</span>
        <span
          onClick={() => increase(id)}
          className=" text-2xl font-bold text-white"
        >
          +
        </span>
      </div>
      <div
        onClick={() => removeItem(id)}
        className="w-width max-w-full text-center"
      >
        <FaTrash />
      </div>
      <div className=" max-w-full text-center">
        <p className="text-xl font-bold"> #{total / 100}</p>
      </div>
    </div>
  );
};

export default CartItem;
