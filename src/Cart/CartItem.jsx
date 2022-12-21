import React from "react";
import { useAppContext } from "../context";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ title, image, price, count, total, id }) => {
  const { increase, decrease, removeItem } = useAppContext();

  return (
    <div className="flex  justify-between items-center mb-6 text-center w-full">
      <div className="w-width max-w-full" style={{ width: `25%` }}>
        <img
          src={image}
          alt=""
          srcset=""
          className="h-20 w-full object-cover"
        />
      </div>

      <div className="w-width max-w-full" style={{ width: `35%` }}>
        <h1 className="text-xl font-semibold ">{title}</h1>
        <p className="py-1 font-semibold text-xl">${price}</p>

        <div
          className="bg-black flex justify-between items-center px-2 w-3/5 m-margin "
          style={{ margin: `auto` }}
        >
          <span
            onClick={() => decrease(id)}
            className=" text-white text-2xl font-bold"
          >
            -
          </span>
          <span className="text-white  text-2xl font-bold">{count}</span>
          <span
            onClick={() => increase(id)}
            className=" text-2xl font-bold text-white"
          >
            +
          </span>
        </div>
      </div>
      <div
        onClick={() => removeItem(id)}
        className="w-width max-w-full text-center"
        style={{ width: `10%` }}
      >
        <FaTrash />
      </div>
      <div className="w-width max-w-full text-center" style={{ width: `15%` }}>
        <p className="text-xl font-bold"> ${total}</p>
      </div>
    </div>
  );
};

export default CartItem;
