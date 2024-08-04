import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<App/>}/>
        </Routes>
      </Router>
  </div>
);


reportWebVitals();