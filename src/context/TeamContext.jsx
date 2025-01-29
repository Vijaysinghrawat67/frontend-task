import { createContext, useContext } from "react";
import teamMembers from "../store/teamData"; // Importing team data

// Create Context
const TeamContext = createContext();

// Context Provider Component
export const TeamProvider = ({ children }) => {
  return (
    <TeamContext.Provider value={{ teamMembers }}>
      {children}
    </TeamContext.Provider>
  );
};

// Custom Hook for using the context
export const useTeam = () => useContext(TeamContext);
