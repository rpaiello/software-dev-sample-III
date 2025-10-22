import React from 'react'
import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import InputHandler from './components/InputHandler';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CardProfiler from './components/CardProfiler';
import FetchData from './components/fetchdata';

function App() {
   return(
    <>
      <BrowserRouter>
        <nav>
            <Link to="/">Card Profiler</Link> | <Link to="/counter">Counter</Link> | 
            <Link to="/inputhandler">Input Handler</Link> | <Link to="/fetchdata">Fetch Data</Link>
        <Routes>
           <Route path='/' element={<CardProfiler />} ></Route>
            <Route path='/counter' element={<Counter />} ></Route>
             <Route path='/inputhandler' element={<InputHandler />} ></Route>
             <Route path='/fetchdata' element={<FetchData />}></Route>
        </Routes>
        </nav>
    </BrowserRouter>
    </>
   )
}

export default App
