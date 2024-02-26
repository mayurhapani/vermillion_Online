import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./comonent/Home";
import MyBlog from "./comonent/MyBlog";
import Register from "./comonent/auth/Register";
import Login from "./comonent/auth/Login";
import NavBar from "./comonent/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<MyBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
