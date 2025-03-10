<<<<<<< HEAD
import React from 'react';
import Card from './Card';
import roboticImage from '../assets/EventsImages/robot.jpg';
import esport from '../assets/EventsImages/e-sports.jpg';
import others from '../assets/EventsImages/others.png';
import { Link } from 'react-router-dom';

const CardGrid = () => {
  const cardsData = [
    { title: 'robotics', image: roboticImage },
    { title: 'e-sport', image: esport },
    { title: 'others', image: others },

  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    title-event
        </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/title-event/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

=======
import React from 'react';
import Card from './Card';
import roboticImage from '../assets/robotic.jpeg';
import iplImage from '../assets/ipl.jpeg';
import { Link } from 'react-router-dom';

const CardGrid = () => {
  const cardsData = [
    { title: 'robotics', image: roboticImage },
    { title: 'e-sport', image: iplImage },
    

  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    title-event
        </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/title-event/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

>>>>>>> upstream/master
export default CardGrid;