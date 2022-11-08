import React from "react";
import Register from "./register";
import Login from "./login";
import Navbar from "./navbar";
import Menu from "./menu";
import Discription from "./discription";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

export const All = () => {
  return (
    <div>
      <Navbar />
      <Menu />
    </div>
  );
};
const router = createBrowserRouter([
  { path: "/", element: <All /> },
  // { path: "/discription", element: <Discription /> },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
