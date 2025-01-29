import { createContext, useContext } from "react";
import aboutData from "../store/aboutData"; // Import About Us data

// Create Context
const AboutContext = createContext();

// Context Provider Component
export const AboutProvider = ({ children }) => {
  return (
    <AboutContext.Provider value={aboutData}>
      {children}
    </AboutContext.Provider>
  );
};

// Custom Hook for using the context
export const useAbout = () => useContext(AboutContext);
