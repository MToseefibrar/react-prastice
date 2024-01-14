import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import PrivateRoute from './Components/PrivateRoute';
import Service from './Components/Service';
import Login from './Components/Contact';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';


function App() {





  
  return (
    <div className="App">


    <Routes>
    <Route element={<PrivateRoute/>}>
    <Route element={<Home/>} path="/">Home</Route>
    <Route element={<About/>} path="/About">About</Route>
    <Route element={<Service/>} path="/Service">Services</Route>
    </Route>
    
    <Route element={<Login/>} path='/Login'>Login</Route>
    </Routes>


   


  
  
<Home/>
   
    </div>
  );
}

export default App;
