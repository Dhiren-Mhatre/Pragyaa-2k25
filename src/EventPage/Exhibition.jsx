import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';

const Exhibition = () => {
  const cardsData = [
    { title: 'Junior Scientist', image: roboticImage },
    { title: 'Project Exhibition', image: iplImage },
  ];

  return (
    <div className="card-grid">
      {/* <BackButton /> */}
      {cardsData.map((card, index) => (
        <Link
          key={index}
          to={`/events/exhibitions/${card.title}`}
        >
          <div className="card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Exhibition;
