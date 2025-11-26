import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './components/Home';
import AdminContainer from './containers/AdminContainer.jsx';

import './App.css';

function App() {
  
  return (
    <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminContainer />} />
        </Routes>
    </Router>
  );
}

export default App;
