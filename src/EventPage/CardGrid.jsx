import React from 'react';
import Card from './Card';
import './CardGrid.css';  
import { useNavigate } from "react-router-dom";
import BackButton from './BackButton';
import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';
import treasureImage from '../assets/treasure.jpeg';
import sharkImage from '../assets/shark.jpeg';
import mockImage from '../assets/mock.png';
import jaam from '../assets/jamm.jpeg';
import roadshow from '../assets/roadshow.jpeg'

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
      <BackButton />
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} img={card.image} />
      ))}
    </div>
  );
};

export default CardGrid;