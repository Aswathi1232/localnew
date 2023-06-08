import React from "react";
import Nav1 from "./Units/Nav1";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Productlist from "./Pages/Productlist";
// import Cart from "./Pages/Cart";
// import Registration from "./Pages/Registration"
export default function App() {
  return (
    <div>
      <Nav1 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productlist" element={<Productlist />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Cart" element={<Cart />} /> */}
        {/* <Route path="/Registration" element={<Registration />} /> */}
      </Routes>
    </div>
  );
}