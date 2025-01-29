
import React from 'react';
import { Link } from 'react-router-dom';
import { useHomePageContext } from '../../context/HomePageContext';
import { FaLaptopCode, FaCloud, FaRobot } from 'react-icons/fa';

const iconMap = {
  FaLaptopCode: FaLaptopCode,
  FaCloud: FaCloud,
  FaRobot: FaRobot,
};

const ServicesOverview = () => {
  const { homePageData } = useHomePageContext();

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Our Services</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {homePageData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={index} className="service-card p-6 border rounded-lg bg-gray-100 dark:bg-gray-800">
                <Icon className="text-5xl mx-auto text-blue-600" />
                <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">{service.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
                <Link to={service.link} className="mt-4 inline-block text-blue-600 hover:underline">Learn More</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
