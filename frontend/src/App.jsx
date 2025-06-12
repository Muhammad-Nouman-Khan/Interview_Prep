import React from "react";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate } from "react-router";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen" data-theme="forest">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
