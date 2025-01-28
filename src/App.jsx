import React, { useEffect, useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import BackToTopButton from "./componants/BackToTop";
import SchedulePage from "./SchedulePage/SchedulePage";
import MainContent from "./MainContent";
import Team from "./Team/Team";
import SplashCursor from "./Curser/SplashCursor";
import CardGrid from "./EventPage/CardGrid";
import DetailPage from "./EventPage/DetailPage";
import Workshop from "./EventPage/Workshop";
import DetailWorkshop from "./EventPage/DetailWorkshop";
import Competition from "./EventPage/Competition";
import DetailCompetition from "./EventPage/DetailCompetition";
import Exhibition from "./EventPage/Exhibition";
import DetailExhibition from "./EventPage/DetailExhibition";
import Fungame from "./EventPage/Fungame";
import DetailFungame from "./EventPage/DetailFungame";
import EventsPage from "./EventPage/EventsPage";
import './styles/loadingStyles.css';



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
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/event" element={<CardGrid />} />
        <Route path="/events/detail/:title" element={<DetailPage />} />
        <Route path="/events/workshops" element={<Workshop />} />
        <Route path="/events/workshops/:title" element={<DetailWorkshop />} />
        <Route path="/events/competitions" element={<Competition />} />
        <Route path="/events/competitions/:title" element={<DetailCompetition />} />
        <Route path="/events/exhibitions" element={<Exhibition />} />
        <Route path="/events/exhibitions/:title" element={<DetailExhibition />} />
        <Route path="/events/fungames" element={<Fungame />} />
        <Route path="/events/fungames/:title" element={<DetailFungame />} />
        <Route path="/team" element={<Team />} />
        <Route path="" element={<MainContent />} />
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
