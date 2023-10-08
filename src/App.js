// App.js
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import AddTask from "./components/AddTask/index";
import { Task } from "./components/Home";
import { Login } from "./components/Login/index.jsx";
import { Register } from "./components/Register/index";
import { isAuthenticated } from "./auth";
import { ChangePassword } from "./components/ChangePassword";

function App() {


  return (
    <Routes>
      <Route path="/" element={isAuthenticated() ? <Task /> : <Login /> } />
      <Route path="/home" element={isAuthenticated() ? <AddTask /> : <Login />}  />
      <Route path="/change" element={isAuthenticated() ? <ChangePassword /> : <Login />}  />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
