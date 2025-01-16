import React from 'react';
import { Link } from 'react-router-dom';
import './CardGrid.css';
import BackButton from './BackButton';
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
      <BackButton />
      {cardsData.map((card, index) => (
        <Link
          key={index}
          to={`/fungames/detail/${encodeURIComponent(card.title)}`}
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

export default Fungame;
