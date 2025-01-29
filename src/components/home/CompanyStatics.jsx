
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useHomePageContext } from '../../context/HomePageContext';

const CompanyStatistics = () => {
  const { homePageData } = useHomePageContext();
  const [hasViewed, setHasViewed] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setHasViewed(true);
    }
  }, [inView]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div ref={ref} className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Our Achievements</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {homePageData.stats.map((stat, index) => (
            <div key={index} className="stat-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-5xl font-bold text-blue-600">
                {hasViewed && <CountUp start={0} end={parseInt(stat.number)} duration={3} delay={0.5} suffix="+" />}
              </h3>
              <p className="mt-4 text-xl text-gray-800 dark:text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStatistics;
