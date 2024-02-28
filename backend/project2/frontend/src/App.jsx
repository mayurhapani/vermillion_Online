import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./comonent/Home";
import MyBlog from "./comonent/MyBlog";
import Register from "./comonent/auth/Register";
import Login from "./comonent/auth/Login";
import NavBar from "./comonent/NavBar";
import AuthGuard from "./guard/AuthGuard";
import GuestGuard from "./guard/GuestGuard";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <GuestGuard>
              <Home />
            </GuestGuard>
          }
        />
        <Route
          path="/blog"
          element={
            <GuestGuard>
              <MyBlog />
            </GuestGuard>
          }
        />
        <Route
          path="/register"
          element={
            <AuthGuard>
              <Register />
            </AuthGuard>
          }
        />
        <Route
          path="/login"
          element={
            <AuthGuard>
              <Login />
            </AuthGuard>
          }
        />
      </Routes>
    </div>
  );
}
