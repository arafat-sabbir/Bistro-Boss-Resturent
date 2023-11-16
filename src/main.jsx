import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import Authprovider from "./Auth/AuthProvider/Authprovider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={routes}></RouterProvider>
    </Authprovider>
    <Toaster></Toaster>
  </React.StrictMode>
);
