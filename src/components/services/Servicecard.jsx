import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex justify-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
