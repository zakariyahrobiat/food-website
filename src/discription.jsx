import React from "react";
import { info } from "./data";
import { useAppContext } from "./context";
const Discription = () => {
  const { count } = useAppContext();
  const { image, title, price, desc } = info[count];
  return (
    <div>
      <img src={image} alt="" srcset="" />
      <p>{title}</p>
      <p>{desc}</p>
      <p>${price}</p>
      <div className="button">
        <p>-</p> <p>0</p> <p>+</p>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default Discription;
