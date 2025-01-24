import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegEnvelope, FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "5 Tips for a Healthier Smile",
    description: "Learn simple yet effective tips to maintain a radiant and healthy smile every day.",
    style: "bg-blue-500 text-white",
  },
  {
    title: "The Benefits of Regular Dental Checkups",
    description: "Discover why regular visits to your dentist are essential for long-term oral health.",
    style: "bg-green-500 text-white",
  },
  {
    title: "Understanding Insurance Coverage",
    description: "A guide to navigating dental insurance and maximizing your benefits.",
    style: "border-2 border-blue-500 text-blue-500 bg-white",
  },
  {
    title: "Teeth Whitening Myths Debunked",
    description: "Separate fact from fiction when it comes to keeping your teeth bright and white.",
    style: "bg-blue-500 text-white",
  },
  {
    title: "Signs You Need a Dental Visit",
    description: "Identify early signs that may require immediate attention from a dental professional.",
    style: "bg-green-500 text-white",
  },
  {
    title: "Why Choose Our Clinic?",
    description: "Explore what makes our clinic stand out from the rest when it comes to dental care.",
    style: "border-2 border-blue-500 text-blue-500 bg-white",
  },
];

const BlogSection = () => {

  const [email, setEmail] = useState("")
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please write your email address.");
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
      email
    }

    try {
      const response = await axios.post("http://localhost:5000/api/leads/newsletter", data); //magnet, booking

      // Display success message if the request succeeds
      if (response.status === 200 || response.status === 201) {
        setError(false)
        setEmail("")
      } 
      // Remove success message after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    } catch (error) {
      setError("Something went wrong. Please, try again later.")
    }
  };

  return (
    <section id="blog" className="bg-blue-100 py-20">
      <div className="px-6">
        {/* Intro Copywriting */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Explore Our Latest Articles</h2>
          <p className="mt-4 text-lg text-gray-700">
            Stay informed with expert insights and helpful tips on maintaining excellent oral health.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${post.style}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link to="/article-placeholder" className="w-full h-full">
                <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
                <p className="text-base">{post.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6">
            Get the latest updates, tips, and special offers straight to your inbox. Join our community today!
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </form>
          {error === null ? (
            <div className="flex items-center mt-4 text-green-600">
              <FaCheckCircle className="mr-2" />
              <p>We respect your privacy and won’t spam your inbox.</p>
            </div>
          ) : error ? (
            <div className="flex items-center mt-4 text-red-600">
              <FaCheckCircle className="mr-2" />
              <p>{error}</p>
            </div>
          ) : (
            <div className="flex items-center mt-4 text-green-600">
              <FaCheckCircle className="mr-2" />
              <p>Form submitted successfully!</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

