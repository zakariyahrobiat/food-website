import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Context } from "./context";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
