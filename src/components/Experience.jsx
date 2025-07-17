import React from "react";
import { motion } from "framer-motion";
import "../styles/Experience.css";

const Experience = () => {

  return (
     <motion.div
          className="experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        >
          {/* Background Shapes */}
          <div className="experience-background">
            <div className="shape-circle"></div>
            <div className="shape-triangle"></div>
            <div className="shape-hexagon"></div>
          </div>
    
          <h2>Experience</h2>
    
   
         <motion.div
           className="experience-list"
           initial="hidden"
           animate="visible"
           variants={{
             hidden: { opacity: 0, y: 100 },
             visible: {
               opacity: 1,
               y: 0,
               transition: {
                 staggerChildren: 0.3,
                 duration: 1
               }
             }
           }}
         >
           {/* Experience Cards */}
           {[

            {
      title: "Software Developer Intern",
      company: "Ramphal Technologies",
      duration: "Jan 2025 - Mar 2025",
      description:
        "Designed and developed a real-time radar visualization system leveraging Java, Python, WebSockets, and ReactJS. Extracted ASTERIX CAT048 radar data from Ethernet packets using Java and transmitted it to a Python WebSocket server for decoding. Optimized real-time data processing and reduced latency by directly streaming decoded radar data to the frontend. Implemented interactive map visualizations using Leaflet.js, enabling real-time tracking of aircraft movements. Utilized MongoDB for structured data storage, ensuring efficient retrieval and analysis. Enhanced system performance by integrating WebSocket communication for seamless data updates, significantly improving real-time tracking accuracy."
    },
    {
      title: "Web Developer Intern",
      company: "Sparks Foundation",
      duration: "May 2023 - Jun 2023",
      description:
        "Developed a fully responsive and interactive web application using ReactJS, improving user experience with dynamic UI components. Designed and optimized the application for enhanced performance, implementing lazy loading and efficient state management. Applied modern CSS techniques to create a visually appealing and accessible UI, ensuring cross-browser compatibility. Focused on usability and performance optimization, achieving faster load times and seamless navigation across different devices. Collaborated with a team to integrate APIs, enhancing the application's functionality and responsiveness."
    }
             
           ].map((exp, index) => (
             <motion.div
               key={index}
               className="experience-card"
               whileHover={{ scale: 1.07 }}
               variants={{
                 hidden: { opacity: 0, y: 30 },
                 visible: { opacity: 1, y: 0 }
               }}
               transition={{ duration: 0.1 }}
             >
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
             </motion.div>
           ))}
         </motion.div>
        </motion.div>
     );
};

export default Experience;
