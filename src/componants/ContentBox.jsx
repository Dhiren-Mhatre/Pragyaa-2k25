import React from 'react';
import Clock from './Clock';
import pragyan from '../assets/pragyan.png';
import './Contentbox.css';

const ContentBox = () => {
  return (
    <div className="content-box">
      <div className="content-center">
        <h1>
          <img src={pragyan} alt="Pragyan Logo" />
        </h1>
        <p className="tagline">"BRIGHTER THAN EVER BEFORE"</p>
        <br></br>
        <div className="date-details">
          <span className="date-numbers">
            21<b>TH</b> 22<b>TH</b> 23<b>TH</b>
          </span>
          <span className="date-year">
            2025 February
          </span>
        </div>
        <Clock />
      </div>
    </div>
  );
};

export default ContentBox;
