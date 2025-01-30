
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardGrid.css'

const Card = ({ title, img }) => {


  return (
    <div>
      <div className="card" style={{ cursor: 'pointer' }}>
      <button>
        <h3>{title}</h3>
        <img src={img} alt={title} style={{ width: '100%', height: 'auto',margin:'0.5rem' }} />
      </button>
    </div>
    </div>
  );
};  

export default Card;
