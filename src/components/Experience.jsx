// import React from "react";
// import { motion } from "framer-motion";
// import "../styles/Experience.css";

// const Experience = () => {
//   return (
//     <motion.div 
//       className="experience"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//     >
//       <h2>Experience</h2>
//       <p>Intern at Ramphal Technologies - Radar Visualization Project.</p>
//       <p>Worked with ReactJS, Java, WebSockets, and MongoDB.</p>
//     </motion.div>
//   );
// };

// export default Experience;
import React from "react";
import { motion } from "framer-motion";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Ramphal Technologies",
      duration: "Jan 2025 - Mar 2025",
      description:
        "Developed a real-time radar visualization system using Java, Python, WebSockets, and ReactJS. Captured ASTERIX CAT048 radar data over Ethernet, decoded it using Python, and visualized it on a map with Leaflet.js. Used MongoDB for data storage."
    },
    {
      title: "Frontend Developer Intern",
      company: "Sparks Foundation",
      duration: "Jul 2024 - Sep 2024",
      description:
        "Built a responsive web application using ReactJS and CSS. Implemented dynamic UI components and optimized the website for better performance and usability."
    }
  ];

  return (
    <motion.div 
      className="experience-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
