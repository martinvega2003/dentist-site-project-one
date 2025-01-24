import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  const handleSubMenu = (category) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const servicesData = [
    {
      title: "General Dentistry",
      description: "Routine dental care to maintain healthy teeth and gums.",
      services: [
        { title: "Dental Checkups", path: "/general/checkups" },
        { title: "Teeth Cleaning", path: "/general/cleaning" },
        { title: "Fluoride Treatments", path: "/general/fluoride" },
        { title: "Oral Cancer Screening", path: "/general/screening" },
        { title: "Sealants", path: "/general/sealants" },
      ],
    },
    // ... Add the other categories
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-primary">
          Clinic Logo
        </a>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden block text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links for Desktop */}
        <ul
          className={`lg:flex hidden space-x-8 ${
            isMobileMenuOpen ? "flex" : "hidden"
          } flex-col lg:flex-row lg:items-center`}
        >
          <li>
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            {servicesMenuOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-lg p-4 rounded-lg w-48 z-10">
                {servicesData.map((category) => (
                  <li
                    key={category.title}
                    className="relative group mb-2"
                    onMouseEnter={() => handleSubMenu(category.title)}
                    onMouseLeave={() => handleSubMenu(category.title)}
                  >
                    <button className="block text-gray-700 hover:text-blue-600 w-full text-left font-medium">
                      {category.title}
                    </button>
                    {subMenuOpen[category.title] && (
                      <ul className="absolute top-0 left-full bg-white shadow-lg p-4 rounded-lg w-64 z-20">
                        {category.services.map((service) => (
                          <li key={service.title} className="mb-1">
                            <Link to={service.path} className="hover:text-blue-600">
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="#testimonials" className="hover:text-blue-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-blue-600">
              Blog
            </a>
          </li>
        </ul>

        {/* Contact Info & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            <p>Call: (123) 456-7890</p>
            <p>Email: info@clinic.com</p>
          </div>
          <button
            className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition duration-300"
          >
            <Link to="/form">Book Online</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-100 p-4 shadow-md">
          <ul className="space-y-4">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-600">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-blue-600">
                Blog
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
