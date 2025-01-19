import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Events, scroller } from "react-scroll";
import BackToTopButton from "./componants/BackToTop";
import SchedulePage from "./SchedulePage/SchedulePage";
import MainContent from "./MainContent";
import Team from "./Team/Team";
import About from "./About/About";
import './styles/loadingStyles.css';
import SplashCursor from "./Curser/SplashCursor";

const Footer = React.lazy(() => import("./componants/Footer")); 

const App = () => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageElements = document.querySelectorAll('img');
    const totalImages = imageElements.length;
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    if (totalImages === 0) {
      setImagesLoaded(true);
    } else {
      imageElements.forEach(img => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener('load', imageLoaded);
          img.addEventListener('error', imageLoaded);
        }
      });
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      imageElements.forEach(img => {
        img.removeEventListener('load', imageLoaded);
        img.removeEventListener('error', imageLoaded);
      });
    };
  }, []);

  const showPreloader = loading || !imagesLoaded;

  return (
    <div className="w-screen h-screen relative">
      {showPreloader ? (
        <div>
          <div className="flex justify-center items-center h-screen bg-[#000818] text-white">
            <div className="text-center">
              <h1 className="glitch1" data-glitch="Loading...">
                Loading...
              </h1>
              <h1 className="glitch2" data-glitch="Pragyaa">
                Pragyaa
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen bg-[#000818] text-white">
              <h1>Loading...</h1>
            </div>
          }
        >
          <Router>
            <AppContent />
          </Router>
        </Suspense>
      )}
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <SplashCursor/>
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

const FooterVisibility = () => {
  const location = useLocation();

  return location.pathname === "/" ? (
    <Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </Suspense>
  ) : null;
};

export default App;
