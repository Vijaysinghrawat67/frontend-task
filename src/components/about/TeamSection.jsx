import React from 'react';
import { useTeam } from "../../context/TeamContext";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  const { teamMembers } = useTeam();

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">Meet Our Team</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-4">Our team of experts is dedicated to innovation and excellence.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
