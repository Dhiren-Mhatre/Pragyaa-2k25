<<<<<<< HEAD
import React from 'react';
import Card from '../Card';
import BGMI from '../../assets/EventsImages/BGMI.webp';
import freefire from '../../assets/EventsImages/Free Fire.jpg';
import COD from '../../assets/EventsImages/COD.jpg';
import VALO from '../../assets/EventsImages/VALORANT.jpg';

import { Link } from 'react-router-dom';
import '../DetailPage.css';

const Esport = () => {
  const cardsData = [
    { title: 'Free Fire', image: freefire },
    { title: 'BGMI', image: BGMI },
    { title: 'COD', image: COD },
    { title: 'VALORANT', image: VALO }
  ];

  return (
    <>
      <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
        E-sport
      </h1>
      <div className='flex items-center justify-center'>
        <div className="card-grid">
          {cardsData.map((card) => (
            <Link 
              key={card.title} 
              to={`/events/title-event/e-sport/${encodeURIComponent(card.title)}`}
            >
              <Card title={card.title.replace('_', ' ')} img={card.image} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Esport;
=======
import React from 'react';
import Card from '../Card';
import roboticImage from '../../assets/robotic.jpeg';
import iplImage from '../../assets/ipl.jpeg';
import { Link } from 'react-router-dom';

const Esport= () => {
  const cardsData = [
    { title: 'free-fire', image: roboticImage },
    { title: 'bgmi', image: iplImage },
    { title: 'cod', image: iplImage },
    { title: 'valorant', image: iplImage },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    E-sport
        </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/title-event/e-sport/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Esport;
>>>>>>> upstream/master
