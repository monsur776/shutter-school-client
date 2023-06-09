import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <HelmetProvider>
            <div className="bg-base-200">
               <RouterProvider router={router}></RouterProvider>
            </div>
         </HelmetProvider>
      </AuthProvider>
   </React.StrictMode>
);
