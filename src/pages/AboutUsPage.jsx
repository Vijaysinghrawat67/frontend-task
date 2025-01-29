import React from 'react';
import AboutOverview from "../components/about/AboutOverview.jsx";
import MissionVision from "../components/about/MissionVision.jsx";
import Highlights from "../components/about/Highlights.jsx";
import TeamSection from "../components/about/TeamSection.jsx";

const AboutUsPage = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <section className="mb-12">
        <AboutOverview />
      </section>
      <section className="mb-12">
        <MissionVision />
      </section>
      <section className="mb-12">
        <Highlights />
      </section>
      <section className="mb-12">
        <TeamSection />
      </section>
     
    </main>
  );
};

export default AboutUsPage;
