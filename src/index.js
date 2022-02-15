import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import {Nav} from './components/Nav/Nav';

ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/login" element={<Login />} /> 

    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
