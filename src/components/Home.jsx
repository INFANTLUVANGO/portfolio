import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";   
import Experience from "./Experience";
import Contact from "./Contact";
import profileImg from "../assets/myselfBW.jpg"; 
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div>
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Floating Background Shapes */}
      <div className="background-shapes">
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
        <div className="shape-hexagon"></div>
      </div>

      {/* Left Section */}
      <div className="home-content">
        <h3>HELLO</h3>
        <h1>I'm <span> Infant Luvango</span></h1>
        <p className="professional-description">
          💻 Full Stack Developer specializing in <strong>Java, Spring Boot, ReactJS, MySQL and MongoDB</strong>, 
          building <strong>real-time, data-driven applications</strong> with elegant designs.
        </p>

        {/* Action Buttons */}
        <div className="home-buttons">
          <a 
            href="/RESUME.pdf"    
            download="RESUME.pdf"  
            className="btn-cv"
          >
            Get My CV
          </a>
        </div>
      </div>

      {/* Right Side Full-Page Half-Oval Image */}
      <div className="home-image-wrapper">
        <motion.img 
          src={profileImg} 
          alt="Infant Luvango" 
          className="home-image"
          initial={{ opacity: 0, scale: 7.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://github.com/INFANTLUVANGO" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/infant-luvango-p/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/shane_infant_?igsh=aGxjaDI4cm04NHRx" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </motion.div>

    <About/>
    <Projects/>
    <Skills/>
    <Experience/>
    <Contact/>
    
    </div>
  
  );
};

export default Home;




