
import React from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import KeyFeatures from '../components/home/KeyFeatures.jsx';
import ServicesOverview from '../components/home/ServicesOverview.jsx';
//import Testimonials from '../components/home/Testimonials.jsx';
import CompanyStatistics from '../components/home/CompanyStatics.jsx';
//import NewsletterSignup from '../components/NewsletterSignup';

const HomePage = () => {
  return (
    <div className="space-y-16 mt-16">
      <HeroSection />
      <KeyFeatures />
      <ServicesOverview />
      {/* <Testimonials /> */}
      <CompanyStatistics />
      {/* <NewsletterSignup /> */}
    </div>
  );
};

export default HomePage;
