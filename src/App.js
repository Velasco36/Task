// App.js
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import AddTask from "./components/AddTask/AddTask";
import { Task } from "./components/Task";
import { Login } from "./components/Login/index.jsx";
import { Register } from "./components/Register/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Task />} />
      <Route path="/home" element={<AddTask />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
