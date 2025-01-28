import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import Card from './Card';
// import './DetailPage.css'

import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';
import treasureImage from '../assets/treasure.jpeg';
import sharkImage from '../assets/shark.jpeg';
import mockImage from '../assets/mock.png';
import jaam from '../assets/jamm.jpeg';
import roadshow from '../assets/roadshow.jpeg';

const Workshop = () => {
  const cardsData = [
    { title: 'CAD & CATIA Workshop', image: roboticImage },
    { title: 'Artificial Intelligence and Machine Learning with Blockchain', image: iplImage },
    { title: 'Workshop on Electric Vehicles', image: treasureImage },
    { title: 'CV/Resume Building Workshop', image: sharkImage },
    { title: 'Electropath', image: mockImage },
    { title: 'Workshop on Verilog HDL', image: jaam },
    { title: 'Workshop on Business Analytics', image: roadshow },
  ];

  return (
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/workshops/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
  );
};

export default Workshop;