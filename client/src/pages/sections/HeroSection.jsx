import React from "react";
import { Link } from "react-router-dom";
import { FaTooth, FaTools, FaCalendarAlt, FaSmileBeam } from "react-icons/fa";
import bgImage from "../../images/hero-bg.webp"

const HeroSection = ({heading, subheading}) => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mx-auto px-4 lg:px-12 text-white max-w-4xl">
        {/* Heading */}
        <h1
          className="text-4xl lg:text-6xl text-light font-bold font-heading mb-6 animate-fade-in"
          style={{
            textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
          }}
        >
          {heading || "Your Smile, Our Priority"}
        </h1>

        {/* Subheading */}
        <p className="text-lg lg:text-2xl text-dark font-body mb-8 animate-slide-up">
          {subheading ||
            "Experience modern dental care with personalized treatment plans and exceptional results."}
        </p>

        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/form"
            className="w-64 bg-gradient-to-r from-primary to-blue-900 relative text-white text-lg font-bold px-8 py-3 shadow-md transition-transform duration-1000 hover:scale-105 animate-bounce rounded-full overflow-hidden group"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
              aria-hidden="true"
            ></span>
            <span className="relative z-10 group-hover:text-white">Book a Call</span>
          </Link>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="flex flex-col items-center p-4 rounded-lg shadow-2xl">
            <FaTooth size={40} className="text-primary mb-2" />
            <p className="text-sm lg:text-base text-gray-700">Certified Dentists</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg shadow-2xl">
            <FaTools size={40} className="text-primary mb-2" />
            <p className="text-sm lg:text-base text-gray-700">State-of-the-Art Equipment</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg shadow-2xl">
            <FaCalendarAlt size={40} className="text-primary mb-2" />
            <p className="text-sm lg:text-base text-gray-700">Flexible Scheduling</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg shadow-2xl">
            <FaSmileBeam size={40} className="text-primary mb-2" />
            <p className="text-sm lg:text-base text-gray-700">100% Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
