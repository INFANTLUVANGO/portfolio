import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">INFANT LUVANGO P</div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/skills">SKILLS</Link></li>    
        <li><Link to="/experience">EXPERINECE</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

