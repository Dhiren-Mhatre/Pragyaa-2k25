import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';

import roboticImage from '../../assets/EventsImages/data.jpg';
import cad from '../../assets/EventsImages/cad.jpg';
import resume from '../../assets/EventsImages/resume.jpg';
import sur from '../../assets/EventsImages/sur.jpg';
import mockImage from '../../assets/EventsImages/py.jpg';

const Workshop = () => {
  const cardsData = [
    { title: 'Data Science', image: roboticImage },
    { title: 'CAD AND CATIA ', image: cad },
    { title: 'CV/Resume', image: resume },
    { title: 'Surveying ', image: sur },
    { title: 'Python for AIML', image: mockImage },
   
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