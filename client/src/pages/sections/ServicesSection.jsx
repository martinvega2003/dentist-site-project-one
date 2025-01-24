import React, { useState } from "react";
import { motion } from "framer-motion";
import { servicesData } from "../../data/servicesData.js";
import { Link } from "react-router-dom";
import { FaStethoscope, FaSmile, FaUserMd } from "react-icons/fa";

const ServicesSection = ({ setIsVisible }) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="services" className="bg-white pt-12 pb-32">
      <motion.div
        className="px-6 pt-8 text-center flex flex-col justify-start items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center text-primary mb-4">
          Our Services
        </h2>
        <p className="md:max-w-[70%] text-gray-700 font-body text-lg mb-6 leading-relaxed text-center">
          We provide dental care for the whole family, from children to elderly patients,
          building lifelong relationships through trust, transparency, and exceptional service.
          Our pricing is transparent, and we back our treatments with a full warranty to ensure your satisfaction.
        </p>
        <p className="text-gray-700 font-body text-lg mb-8">
          As a special offer, enjoy <strong>free teeth whitening for a year</strong> when you book an appointment today!
        </p>
        <motion.button
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg font-body text-lg"
          onClick={() => setIsVisible(true)}
        >
          Get This Offer
        </motion.button>
      </motion.div>

      {/* Cards Section */}
      <div className="px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {servicesData.map((category, index) => (
          <div
            key={index}
            onMouseLeave={() => setActiveCard(null)}
            className="relative flex flex-col justify-between group bg-transparent p-6 rounded-lg hover:shadow-2xl transition-shadow hover:translate-y-[-5px] cursor-pointer md:mb-12 hover:border"
          >
            {/* Main Card */}
            <div>
              <div className="w-full h-fit p-6 flex justify-center items-center">
                {index === 0 ? <FaStethoscope className="text-primary w-12 h-12" /> : index === 1 ? <FaSmile className="text-primary w-12 h-12" /> : <FaUserMd className="text-primary w-12 h-12" />}
              </div>
              <h3 className="text-xl font-body text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-body text-gray-600">{category.description}</p>
            </div>

            {/* Footer */}
            <div
              className="bg-primary text-white text-center py-2 rounded-b-lg mt-4 cursor-pointer relative"
              onMouseEnter={() => setActiveCard(index)}
              onClick={() => {activeCard === null ? setActiveCard(index) : setActiveCard(null)}}
            >
              Services
            </div>

            {/* Hover Card */}
            {activeCard === index && (
              <motion.div
                className="static md:absolute left-0 top-full w-full bg-transparent md:bg-gray-50 p-4 md:shadow-lg rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onMouseLeave={() => setActiveCard(null)}
              >
                <ul>
                  {category.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="py-1 px-2 text-gray-700 hover:bg-primary rounded transition-colors cursor-pointer"
                    >
                      <Link to={service.path}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
