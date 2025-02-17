<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './CardGrid.css';

import roboticImage from '../assets/EventsImages/Title.jpg';
import iplImage from '../assets/EventsImages/workshops.jpg';
import treasureImage from '../assets/EventsImages/depart.jpg';
import sharkImage from '../assets/EventsImages/exhibition.jpg';


const EventsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const cardsData = [
    { title: 'TITLE EVENTS', image: roboticImage, path: '/events/title-event' },
    { title: 'Workshops', image: iplImage, path: '/events/workshops' },
    { title: 'Deparmental Events', image: treasureImage, path: '/events/deparmental-events' },
    { title: 'Exhibitions', image: sharkImage, path: '/events/exhibitions' },
  
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
          Pragyaa 2k25
        </h1>
    <div className='flex justify-center items-center gap-16'>
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <div key={index} onClick={() => handleCardClick(card.path)}>
          <Card title={card.title} img={card.image} />
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './CardGrid.css';

import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';
import treasureImage from '../assets/treasure.jpeg';
import sharkImage from '../assets/shark.jpeg';


const EventsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const cardsData = [
    { title: 'TITLE EVENTS', image: roboticImage, path: '/events/title-event' },
    { title: 'Workshops', image: iplImage, path: '/events/workshops' },
    { title: 'Deparmental EVEnts', image: treasureImage, path: '/events/deparmental-events' },
    { title: 'Exhibitions', image: sharkImage, path: '/events/exhibitions' },
  
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
          Pragyaa 2k25
        </h1>
    <div className='flex justify-center items-center gap-16'>
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <div key={index} onClick={() => handleCardClick(card.path)}>
          <Card title={card.title} img={card.image} />
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

>>>>>>> upstream/master
export default EventsPage;