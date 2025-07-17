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
    {/* Left Section - Name and Intro Text (Slides from left) */}
<motion.div
  className="home-content"
  initial={{ x: -200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <h3>HELLO</h3>
  <h1>I'm <span>Infant Luvango</span></h1>
  <p className="professional-description">
    💻 Full Stack Developer specializing in <strong>Java, Spring Boot, ReactJS, MySQL and MongoDB</strong>, 
    building <strong>real-time, data-driven applications</strong> with elegant designs.
  </p>
  <div className="home-buttons">
    <a 
      href="/RESUME.pdf"    
      download="RESUME.pdf"  
      className="btn-cv"
    >
      Get My CV
    </a>
  </div>
</motion.div>

{/* Right Side - Profile Image (Slides from right) */}
<motion.div
  className="home-image-wrapper"
  initial={{ x: 200, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <motion.img 
    src={profileImg} 
    alt="Infant Luvango" 
    className="home-image"
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
  />
</motion.div>


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
