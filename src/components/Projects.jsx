import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
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
            title: "NoteMate",
            description:
              "NoteMate is a full-stack note-taking web application built with Spring Boot (Java), ReactJS, and MySQL.It features user registration and login, with session-based authentication for personalized access.Users can perform create, read, update, and delete (CRUD) operations on their notes.The backend leverages Spring Data JPA for ORM and ensures secure, user-linked data storage.The frontend offers a modern, dark-themed UI with smooth transitions and responsive design"
          },
          {
            title: "Bus Reservation",
            description:
              "The bus reservation system is developed in Java, with MySQL as the database for storing bus and booking details.JDBC is used to establish a connection between the Java application and MySQL, enabling dynamic data operations via SQL queries. The system handles bus management, seat availability, and reservations directly through the database."
          },
          {
            title: "Weather App",
            description:
              "In ReactJS, integrate a weather API to fetch city-specific weather data, then use state management to dynamically update the UI with the retrieved information, offering users an intuitive interface to check weather forecasts within the React application."
          }
        ].map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.07 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.1 }}
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


