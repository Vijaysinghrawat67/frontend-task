import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="container mx-auto mt-16 py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Our Contact Information</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">info@technova.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaPhone className="text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">Naugaun, Dehradun, Uttarakhand, India</span>
            </li>
          </ul>

          {/* Google Maps */}
          <div className="mt-8">
            <iframe
              title="TechNova Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13767.139750408565!2d77.92286345358178!3d30.385464246054575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4d414b70281%3A0xf78d3bc6bc86427a!2sNaugaon%2C%20Uttarakhand%20248007!5e0!3m2!1sen!2sin!4v1738170381072!5m2!1sen!2sin"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
