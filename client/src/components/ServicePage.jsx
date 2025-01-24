import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import BenefitsSection from "../pages/sections/BenefitsSection";
import ContactSection from "../pages/sections/ContactSection";
import imageOne from "../images/service-description.webp"
import imageTwo from "../images/service-benefits.webp"
import imageThree from "../images/service-process.webp"
import imageFour from "../images/service-instructions.webp"
import { Link } from "react-router-dom";
import HeroSection from "../pages/sections/HeroSection";
import CarouselSection from "../pages/sections/CarouselSection";
import LeadMagnetSection from "../pages/sections/LeadMagnetSection";
import { ImagesSection } from "../pages/sections/ImagesSection";
import { ExtraDataSection } from "../pages/sections/ExtraDataSection";

const ServicePage = ({
  title,
  description,
  longDescription,
  benefits,
  process,
  instructions,
  professionals,
  buttonText,
}) => {
  return (
    <div>
      <HeroSection heading={title} subheading={description} />
      <ExtraDataSection />

      {/* Description Section */}
      <section className="bg-gradient-to-b from-blue-300 to-white px-20 py-12 flex justify-center items-center">
        <motion.div 
          className="w-[90%] md:w-2/3 lg:w-fit mx-auto bg-white shadow-2xl rounded-3xl flex flex-col lg:flex-row justify-start items-center lg:items-start text-justify p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={imageOne} alt="" className=" w-full lg:w-1/2 h-auto mb-6 lg:mb-0 lg:mr-6 rounded-tl-2xl rounded-br-2xl shadow-2xl border border-primary" />
          <p className="text-gray-600 leading-relaxed">{longDescription}</p>
        </motion.div>
      </section>

      {/* Details Section */}
      <section
        className="relative max-w-full py-12 flex flex-col lg:flex-row justify-center items-center lg:items-start overflow-hidden bg-transparent"
      >
        <div className="absolute inset-0">
          <div className="h-1/2 lg:h-1/3 w-full bg-white"></div>
          <div className="h-1/2 lg:h-2/3 w-full bg-blue-200"></div>
        </div>

        <motion.div 
          className="relative z-10 bg-white w-[80%] lg:w-96 h-fit lg:h-[670px] flex flex-col justify-start items-start p-4 border border-primary cursor-pointer m-4"
          initial={{ opacity: 0, y: 100, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={imageTwo} alt="" className="w-full lg:w-96 h-auto" />
          <div className="h-fit text-left p-6 pl-0">
            <h3 className="text-2xl font-semibold mb-6 text-blue-700">What You Get</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300"
                >
                  <FaCheckCircle className="min-h-4 min-w-4 text-blue-600 mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="relative z-10 bg-white w-[80%] lg:w-96 h-fit lg:h-[670px] flex flex-col justify-start items-start p-4 border border-primary cursor-pointer m-4"
          initial={{ opacity: 0, y: 100, }}
          whileInView={{ opacity: 1, y: 0, }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img src={imageThree} alt="" className="w-full lg:w-96 h-auto" />
          <div className="h-fit text-left p-6 pl-0">
            <h3 className="text-2xl font-semibold mb-6 text-blue-700">Process</h3>
            <ul className="space-y-4">
              {process.map((step, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300"
                >
                  <FaCheckCircle className="min-h-4 min-w-4 text-blue-600 mr-3" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="relative z-10 bg-white w-[80%] lg:w-96 h-fit lg:h-[670px] flex flex-col justify-start items-start p-4 border border-primary cursor-pointer m-4"
          initial={{ opacity: 0, y: 100, }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <img src={imageFour} alt="" className="w-full lg:w-96 h-auto" />
          <div className="h-fit text-left p-6 pl-0">
            <h3 className="text-2xl font-semibold mb-6 text-blue-700">Instructions</h3>
            <ul className="space-y-4">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-lg hover:text-blue-600 transition-colors duration-300"
                >
                  <FaCheckCircle className="min-h-4 min-w-4 text-blue-600 mr-3" />
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Professionals Section */}
      <section className="bg-white px-6 py-12">
        <motion.h3 
          className="text-2xl font-semibold mb-6 text-blue-700 text-center"
          initial={{ opacity: 0, x: 100, }}
          whileInView={{ opacity: 1, x: 0, }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Professionals
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-20"
          initial={{ opacity: 0, x: 100, }}
          whileInView={{ opacity: 1, x: 0, }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {professionals.map((pro, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg font-bold text-blue-800">{pro.name}</h4>
              <p className="text-gray-600 mt-2">{pro.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-white px-6 py-12 text-center">
        <motion.button
          onClick={() => setIsVisible(true)}
          className="w-80 bg-transparent relative text-blue-900 border-4 border-blue-900 hover:border-accent text-lg font-bold px-8 py-6 shadow-md transition-transform overflow-hidden group"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-2000 group-hover:opacity-100"
            aria-hidden="true"
          ></span>
          <span className="relative z-10 group-hover:text-white">Fix Your Smile</span>
        </motion.button>
      </section>

      <ImagesSection />
      <CarouselSection />
      <BenefitsSection />
      <LeadMagnetSection />
      <ContactSection />
    </div>
  );
};

export default ServicePage;
