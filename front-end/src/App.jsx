import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';

import './App.css';

function App() {
  
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </Router>
  );
}

export default App;
