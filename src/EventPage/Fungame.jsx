import React from 'react';
import { Link } from 'react-router-dom';
import './CardGrid.css';
import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';

const Fungame = () => {
  const cardsData = [
    { title: 'BGMI', image: roboticImage },
    { title: 'free fire', image: iplImage },
    { title: 'volerant', image: roboticImage },
    { title: 'c.o.d', image: iplImage },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
          E-sports
        </h1>
    <div className='flex justify-around items-center'>
    <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link
          key={index}
          to={`/events/fungames/${card.title}`}
        >
          <div className="card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
          </div>
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Fungame;
