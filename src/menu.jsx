import React, { useState } from "react";
import { useAppContext } from "./context";
import { info } from "./data";
import Product from "./product";

const Menu = () => {
  const { Products, setProducts } = useAppContext();
  // const [value, setValue] = useState(Products);
  const check = (category) => {
    if (category === "all") {
      setProducts(info);
    } else {
      const newCategory = info.filter((item) => item.category === category);
      setProducts(newCategory);
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
        {Products.map((product) => {
          return <Product {...product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
