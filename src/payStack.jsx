import React from "react";
import { PaystackButton } from "react-paystack";

import { useAppContext } from "./context/AuthContext";
const PayStack = ({onClose, onSuccess}) => {
  const { cartTotal, data } = useAppContext();
  const publicKey = "pk_test_edd0a3b47a1b2ed9e43f84fbcaad730a531dfb22";
  const amount = cartTotal*100;
  const {email, name, phone} = data

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess, onClose
   
  
  }

  return (
   
        <PaystackButton
          className="cursor-pointer w-full text-center text-2xl tracking-widest uppercase font-bold bg-blue-500 text-white rounded p-3"
          {...componentProps}
        />
     
  );
};

export default PayStack;
