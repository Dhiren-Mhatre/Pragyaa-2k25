import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
// import './CardGrid.css';
// import './EventPage.css'
// import './DetailPage.css'
import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';
import treasureImage from '../assets/treasure.jpeg';
import sharkImage from '../assets/shark.jpeg';
import mockImage from '../assets/mock.png';

const EventsPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const cardsData = [
    { title: 'Event', image: roboticImage, path: '/events/event' },
    { title: 'Workshops', image: iplImage, path: '/events/workshops' },
    { title: 'Competitions', image: treasureImage, path: '/events/competitions' },
    { title: 'Exhibitions', image: sharkImage, path: '/events/exhibitions' },
    { title: 'Games & Fun Activities', image: mockImage, path: '/events/fungames' },
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