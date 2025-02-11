import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Assignment from './components/Assignment';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">A.I Assignment</h1>
        </header>

        <nav className="bg-gray-200 p-4">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-blue-600 hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
            <li><Link to="/assignment" className="text-blue-600 hover:underline">Assignment</Link></li>
          </ul>
        </nav>

        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/assignment" element={<Assignment />} />
          </Routes>
        </main>

        <footer className="bg-blue-500 text-white py-4 text-center">
          <p>&copy; 2025 A.I Assignment Website</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
