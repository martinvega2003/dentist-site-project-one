import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const ContactSection = () => {
  const position = [40.7128, -74.006]; // Example: New York City coordinates

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      // Remove success message after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      // Remove success message after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/leads/message", data);

      // Clear error if submission is successful
      setError(false);
      setName("");
      setEmail("");
      setMessage("");

      // Remove success message after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    } catch (error) {
      // Display error message if submission fails
      setError("Something went wrong. Try again later")
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto px-6 md:max-w-[80%] xs:min-w-[95%]"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-gray-100 p-8 rounded-lg shadow-lg w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Your Message"
                onChange={e => setMessage(e.target.value)}
                value={message}
                rows="4"
              />
            </div>
            {error === null ? <></> : error ? <p className="text-red-500 mb-4">{error}</p> : <p className="text-green-500 mb-4">Form submitted successfully!</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Contact Details</h3>
            <ul>
              <li className="flex items-center text-gray-700 mb-2">
                <FaMapMarkerAlt className="text-blue-500 mr-3" /> 123 Main Street, City, Country
              </li>
              <li className="flex items-center text-gray-700 mb-2">
                <FaPhone className="text-blue-500 mr-3" /> +1 234 567 890
              </li>
              <li className="flex items-center text-gray-700 mb-2">
                <FaEnvelope className="text-blue-500 mr-3" /> contact@clinic.com
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-blue-600 hover:text-blue-700 cursor-pointer" />
              <FaTwitter className="text-blue-600 hover:text-blue-700 cursor-pointer" />
              <FaInstagram className="text-pink-600 hover:text-pink-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Find Us Here</h3>
          <div className="w-full h-64 relative">
            <MapContainer
              center={position}
              zoom={13}
              className="w-full h-full rounded-lg shadow-lg"
              style={{ zIndex: 1 }} // Ensure the map is behind the navbar
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>Our Clinic Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
