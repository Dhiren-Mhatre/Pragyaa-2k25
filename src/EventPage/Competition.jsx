import React from 'react';
import { Link } from 'react-router-dom';
import './CardGrid.css';
import BackButton from './BackButton';
import MegaQuiz from '../assets/Mega Quiz.jpeg';
import iplImage from '../assets/ipl.jpeg';
import treasureImage from '../assets/treasure.jpeg';
import sharkImage from '../assets/shark.jpeg';
import mockImage from '../assets/mock.png';
import jammImage from '../assets/jamm.jpeg';
import roadshowImage from '../assets/roadshow.jpeg';

const Competition = () => {
  const cardsData = [
    { title: 'Mega Quiz', image: MegaQuiz },
    { title: 'CAD War', image: iplImage },
    { title: 'Town Planning', image: treasureImage },
    { title: 'Bridge Building Competition', image: sharkImage },
    { title: 'Gear Based Puzzle', image: mockImage },
    { title: 'Chem Crafter Challenge', image: jammImage },
    { title: 'Quiz', image: roadshowImage },
    { title: 'Astro Quest', image: jammImage },
    { title: 'Chess Competition', image: roadshowImage },
    { title: 'Coding Competition', image: mockImage },
    { title: 'Tech Antakshari', image: jammImage },
    { title: 'Component Hunt', image: roadshowImage },
    { title: 'Meme Malware', image: jammImage },
    { title: 'Advertisement/Virtual Poster for Sponsors', image: roadshowImage },
  ];

  return (
    <div className="card-grid">
      <BackButton />
      {cardsData.map((card, index) => (
        <Link
          key={index}
          to={`/competitions/detail/${encodeURIComponent(card.title)}`}
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

export default Competition;
