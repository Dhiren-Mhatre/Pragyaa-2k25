import React from 'react';
import Card from '../../Card';
import roboticImage from '../../../assets/EventsImages/Style.jpg';
import iplImage from '../../../assets/EventsImages/text.jpg';
import { Link } from 'react-router-dom';

const Textile= () => {
  const cardsData = [
    { title: 'Style your partner', image: roboticImage },
    { title: 'Tex Quiz ', image: iplImage },
    // { title: 'Tex Quiz ', image: iplImage },
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
          to={`/events/title-event/robotics/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Textile;