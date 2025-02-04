import { useState } from "react";
import "./App.css";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router";

import Login from "./Login";
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default (App);
