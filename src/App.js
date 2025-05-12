import React from "react";
import { Routes, Route, Link } from "react-router-dom";  
import About from './pages/About';  
import Projects from './pages/Projects'; 
import Contact from './pages/Contact';  

function App() {
  return (
    <>

      <nav className="navbar">
        <Link to="/" className="navbar-link">About</Link>
        <Link to="/projekts" className="navbar-link">Layihələr</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projekts" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
