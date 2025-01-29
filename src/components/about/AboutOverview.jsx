import React from 'react';
import { useAbout } from "../../context/AboutContext";
import { FaGlobe, FaHistory, FaBuilding } from 'react-icons/fa';

const AboutOverview = () => {
  const { companyOverview } = useAbout();

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">{companyOverview.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <FaBuilding className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">Overview</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">{companyOverview.description}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <FaHistory className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">History</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">{companyOverview.history}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <FaGlobe className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">Global Presence</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">{companyOverview.globalPresence}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
