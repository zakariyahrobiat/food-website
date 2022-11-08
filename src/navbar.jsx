import React, { useEffect } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { info } from "./data";
import { useAppContext } from "./context";
import { useState } from "react";

const Navbar = () => {
  const [value, setValue] = useState(info);
  const { count, setCount, cart } = useAppContext();

  const { id, image } = info[count];
  useEffect(() => {
    const lastIndex = info.length - 1;
    if (count < 0) {
      setCount(lastIndex);
    }
    if (count > lastIndex) {
      setCount(0);
    }
  }, [count, info]);

  const next = () => {
    setCount(count + 1);
    if (count < info.length - 1) {
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
  if (info[count] === count) {
    postion = "activeSlide";
  }
  if (
    info[count] === count - 1 ||
    (count === 0 && info[count] === info.length - 1)
  ) {
    postion = "lastSlide";
  }

  return (
    <div className=" w-screen overflow-hidden ">
      <div className="relative h-20 w-screen">
        <div className="px-3 pt-5 logo-container flex justify-between w-full items-center pb-5 bg-blue-100 fixed top-0 z-10 md:px-10 lg:px-20 ">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <div className="input-container  relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="milk"
              className="bg-transparent  rounded-xl bg-blue-300 py-2 px-4 w-36 text-black font-bold md:w-72 lg:w-full"
            />
            <button className="absolute right-3 top-2 text-2xl font-bold">
              <FaSearch />
            </button>
          </div>
          <button className="relative">
            <p className="absolute right-0 -top-3 bg-black text-white rounded-lg px-1 ">
              {cart}
            </p>
            <FaShoppingCart className="text-2xl mt-2 mr-3" />
          </button>
        </div>
      </div>

      <div
        className="flex flex-row h-36  duration-300 w-max transition-transform md:h-60 lg:h-72 "
        style={{ transform: `translateX(-${10 * count}%)` }}
      >
        {value.map((info) => {
          const { image, id } = info;
          return (
            <div key={id} className="w-screen h-full">
              <img
                src={image}
                alt=""
                srcset=""
                className="object-cover w-full  lg:h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
