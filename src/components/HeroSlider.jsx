import React from "react";
import { info } from "../assets/data";
import { useAppContext } from "../context/AuthContext";
import { useState, useEffect } from "react";

const HeroSlider = () => {
  const [count, setCount] = useState(0);
  const { Products } = useAppContext();
  const next = () => {
    setCount((prevCount) =>
      prevCount < Products.length - 1 ? prevCount + 1 : 0
    );
  };

  useEffect(() => {
    if (Products && Products.length > 0) {
      const slider = setInterval(next, 1000); 
      return () => {
        clearInterval(slider);
      };
    }
  }, [Products]);
  return (
    <div className=" w-100% overflow-hidden pt-16 ">
      <div
        className=" flex flex-row h-36  duration-300 w-max transition-transform md:h-60 lg:h-72 "
        style={{ transform: `translateX(-${10 * count}%)` }}
      >
        {Products.map((info) => {
          const { image, id } = info;
          return (
            <div key={id} className="w-screen h-full">
              <img
                src={image}
                alt=""
                srcSet=""
                className="object-cover w-full  lg:h-full"
              />
            </div>
          );
        })}
      </div>
   </div>
  );
};

export default HeroSlider;
