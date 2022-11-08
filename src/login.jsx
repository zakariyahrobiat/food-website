import React from "react";
import { useAppContext } from "./context";

const Login = () => {
  const { data, handleSubmit } = useAppContext();
  return (
    <div className=" flex justify-center items-center h-screen text-center ">
      <form action="" className="bg-white w-80 max-w-full p-6  shadow-xl ">
        <h2 className="text-2xl font-bold">Sign In </h2>
        <div className="form-control relative my-6">
          <input
            className="w-full border-b py-1 border-black text-base focus:outline-none peer"
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-1 text-base peer-focus:-translate-y-5 peer-valid:-translate-y-5"
          >
            email
          </label>
        </div>
        <div className="form-control relative mb-8">
          <input
            className="w-full border-b py-1 border-black text-base focus:outline-none peer"
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="password"
            className="absolute left-0 top-1 text-base peer-focus:-translate-y-5 peer-valid:-translate-y-5"
          >
            password
          </label>
        </div>
        <button type="submit" className="bg-blue-500 px-3 py-1 text-white">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
