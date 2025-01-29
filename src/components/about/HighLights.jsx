import React from 'react';
import { useAbout } from "../../context/AboutContext.jsx";
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Highlights = () => {
  const { highlights } = useAbout();

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Company Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4 transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCheckCircle className="text-green-500 w-8 h-8" />
              <p className="text-lg text-gray-700 dark:text-gray-300">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
