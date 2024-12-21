import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home.js';
import Contact from './components/contact/Contact.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
