import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Countries from './Countries';

function App() {
  return (
    <div>
         <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/countries" element={<Countries />} />
        </Routes>
      </Router>
    
     </div>
    
    
    
    
  );
}

export default App;
