import React, { useContext, useState } from "react";
import App from "./App";
import { info } from "./data";

const AppContext = React.createContext();
const Context = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const handleSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <AppContext.Provider
      value={{ data, handleSubmit, count, setCount, cart, setCart }}
    >
      <App />
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { Context, AppContext };
