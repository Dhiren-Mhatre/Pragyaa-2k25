import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';

const Fungame = () => {
  const cardsData = [
    { title: 'BGMI COD', image: roboticImage },
    { title: 'Mini Militia', image: iplImage },
    { title: 'Smash Carts', image: roboticImage },
    { title: 'Fete Games', image: iplImage },
    { title: 'Darts', image: iplImage },
  ];

  return (
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link
          key={index}
          to={`/events/fungames/${card.title}`}
        >
          <div className="card">
            <h2>{card.title}</h2>
            <img src={card.image} alt={card.title} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Fungame;
