import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../components/authService/Auth";
const Register = () => {
const navigate = useNavigate()
 
  
  const { data, handleSubmit, error } = useAppContext();
  const {email, password, name} = data
  const handleRegisteredUser=async(e)=>{
    e.preventDefault()
    setError(null)
if(!email || !password){
  setError("Please enter both email and password.");
  return;
  }
  if (password.length < 6){
    setError("password should not be less than 6")
    return;
  }
  try{
   await registerUser(email, password)
    setError("User registered successfully!");
  navigate ("/cart")
  } catch(error){
    setError(error.message || "Registration failed.");
  }
}
 
  return (
    <div className=" flex justify-center items-center h-screen text-center relative ">
      {error && <p className="bg-red-600 text-white p-2 fixed top-16 z-20 w-2/3 md:w-1/3 left-1/2 transform -translate-x-1/2 text-lg font-semibold rounded-lg">{error}</p>}
      <form className="bg-white w-1/2 p-6  shadow-shadow ">
        <h2 className="text-2xl font-bold">Create An Account</h2>
        <div className="form-control relative my-4 ">
          <input
            className="w-full border-b py-1 border-black text-sm focus:outline-none peer"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-1 text-sm capitalize font-bold peer-focus:-translate-y-5 peer-valid:-translate-y-5"
          >
            username
          </label>
        </div>
        <div className="form-control relative mb-4 ">
          <input
            className="w-full border-b py-1 border-black text-sm focus:outline-none peer"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-1 text-sm capitalize font-bold peer-focus:-translate-y-5 peer-valid:-translate-y-5"
          >
            email
          </label>
        </div>
        <div className="form-control relative mb-6 ">
          <input
            className="w-full border-b py-1 border-black text-sm focus:outline-none peer"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="password"
            className="absolute left-0 top-1 text-sm capitalize font-bold peer-focus:-translate-y-5 peer-valid:-translate-y-5"
          >
            password
          </label>
        </div>
        <button type="submit" onClick={handleRegisteredUser} className="bg-blue-500 px-3 py-1 text-white font-bold w-full rounded">
          Sign Up
        </button>
        <p className="text-left text-base font-bold  py-4">
          Have An Account? <Link to="/login"><span className="text-blue-700"> Sign in</span></Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
