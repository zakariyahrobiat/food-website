import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useAppContext } from "./context";

const Navbar = () => {
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
          <Link to="/cart">
            <button className="relative">
              {/* <p className="absolute right-0 -top-3 bg-black text-white rounded-lg px-1 "> */}
              {/* {cart} */}
              {/* </p> */}

              <FaShoppingCart className="text-2xl mt-2 mr-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
