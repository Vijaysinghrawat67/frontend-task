import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { HomePageProvider } from './context/HomePageContext.jsx';
import { AboutProvider } from './context/AboutContext.jsx';
import { TeamProvider } from './context/TeamContext.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage.jsx'));

const App = () => {
  return (
    <ThemeProvider>
      <HomePageProvider>
        <AboutProvider>
          <TeamProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
              <Header />
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                  <Route path="/contact" element={<ContactUsPage />} />
                </Routes>
              </Suspense>
              <Footer />
            </div>
          </TeamProvider>
        </AboutProvider>
      </HomePageProvider>
    </ThemeProvider>
  );
};

export default App;
