import React from 'react';
import { useAbout } from "../../context/AboutContext";
import missionIcon from "../../assets/tech.jpg";
import visionIcon from "../../assets/tech.jpg";

const MissionVision = () => {
  const { missionVision } = useAbout();

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-10">Our Mission & Vision</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-center">
            <img src={missionIcon} alt="Mission" className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{missionVision.mission}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-center">
            <img src={visionIcon} alt="Vision" className="w-24 h-24 mx-auto mb-4 rounded-full object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{missionVision.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
