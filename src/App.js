import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="site-header" role="banner">
          <div className="container header-inner">
            <h1 className="brand">Little Lemon 🍋</h1>
            <nav role="navigation" aria-label="Main Navigation">
              <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Book a Table</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="container" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="site-footer" role="contentinfo">
          <div className="container">
            <p>© {new Date().getFullYear()} Little Lemon — All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
