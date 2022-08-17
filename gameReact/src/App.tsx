import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import LoginWindow from './components/LoginWidow/LoginWindow';
import GameWindow from './components/GameWidow/GameWindow';

function App() {
  return (
    <BrowserRouter>
    <div >
    <Navbar/> 
    <div className='app-wrapper-content'>
    <Routes>
      <Route path='/login' element={<LoginWindow/>}/>
      <Route path='/game' element={<GameWindow/>}/>
    </Routes>  
    </div>  
    </div>
    </BrowserRouter>
  );
}

export default App;
