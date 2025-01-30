import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './CardGrid.css';
import Hero from "../componants/Hero/Hero";
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
    { title: 'e-sports', image: mockImage, path: '/events/fungames' },
  ];

  return (
    <>
  
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
          Pragyan 2k25
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

export default EventsPage;