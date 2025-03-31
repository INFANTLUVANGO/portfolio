import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // Success or error message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://formspree.io/f/movenkrw"; // Replace with your Formspree ID

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      } else {
        setStatus("Failed to send message. ❌ Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. ❌ Please try again.");
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Shapes */}
      <div className="contact-background">
        <div className="shape-circle"></div>
        <div className="shape-triangle"></div>
        <div className="shape-hexagon"></div>
      </div>

      <div className="contact-content">

        {/* Left Section */}
        <motion.div className="contact-info">
          <h2>Contact Me</h2>
          <p><FaPhone /> +91 63744 77041</p>
          <p><FaEnvelope /> luvangoinfant@gmail.com</p>
          <p><FaMapMarkerAlt /> Chennai, India</p>

          <div className="contact-icons">
            <a href="https://github.com/infantluvango" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/infantluvango" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/infantluvango" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div className="contact-form">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              />
            </div>

            <button type="submit" className="btn-submit">Send Message</button>

            {/* Display status message */}
            {status && <p className="status-message">{status}</p>}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;





