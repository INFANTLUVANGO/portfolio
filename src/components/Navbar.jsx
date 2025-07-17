import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">INFANT LUVANGO P</div>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>PROJECTS</Link></li>
        <li><Link to="/skills" onClick={() => setIsOpen(false)}>SKILLS</Link></li>    
        <li><Link to="/experience" onClick={() => setIsOpen(false)}>EXPERIENCE</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
