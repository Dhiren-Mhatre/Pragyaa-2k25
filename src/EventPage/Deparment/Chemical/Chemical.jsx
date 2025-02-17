<<<<<<< HEAD
import React from 'react';
import Card from '../../Card';
import roboticImage from '../../../assets/EventsImages/chemical.jpg';
// import iplImage from '../../../assets/ipl.jpeg';
import { Link } from 'react-router-dom';

const Chemical = () => {
  const cardsData = [
    { title: 'Chemical Crafter', image: roboticImage },
  ];

  return (
    <>
      <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
        Chemical
      </h1>
      <div className='flex items-center justify-center'>
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <Link
              key={card.title}
              to={`/events/deparmental-events/chemical/${card.title}`}
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
import Card from '../../Card';
import roboticImage from '../../../assets/robotic.jpeg';
import iplImage from '../../../assets/ipl.jpeg';
import { Link } from 'react-router-dom';

const Chemical = () => {
  const cardsData = [
    { title: 'Robotics', image: roboticImage },
    { title: 'E-sport', image: iplImage },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    robotics
        </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/deparmental-events/chemical/${card.title}`}
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
export default Chemical;