import React, { useEffect, useState } from "react";
// import './App.css';
import CardGrid from './CardGrid';
import DetailPage from './DetailPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailWorkshop from './DetailWorkshop';
import Workshop from './Workshop';
import Competition from './Competition';
import DetailCompetition from './DetailCompetition';
import Exhibition from './Exhibition';
import DetailExhibition from './DetailExhibition';
import Fungame from './Fungame';
import DetailFungame from './DetailFungame';
import EventsPage from './EventsPage';

function EventRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route path="/events" element={<CardGrid />} />
          <Route path="/detail/:title" element={<DetailPage />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/workshops/detail/:title" element={<DetailWorkshop />} />
          <Route path="/competitions" element={<Competition />} />
          <Route path="/competitions/detail/:title" element={<DetailCompetition />} />
          <Route path="/exhibitions" element={<Exhibition />} />
          <Route path="/exhibitions/detail/:title" element={<DetailExhibition />} />
          <Route path="/fungames" element={<Fungame />} />
          <Route path="/fungames/detail/:title" element={<DetailFungame />} />
        </Routes>
      </Router>
    </div>
  );

}

export default EventRoutes;
