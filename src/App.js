// App.js
import { Routes, Route } from 'react-router';
import './App.css';
import React from 'react';
import AddTask from './components/AddTask/AddTask'; // Update the import statement
import { Task } from './components/Task';
// import { Disingcard } from './components/AddTask/DisingCard/Disingcard';

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
