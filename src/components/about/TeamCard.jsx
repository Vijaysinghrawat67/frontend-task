import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ member }) => {
  return (
    <motion.div
      className="p-6 border rounded-lg shadow-lg w-80 text-center bg-white dark:bg-gray-800"
      whileHover={{ scale: 1.05 }}
    >
      <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full border-2 border-blue-600" />
      <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-200">{member.name}</h3>
      <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{member.bio}</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaLinkedin size={24} />
        </a>
        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={24} />
        </a>
      </div>
    </motion.div>
  );
};

export default TeamCard;
