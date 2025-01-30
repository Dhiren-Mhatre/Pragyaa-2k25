import React from 'react';
import { Link } from 'react-router-dom';
import './CardGrid.css';
import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';

const Exhibition = () => {
  const cardsData = [
    { title: 'Junior Scientist', image: roboticImage },
    // { title: 'Project Exhibition', image: iplImage },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    Exhibition
        </h1>
     <div className='flex justify-center items-center'>
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
     </div>
    </>
  );
};

export default Exhibition;
