import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Index from './components/Index/Index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Index />
      </div>
    </BrowserRouter>
  );
}

export default App;
