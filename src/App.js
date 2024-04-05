import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Navbar from './utils/NavBar';
import Footer from './utils/Footer';
import './App.css'

import Home from './routes/Home'; 
import Events from './routes/Events';
import Privacy from './utils/Privacy';
import Notice from './routes/Notice';


function App() {

  return (
    <div className='select-none'>
      <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/notice" element={<Notice />}/> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </div>
  );
}



export default App;
