import React from "react";
import { useAppContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../components/authService/Auth";

const Login = () => {
  const navigate = useNavigate()
  const { data, handleSubmit, error } = useAppContext();
  const {email, password} = data
  const handleLogin=async(e)=>{
e.preventDefault()
if(!password || !email){
  setError("Please enter both email and password.");
  return;
}
try{
  const token = await LoginUser(email, password);
        console.log("User logged in with token:", token);
        setAuthStatus(token);
  navigate("/cart")
  setError("Login successful!");
}catch(error){
  setError(error.message || "Login failed.");
}
  }
  
  return (
    <div className=" flex justify-center items-center h-screen text-center w-full ">
      {error && <p className="bg-red-600 text-white p-2 fixed top-16 z-20 w-2/3 md:w-1/3 left-1/2 transform -translate-x-1/2 text-lg font-semibold rounded-lg">{error}</p>}
      <form onSubmit={handleLogin} className="bg-white w-full md:w-1/2 p-6  shadow-shadow ">
        <h2 className="text-2xl font-bold">Sign In </h2>
        <div className="form-control relative my-6">
          <input
            className="w-full border-b py-1 border-black text-base focus:outline-none peer"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-1 text-base capitalize font-bold peer-focus:-translate-y-5 peer-valid:-translate-y-5"
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
            value={password}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="password"
            className="absolute left-0 top-1 text-base capitalize font-bold peer-focus:-translate-y-5 peer-valid:-translate-y-5"
          >
            password
          </label>
        </div>
        <button type="submit" className="bg-blue-500 px-3 py-1 text-white font-bold w-full rounded">
          Sign In
        </button>
        <p className="text-left text-base font-bold  py-4">
        Need an account? <Link to="/register"><span className="text-blue-700"> Sign up here</span></Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
