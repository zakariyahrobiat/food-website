import React from "react";

const CartColumn = () => {
  return (
    <div>
    <div className="grid grid-cols-3 font-bold text-xl uppercase text-neutral-500 text-center">
      <p className="text-left">product/title</p>
      
            <p className="">quantity</p>
      <p className="delete text-right">Price</p>
      </div>
      <hr className="border-black w-full"/>
    </div>
  );
};

export default CartColumn;
