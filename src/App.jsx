import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import router from "./Routs";
import { AuthProvider } from "./components/AuthProvider";
function App() {
  return (
    <>
      

      <body className="hold-transition  sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
        <div className="wrapper" >
          
        <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
      </div>
      </body>
    </>
  );
} 

export default App;
