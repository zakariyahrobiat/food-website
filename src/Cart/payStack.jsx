import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
// import "./App.css";
import Navbar from "../navbar";
import { useAppContext } from "../context";
const PayStack = () => {
  const { cartTotal } = useAppContext();
  const publicKey = "pk_test_edd0a3b47a1b2ed9e43f84fbcaad730a531dfb22";
  const amount = cartTotal;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className=" flex justify-center items-center w-screen h-screen">
      {/* <Navbar /> */}
      <div className="bg-white p-5 w-9/12">
        <form className="">
          <div className="w-full mb-4 ">
            <label className="text-left text-lg mb-2">Name</label>
            <input
              className="bg-transparent border border-slate-300 w-full ml-4"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full mb-4 ">
            <label>Email</label>
            <input
              className="bg-transparent border border-slate-300 w-full ml-4"
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full mb-4 ">
            <label>Phone</label>
            <input
              type="text"
              className="bg-transparent border border-slate-300 w-full ml-4"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </form>

        <PaystackButton
          className="cursor-pointer w-full text-center text-lg tracking-widest uppercase font-bold bg-black text-white rounded p-4"
          {...componentProps}
        />
      </div>
    </div>
  );
};

export default PayStack;
