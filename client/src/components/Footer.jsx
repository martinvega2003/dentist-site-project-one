import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-5">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <p>123 Clinic Lane, New York, NY 10001</p>
          <p>Email: contact@yourclinic.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-blue-600">Services</a></li>
            <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
            <li><a href="/faq" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <a href="https://facebook.com" className="hover:text-blue-600"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="hover:text-blue-600"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" className="hover:text-blue-600"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" className="hover:text-blue-600"><FaLinkedin size={24} /></a>
          </div>
        </div>
        
        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:text-blue-600">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center border-t border-gray-300 pt-6">
        <p>&copy; {new Date().getFullYear()} Your Clinic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
