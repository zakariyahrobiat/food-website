import React, { useState } from "react";
import { useAppContext } from "./context";
import { info } from "./data";
import Discription from "./discription";
export const HandleButton = () => {
  const { cart, setCart } = useAppContext();
  return (
    <button
      onClick={() => setCart(cart + 1)}
      className="w-full border border-black p-1 rounded mt-2 text-base font-bold"
    >
      Add to chart
    </button>
  );
};

const Menu = () => {
  const [value, setValue] = useState(info);
  const check = (category) => {
    if (category === "all") {
      setValue(info);
    } else {
      const newCategory = info.filter((item) => item.category === category);
      setValue(newCategory);
    }
  };
  const categoryEl = ["all", ...new Set(info.map((item) => item.category))];
  return (
    <div className="px-5 py-7 md:px-10 lg:px-20">
      <div className="flex justify-between md:justify-evenly">
        {categoryEl.map((category, index) => {
          return (
            <div key={index} className="">
              <button
                onClick={() => check(category)}
                className="bg-black text-white px-2 py-1 tracking-wider rounded font-semibold text-lg"
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-x-7 gap-y-10 py-10 md:grid-cols-3 lg:grid-cols-4">
        {value.map((item) => {
          const { image, id, price, title } = item;
          return (
            <div key={id} className=" ">
              {/* <a href="/discription"> */}
              <img
                src={image}
                alt=""
                srcSet=""
                className="h-40 object-cover w-full rounded"
              />
              {/* </a> */}
              <div className="lg:flex justify-between">
                <h2 className="text-lg font-semibold">{title}</h2>
                <h2 className="font-bold tracking-wide text-xl">${price}</h2>
              </div>
              <HandleButton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
