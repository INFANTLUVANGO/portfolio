import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const top = aboutRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={aboutRef} className="about-section">
      {/* Background animation */}
      <motion.div
        className="about-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        className={`about-content ${isVisible ? "visible" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="about-heading">About Me</h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hey, I'm <strong>Infant Luvango</strong>, a passionate 
          <strong> Full Stack Developer</strong> specializing in 
          <strong> Java, Spring Boot, ReactJS, and MongoDB</strong>. 
          I thrive on building <strong>real-time, data-driven applications</strong> 
          with a focus on <strong>performance, scalability, and seamless UX</strong>.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          During my <strong>internship at Ramphal Technologies</strong>, 
          I built a <strong>radar visualization system</strong> that captures 
          <strong> ASTERIX CAT048 radar data</strong> over Ethernet using Java. 
          The decoded data is transmitted via WebSockets to a 
          <strong> ReactJS frontend</strong> and visualized on a Leaflet.js map, 
          with <strong>MongoDB</strong> for real-time data storage.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          I'm driven by <strong>clean code architecture</strong> and 
          delivering <strong>scalable, high-performance solutions</strong>. 
          Let's collaborate and create something impactful!
        </motion.p>

        {/* 🔥 Button directs to LinkedIn profile */}
        <motion.a
          href="https://www.linkedin.com/in/infant-luvango-p/"  // Replace with your LinkedIn URL
          target="_blank"
          rel="noreferrer"
          className="about-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;






