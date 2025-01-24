import React from "react";
import { motion } from "framer-motion";

export const ServiceCard = ({
  index,
  title,
  description,
  services,
  activeCard,
  setActiveCard,
}) => {
  return (
    <div
      className="relative group bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:translate-y-1 cursor-pointer"
    >
      <div>
        <h3 className="text-xl font-body text-gray-800 mb-2">{title}</h3>
        <p className="text-body text-gray-600">{description}</p>
      </div>

      <div
        className="bg-accent text-white text-center py-2 rounded-b-lg mt-4 cursor-pointer relative"
        onMouseEnter={() => setActiveCard(index)}
      >
        Services
      </div>

      {activeCard === index && (
        <motion.div
          className="md:absolute left-0 top-full w-full bg-gray-50 p-4 shadow-lg rounded-lg z-96 xs:relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          onMouseLeave={() => setActiveCard(null)}
        >
          <ul>
            {services.map((service, idx) => (
              <li
                key={idx}
                className="py-1 px-2 text-gray-700 hover:bg-gray-200 rounded transition-colors cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

