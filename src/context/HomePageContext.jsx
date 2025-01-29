
import React, { createContext, useContext, useState } from 'react';
import homePageData from '../store/Home.data.js';

const HomePageContext = createContext();

export const useHomePageContext = () => useContext(HomePageContext);

export const HomePageProvider = ({ children }) => {
  const [homePageDataState, setHomePageDataState] = useState(homePageData);

  return (
    <HomePageContext.Provider value={{  homePageData }}>
      {children}
    </HomePageContext.Provider>
  );
};
