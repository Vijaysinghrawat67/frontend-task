
import React from 'react';
import { useHomePageContext } from '../../context/HomePageContext';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/tech.jpg';

const HeroSection = () => {
  const { homePageData } = useHomePageContext();
  const { tagline, intro, cta } = homePageData.hero;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">{tagline}</h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl">{intro}</p>
          <button 
            onClick={handleClick} 
            className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            {cta}
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img 
            src={image1}
            alt="TechNova Innovations" 
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
