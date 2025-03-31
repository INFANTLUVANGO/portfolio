import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Shapes */}
      <div className="projects-background">
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
        <div className="shape-hexagon"></div>
      </div>

      <h2>My Projects</h2>

      <motion.div
        className="project-list"
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
        {/* Project Cards */}
        {[
          {
            title: "Radar Visualization System",
            description:
              "Developed a real-time radar visualization system capturing ASTERIX CAT048 radar data over Ethernet using Java. The decoded data is transmitted via WebSockets to a ReactJS-based frontend and visualized on a Leaflet.js map. Utilized MongoDB for real-time storage."
          },
          {
            title: "Expense Tracker App",
            description:
              "Built a full-stack expense tracker using ReactJS, Spring Boot, and MySQL. Features include CRUD operations, user authentication, and a responsive UI with dynamic charts."
          },
          {
            title: "Real-time Chat Application",
            description:
              "Created a real-time chat app using ReactJS, WebSockets, and Node.js. Enabled instant message broadcasting with socket connections, user authentication, and dynamic user status updates."
          },
          {
            title: "Portfolio Website",
            description:
              "Designed and developed a personal portfolio using ReactJS with Framer Motion animations. Includes smooth transitions, interactive sections, and a responsive layout with detailed project showcases."
          },
          {
            title: "Weather Dashboard",
            description:
              "Built a weather dashboard using ReactJS, OpenWeather API, and CSS animations. Displays real-time weather data, including temperature, humidity, and forecasts."
          }
        ].map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;


