import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import bgImageUrl from "../../images/lead-magnet-bg.webp";

const LeadMagnetSection = ({ setIsVisible }) => {
  return (
    <section className="relative py-16">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          zIndex: -1,
          //backgroundAttachment: "scroll", // Ensures smooth scrolling
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative px-6 flex md:justify-end justify-center">
        {/* Lead Magnet Card */}
        <div
          className="bg-white p-8 rounded-br-none rounded-tl-none rounded-tr-3xl rounded-bl-3xl shadow-lg md:w-2/3 w-full"
        >
          {/* Title */}
          <motion.h2 
            className="text-2xl font-bold text-blue-700 mb-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Enjoy Free Teeth Whitening for a Year!
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-gray-700 mb-6 md:block xs:hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Transform your smile and boost your confidence with our exclusive{" "}
            <strong>Free Teeth Whitening for a Year</strong> offer! As part of our commitment to your oral health, we're excited to provide this amazing opportunity.
          </motion.p>

          {/* Main Benefits */}
          <motion.h3 
            className="text-lg font-semibold text-blue-700 mb-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            What You’ll Gain:
          </motion.h3>
          <motion.ul 
            className="mb-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <li className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="min-h-3 sm:min-h-4 min-w-3 sm:min-w-4 text-blue-500 mr-2" /> A brighter, more confident smile all year long.
            </li>
            <li className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="min-h-3 sm:min-h-4 min-w-3 sm:min-w-4 text-blue-500 mr-2" /> Professional whitening sessions tailored to your needs.
            </li>
            <li className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="min-h-3 sm:min-h-4 min-w-3 sm:min-w-4 text-blue-500 mr-2" /> Safe, effective, and gentle on your teeth.
            </li>
          </motion.ul>

          {/* Steps */}
          <motion.h3 
            className="text-lg font-semibold text-blue-700 mb-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            How to Claim This Offer:
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <li className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="min-h-3 sm:min-h-4 min-w-3 sm:min-w-4 text-blue-500 mr-2" /> Book your first consultation with us online or by phone.
            </li>
            <li className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="min-h-3 sm:min-h-4 min-w-3 sm:min-w-4 text-blue-500 mr-2" /> Attend your appointment and meet our expert team.
            </li>
            <li className="flex items-center text-gray-700 mb-2">
              <FaCheckCircle className="min-h-3 sm:min-h-4 min-w-3 sm:min-w-4 text-blue-500 mr-2" /> Start your journey toward a radiant smile!
            </li>
          </motion.ul>

          {/* Call-to-Action Button */}
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => setIsVisible(true)}
            className="w-fit sm:w-64 bg-gradient-to-r from-primary to-blue-900 relative text-white text-md sm:text-lg font-bold px-8 py-3 mt-4 shadow-md rounded-md transition-transform duration-1000 overflow-hidden group"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
              aria-hidden="true"
            ></span>
            <span className="relative z-10 group-hover:text-white">Get This Offer</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;


