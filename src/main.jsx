import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Match from './pages/Match.jsx';
import Driver from './pages/Driver.jsx';
import Constructor from './pages/Constructor.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match" element={<Match />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
