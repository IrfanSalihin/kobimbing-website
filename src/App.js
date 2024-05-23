// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import Tentang from './components/Tentang';
import Keanggotaan from './components/Keanggotaan';
import Perniagaan from './components/Perniagaan';
import Utama from './components/Utama'; 
import Lain from './components/Lain';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Banner />
        <Routes>
          <Route path="/" element={<Utama />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/keanggotaan" element={<Keanggotaan />} />
          <Route path="/perniagaan" element={<Perniagaan />} />
          <Route path="/lain" element={<Lain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
