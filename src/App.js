// App.js
import { Routes, Route } from 'react-router';
import './App.css';
import React from 'react';
import AddTask from './components/AddTask/AddTask';
import { Task } from './components/Task';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Task />} />
    <Route path='/home' element={<AddTask />} />
    </Routes>

    </>
  );
}

export default App;
