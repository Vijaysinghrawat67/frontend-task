import React from 'react';
import ServiceCard from '../components/services/Servicecard.jsx';
import { FaCode, FaCloud, FaRobot, FaMobileAlt, FaSearch, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Expert web development services including front-end, back-end, and full-stack development.',
      icon: <FaCode size={40} className="text-blue-600" />,
    },
    {
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services including migration, management, and optimization.',
      icon: <FaCloud size={40} className="text-blue-600" />,
    },
    {
      title: 'AI/ML Services',
      description: 'Cutting-edge AI and machine learning services, including data analysis, model training, and deployment.',
      icon: <FaRobot size={40} className="text-blue-600" />,
    },
    {
      title: 'Mobile App Development',
      description: 'Innovative mobile app development for iOS and Android platforms, ensuring user-friendly and engaging apps.',
      icon: <FaMobileAlt size={40} className="text-blue-600" />,
    },
    {
      title: 'SEO Services',
      description: 'Boost your online presence with our expert SEO services, driving traffic and increasing visibility.',
      icon: <FaSearch size={40} className="text-blue-600" />,
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with our comprehensive cybersecurity solutions, safeguarding your data and infrastructure.',
      icon: <FaShieldAlt size={40} className="text-blue-600" />,
    },
  ];

  return (
    <main className="container mx-auto py-12 px-4 mt-16">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <section className="mt-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Why Choose Us</h3>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          At TechNova Innovations, we are dedicated to providing exceptional services that meet your unique needs. Our team of experts is committed to delivering innovative solutions, unparalleled customer support, and superior results.
        </p>
        <ul className="mt-6 space-y-4 max-w-3xl mx-auto">
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <span>Experienced and skilled professionals</span>
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <span>Innovative and customized solutions</span>
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <span>Proven track record of success</span>
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <span>Commitment to customer satisfaction</span>
          </li>
          <li className="flex items-center text-gray-700 dark:text-gray-300">
            <FaCheckCircle className="text-green-500 w-6 h-6 mr-2" />
            <span>Cutting-edge technology and tools</span>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ServicesPage;
