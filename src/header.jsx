import React from "react";
import { info } from "./data";
import { useAppContext } from "./context";
import { useState, useEffect } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  const { Products } = useAppContext();
  useEffect(() => {
    const lastIndex = Products.length - 1;
    if (count < 0) {
      setCount(lastIndex);
    }
    if (count > lastIndex) {
      setCount(0);
    }
  }, [count, Products]);
  const next = () => {
    setCount(count + 1);
    if (count < Products.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  useEffect(() => {
    let slider = setInterval(next, 1000);
    return () => {
      clearInterval(slider);
    };
  }, [count]);
  let postion = "nextSlide";
  if (Products[count] === count) {
    postion = "activeSlide";
  }
  if (
    Products[count] === count - 1 ||
    (count === 0 && Products[count] === Products.length - 1)
  ) {
    postion = "lastSlide";
  }
  return (
    <div className=" w-screen overflow-hidden ">
      <div
        className="flex flex-row h-36  duration-300 w-max transition-transform md:h-60 lg:h-72 "
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

export default Header;
