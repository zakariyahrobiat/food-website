import React from "react";
import { info } from "../assets/data";
import { useAppContext } from "../context/AuthContext";
import { useState, useEffect } from "react";

const HeroSlider = () => {
  const [count, setCount] = useState(0);
  const { slider } = useAppContext();
  const next = () => {
    setCount((prevCount) =>
      prevCount < slider.length - 1 ? prevCount + 1 : 0
    );
  };

  useEffect(() => {
    if (slider && slider.length > 0) {
      const slide = setInterval(next, 1000); 
      return () => {
        clearInterval(slide);
      };
    }
  }, [slider]);
  return (
    <div className=" w-100% overflow-hidden pt-16 ">
      <div
        className=" flex flex-row h-36  duration-300 w-max transition-transform md:h-60 lg:h-72 "
        style={{ transform: `translateX(-${10 * count}%)` }}
      >
        {slider.map((info) => {
          const {  backgroundImage, id } = info;
          return (
            <div key={id} className="w-screen h-full">
              <img
                src={backgroundImage}
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
