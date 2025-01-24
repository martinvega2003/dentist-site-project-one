import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // React Icons for arrows

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-blue-100 py-12 max-w-full">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl mb-4 text-white">This is what our clients can tell you about us...</h2>
        <div className="flex justify-center items-center gap-4 mb-8">
          <motion.div
            className="text-2xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-yellow-500">★★★★☆</span> (100 reviews)
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            className="flex overflow-hidden justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Card 1 */}
            <div className="flex-shrink-0 w-96 p-6 mx-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-800 rounded-full"></div>
              </div>
              <p className="text-gray-800 text-lg mb-4">
                "I had an amazing experience with this dental clinic. The staff
                is incredibly friendly, and they took the time to explain every
                step of my treatment. I was nervous at first, but their
                professionalism and care helped ease my concerns. I’m now more
                confident about my smile than ever before. The office is
                pristine, and they use the latest technology, making my visit
                smooth and comfortable. I will definitely be returning for my
                regular check-ups."
              </p>
              <div className="flex items-center mb-4">
                <span className="mr-2">★★★★☆</span>
                <span className="text-gray-600">5 stars</span>
              </div>
              <p className="text-gray-700 font-medium">John Doe</p>
            </div>

            {/* Card 2 */}
            <div className="flex-shrink-0 w-96 p-6 mx-108 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-800 rounded-full"></div>
              </div>
              <p className="text-gray-800 text-lg mb-4">
                "I visited the clinic for a routine cleaning and had a great
                experience. The team made me feel comfortable and ensured that I
                understood every part of the procedure. I’ve always been nervous
                about dental visits, but they really put my mind at ease. The
                entire process was quick, efficient, and painless. I felt well
                taken care of and would highly recommend this practice to anyone
                in need of quality dental care."
              </p>
              <div className="flex items-center mb-4">
                <span className="mr-2">★★★★☆</span>
                <span className="text-gray-600">4.5 stars</span>
              </div>
              <p className="text-gray-700 font-medium">Jane Smith</p>
            </div>

            {/* Card 3 */}
            <div className="flex-shrink-0 w-96 p-6 mx-4 bg-white rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-gray-800 rounded-full"></div>
              </div>
              <p className="text-gray-800 text-lg mb-4">
                "The level of service I received was truly top-notch. From the
                moment I walked in, I was greeted warmly and made to feel
                comfortable. The dental team was very knowledgeable and took the
                time to explain my treatment plan, which helped me feel more at
                ease. I was impressed with how thorough and gentle they were
                throughout the entire procedure. I highly recommend this clinic
                for anyone seeking high-quality dental care."
              </p>
              <div className="flex items-center mb-4">
                <span className="mr-2">★★★★☆</span>
                <span className="text-gray-600">5 stars</span>
              </div>
              <p className="text-gray-700 font-medium">Emily Johnson</p>
            </div>
          </motion.div>

          {/* Carousel Navigation Arrows */}
          <button className="absolute top-1/2 left-58 transform -translate-y-1/2 pl-4">
            <FaArrowLeft className="h-16 w-16 text-white text-2xl cursor-pointer" />
          </button>
          <button className="absolute top-1/2 right-58 transform -translate-y-1/2 pr-4">
            <FaArrowRight className="h-16 w-16 text-white text-2xl cursor-pointer" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;