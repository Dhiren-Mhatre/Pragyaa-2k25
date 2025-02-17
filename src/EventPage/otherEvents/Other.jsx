import React from 'react';
import Card from '../Card';
import math from '../../assets/EventsImages/Mathmagic.jpg';
import chess from '../../assets/EventsImages/Chess programmer.jpg';
import Austro from '../../assets/EventsImages/Astro quest.jpg';
import codeclash from '../../assets/EventsImages/Code Clash.jpg';
import mock from '../../assets/EventsImages/Mock placement.jpg';
import data from '../../assets/EventsImages/Astro quest.jpg';
import datascience from '../../assets/EventsImages/data.jpg';
import astro from '../../assets/EventsImages/Astro quest.jpg';
import ipl from '../../assets/EventsImages/ipl auction.jpg';
import { Link } from 'react-router-dom';
import '../DetailPage.css';

const Other = () => {
  const cardsData = [
    { title: 'Math e Magic', image: math },
    { title: 'Chess Competition', image: chess },
    { title: 'Astro Quest', image: Austro },
    { title: "Codeclash", image: codeclash },
    { title: "Mock Placement", image: mock },
    { title: 'Data Science', image: datascience },
    { title: 'Astro Quest', image: astro },
    { title: "IPL Auction", image: ipl }
  ];

  return (
    <>
      <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
        Pragyaa Events
      </h1>
      <div className='flex items-center justify-center'>
        <div className="card-grid">
          {cardsData.map((card) => (
            <Link
              key={card.title}
              to={`/events/title-event/others/${encodeURIComponent(card.title)}`}
            >
              <Card title={card.title.replace('_', ' ')} img={card.image} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Other;
