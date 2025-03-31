import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

// Import all icons
import { 
  FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaCode, FaBootstrap, FaGitAlt 
} from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiWebrtc, SiLeaflet } from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "WebSockets", icon: <SiWebrtc /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },               // ✅ Replaced Node.js with JavaScript

    // ✅ Additional skills
    { name: "C ", icon: <FaCode /> },       
    { name: "Leaflet.js", icon: <SiLeaflet /> },       
    { name: "Bootstrap", icon: <FaBootstrap /> },      
    { name: "Git", icon: <FaGitAlt /> }                
  ];

  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Shapes */}
      <div className="skills-background">
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
        <div className="shape-hexagon"></div>
      </div>

      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;



