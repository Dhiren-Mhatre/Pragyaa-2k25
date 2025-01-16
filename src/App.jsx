import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Events, scroller } from "react-scroll";
import BackToTopButton from "./componants/BackToTop";
import SchedulePage from "./SchedulePage/SchedulePage";
import MainContent from "./MainContent";
import Team from "./Team/Team";
import SplashCursor from "./Curser/SplashCursor"
import './styles/loadingStyles.css';

const Footer = React.lazy(() => import("./componants/Footer")); 
 
const App = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen relative">
      {loading ? (
        <div>
        <div className="flex justify-center items-center h-screen bg-[#000818] text-white">
          <div className="text-center">
            <h1 className="glitch1" data-glitch="Loading...">
              <h3>Loading...</h3>
            </h1>
            
            <h1 className="glitch2" data-glitch="Pragyaa">
              Pragyaa
            </h1>
          </div>
        </div>
      </div>
      ) : (
        <Router>
          <AppContent />
        </Router>
      )}
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
    <SplashCursor />
      <Navbar isHomePage={location.pathname === '/'} />
      <Routes>
        <Route path="*" element={<MainContent />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <FooterVisibility />
      <BackToTopButton />
    </>
  );
};

// FooterVisibility Component
const FooterVisibility = () => {
  const location = useLocation();

  return location.pathname === "/" ? (
    <Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </Suspense>
  ) : null;
};

export default App;