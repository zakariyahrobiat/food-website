import React from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AuthContext";
import { Button } from "./product";
import CartModal from "./modal/CartModal";

const NavBar = () => {
  const {search, setSearch, ToggleShow, show} = useAppContext()
  return (
            <div className="px-3 pt-5 h-16 flex justify-between w-full items-center pb-5 bg-blue-100 fixed top-0 left-0 z-10 md:px-10 lg:px-20 ">
          <Link to="/">
       
            <h1 className="text-2xl font-bold">LOGO</h1>
          </Link>
          <div className="w-1/2 relative bg-white rounded-lg">
            <input
              type="text"
              name=""
              id=""
              placeholder="milk"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="bg-transparent  rounded-xl bg-blue-300 py-2 px-4  text-black font-bold w-full"
            />
            <button className="absolute right-3 top-2 text-2xl font-bold">
              <FaSearch />
            </button>
          </div>
          <div className="flex justify-end items-center">
          <Link to="/cart" className="hidden md:block">
            <button>
                            <FaShoppingCart className="text-2xl mt-2 mr-3" />
            </button>
          </Link>
          <button onClick={ToggleShow} className="bg-white rounded-full p-2">
         <FaUser/>
          </button>
          </div>
          {show && <CartModal />}
        </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
