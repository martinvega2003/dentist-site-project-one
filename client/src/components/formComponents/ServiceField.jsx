import React, { useState } from "react";
import { servicesData } from "../../data/servicesData";

export const ServiceField = ({setService}) => {

  const [selectedService, setSelectedService] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showMenu, setShowMenu] = useState(false); // Controls menu visibility

  return (
    <div className="relative flex flex-col items-center w-full p-6 bg-white rounded-lg shadow-lg">
      <label htmlFor="service-selector" className="text-lg font-semibold mb-4">
        Select a Service
      </label>
      <div
        className="relative w-full max-w-md border rounded-md shadow-md bg-primary"
        onMouseLeave={() => {
          setShowMenu(false);
          setHoveredCategory(null);
        }}
      >
        {/* Input Field */}
        <div
          id="service-selector"
          className="px-4 py-3 text-white cursor-pointer rounded-t-md"
          onMouseEnter={() => setShowMenu(true)} // Show menu on hover
        >
          {selectedService || "Select a category..."}
        </div>

        {/* Categories */}
        {showMenu && (
          <div className="absolute left-0 w-full border-t bg-white rounded-b-md">
            {servicesData.map((category, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 flex items-center justify-between cursor-pointer"
                onMouseEnter={() => setHoveredCategory(category)}
              >
                {category.title}
              </div>
            ))}
          </div>
        )}

        {/* Services */}
        {hoveredCategory && (
          <div className="absolute left-full top-0 w-full max-w-sm border rounded-md shadow-lg bg-white">
            <div className="px-4 py-2 border-b text-lg font-semibold">
              {hoveredCategory.title}
            </div>
            {hoveredCategory.services.map((service, index) => (
              <div
                key={index}
                className={`px-4 py-2 hover:bg-green-100 cursor-pointer ${
                  selectedService === service.title ? "bg-green-300" : ""
                }`}
                onClick={() => {
                  setSelectedService(service.title);
                  setService(service.title)
                  setHoveredCategory(null);
                  setShowMenu(false); // Hide menu after selection
                }}
              >
                {service.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
