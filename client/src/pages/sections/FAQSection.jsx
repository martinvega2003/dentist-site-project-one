import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqsData } from "../../data/faqsData";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(index === openQuestion ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="md:container md:mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-700">Find answers to our most common inquiries below, organized for your convenience.</p>
        </div>
        {faqsData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{section.category}</h3>
            {section.questions.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <button
                  onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                  className="flex items-center justify-between w-full text-left text-lg font-medium text-blue-700"
                >
                  <span>{faq.question}</span>
                  {openQuestion === `${sectionIndex}-${index}` ? (
                    <FaChevronUp className="text-blue-500" />
                  ) : (
                    <FaChevronDown className="text-blue-500" />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: openQuestion === `${sectionIndex}-${index}` ? "auto" : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

