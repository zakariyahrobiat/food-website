import React, { useState } from "react";
import { useAppContext } from "../context/AuthContext";
import { info } from "../assets/data";
import Product from "./product";

const MenuList = () => {
  const {setProducts, filteredItem } = useAppContext();
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
                className="bg-black text-white px-2 py-1 tracking-wider rounded font-bold text-lg uppercase"
              >
                {category}
              </button>
            </div>
          );
        })}
      </div>
      <div >
        {filteredItem.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 py-10 md:grid-cols-3 lg:grid-cols-4">
          {filteredItem.map((product) => {
          return <Product {...product} key={product.id} />;
        })}</div>):(<p className="text-red-500 mt-2 text-2xl text-center font-semibold pt-2">No items match your search</p>)}
      </div>
    </div>
  );
};

export default MenuList;
