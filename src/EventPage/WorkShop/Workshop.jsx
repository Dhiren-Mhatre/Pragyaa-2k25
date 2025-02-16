import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';

import roboticImage from '../../assets/robotic.jpeg';
import iplImage from '../../assets/ipl.jpeg';
import treasureImage from '../../assets/treasure.jpeg';
import sharkImage from '../../assets/shark.jpeg';
import mockImage from '../../assets/mock.png';

const Workshop = () => {
  const cardsData = [
    { title: 'Data Science', image: iplImage },
    { title: 'CAD AND CATIA ', image: mockImage },
    { title: 'CV/Resume', image: sharkImage },
    { title: 'Surveying ', image: roboticImage },
    { title: 'Python for AIML', image: treasureImage },
   
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
          Workshop
        </h1>
    <div className='flex justify-center items-center'>
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
    </div>
    </>
  );
};

export default Workshop;