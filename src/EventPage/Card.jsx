
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardGrid.css'

const Card = ({ title, img }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${title}`);
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <button>
        <h3>{title}</h3>
        <img src={img} alt={title} style={{ width: '100%', height: 'auto' }} />
      </button>
    </div>
  );
};  

export default Card;
