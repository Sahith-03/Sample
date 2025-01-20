import React from 'react';
import './App.css';
import Login from './routes/login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
