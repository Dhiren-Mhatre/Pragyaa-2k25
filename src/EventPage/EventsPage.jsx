import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
// import './EventPage.css';
import './CardGrid.css';

import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';
import treasureImage from '../assets/treasure.jpeg';
import sharkImage from '../assets/shark.jpeg';
import mockImage from '../assets/mock.png';

const EventsPage = () => {  // Updated name
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const cardsData = [
    { title: 'EVENTS', image: roboticImage, path: '/events' },
    { title: 'Workshops', image: iplImage, path: '/workshops' },
    { title: 'Competitions', image: treasureImage, path: '/competitions' },
    { title: 'Exhibitions', image: sharkImage, path: '/exhibitions' },
    { title: 'Games & Fun Activities', image: mockImage, path: '/fungame' },
  ];

  return (
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <div key={index} onClick={() => handleCardClick(card.path)}>
          <Card title={card.title} img={card.image} />
        </div>
      ))}
    </div>
  );
};

export default EventsPage;
