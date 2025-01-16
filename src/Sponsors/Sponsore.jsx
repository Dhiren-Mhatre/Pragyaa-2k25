import React from 'react';
import './Sponsors.css';
import spon_1 from './Spon-1.jpg'; 

const sponsors = [
  {
    name: 'Saahayog Sevabhavi Sanstha',
    logo: spon_1,
  },
  // {
  //   name: 'Sponsor Two',
  //   logo: spon_1,
  // },
  // {
  //   name: 'Sponsor Three',
  //   logo: spon_1, 
  // },
  // {
  //   name: 'Sponsor One',
  //   logo: spon_1,
  // },
  // {
  //   name: 'Sponsor Two',
  //   logo: spon_1,
  // },
  // {
  //   name: 'Sponsor Three',
  //   logo: spon_1,
  // },
];

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="heading">
      <h1 style={{ textDecoration: "underline" }}>Sponsors</h1>
      </div>
      <div className="sponsor-cards">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="sponsor-logo" />
            <h3 className="sponsor-name">{sponsor.name}</h3>
            <p className="sponsor-description">{sponsor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
