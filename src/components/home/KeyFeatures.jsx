
import React from 'react';
import { useHomePageContext } from '../../context/HomePageContext';
import { FaLaptopCode, FaCloud, FaRobot } from 'react-icons/fa';

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FaCloud: FaCloud,
  FaRobot: FaRobot,
};

const KeyFeatures = () => {
  const { homePageData } = useHomePageContext();

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Why Choose Us</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {homePageData.keyFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={index} className="feature-card p-6 border rounded-lg bg-gray-50 dark:bg-gray-800">
                <Icon className="text-5xl mx-auto text-blue-600" />
                <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
