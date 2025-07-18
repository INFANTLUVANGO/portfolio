import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

// Icons
import {
  FaJava, FaReact, FaDatabase, FaHtml5, FaCss3Alt,
  FaJs, FaCode, FaBootstrap, FaGitAlt,
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
    { name: "JavaScript", icon: <FaJs /> },
    { name: "C ", icon: <FaCode /> },
    { name: "Leaflet.js", icon: <SiLeaflet /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  const getDirection = (i) => {
    const directions = [
      { x: -100, y: 0 },
      { x: 100, y: 0 },
      { x: 0, y: -100 },
      { x: 0, y: 100 },
      { x: -100, y: -100 },
      { x: 100, y: 100 },
      { x: -100, y: 100 },
      { x: 100, y: -100 },
    ];
    return directions[i % directions.length];
  };

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
        {skills.map((skill, index) => {
          const direction = getDirection(index);
          return (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ ...direction, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0 , delay: index * 0}}
              whileHover={{ scale: 1.2 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;


