import React from 'react';
import Card from './Card';
import './Card.css';
import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';
import treasureImage from '../assets/treasure.jpeg';
import sharkImage from '../assets/shark.jpeg';
import mockImage from '../assets/mock.png';
import jaam from '../assets/jamm.jpeg';
import roadshow from '../assets/roadshow.jpeg';
import { Link } from 'react-router-dom';

const CardGrid = () => {
  const cardsData = [
    { title: 'Robotic Wedge War', image: roboticImage },
    { title: 'IPL Auction SGGS', image: iplImage },
    { title: 'Mega Treasure Hunt', image: treasureImage },
    { title: 'Shark Tank SGGS', image: sharkImage },
    { title: 'Mock Placement', image: mockImage },
    { title: 'SGGS Mega Jamm', image: jaam },
    { title: 'Roadshows', image: roadshow },
    { title: 'Robotic Wedge War', image: roboticImage },
    { title: 'IPL Auction SGGS', image: iplImage },
  ];

  return (
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/detail/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;