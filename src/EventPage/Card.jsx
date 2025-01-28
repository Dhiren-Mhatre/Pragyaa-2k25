
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './CardGrid.css'
import './Card.css'
// import './EventPage.css'

const Card = ({ title, img }) => {


  return (
    <div className="card" style={{ cursor: 'pointer' }}>
      <button>
      <h3 style={{ color: 'white' }}>{title}</h3>
      <img src={img} alt={title} style={{ width: '100%', height: 'auto' }} />
      </button>
    </div>
    );
};  

export default Card;
