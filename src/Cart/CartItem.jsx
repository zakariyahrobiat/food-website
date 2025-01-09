import React from "react";
import { useAppContext } from "../context/AuthContext";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ title, image, price, count, total, id }) => {
  const { increase, decrease, removeItem } = useAppContext();

  return (
    <div>
        
    <div className="grid grid-cols-3 justify-between items-center my-3 text-center w-full gap-x-5">
      <div className="flex text-left items-start gap-2 ">
        <div className="w-1/2 ">
        <img
          src={image}
          alt=""
          srcSet=""
          className="w-full rounded"
          />
         </div> 
        
        <div className="hidden md:block">
        <p className="pb-2 font-semibold text-xl">{title}</p>
        <p className=" font-medium text-sm">&#8358;{price}</p>
        </div>
      </div>

      <div className="w-full text-center flex justify-center gap-5">
      <div className="bg-transparent border border-black rounded text-black flex justify-between items-center px-2 ">
        <span
          onClick={() => decrease(id)}
          className=" text-2xl font-bold"
        >
          -
        </span>
        <span className=" text-2xl font-bold px-2">{count}</span>
        <span
          onClick={() => increase(id)}
          className=" text-2xl font-bold"
        >
          +
        </span>
      </div>
      <div
        onClick={() => removeItem(id)}
        className="text-center flex items-center justify-center"
      >
        <FaTrash />
      </div>
      </div>
      <div className=" text-right">
        <p className="text-xl font-bold"> &#8358;{total}</p>
      </div>
    </div>
    <hr className="border-black"/>
    </div>
  );
};

export default CartItem;
