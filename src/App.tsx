import { useState } from "react";
import "./App.css";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withTranslation } from 'react-i18next';


import Login from "./Login";
import HomePage from "./component/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default withTranslation()(App);
