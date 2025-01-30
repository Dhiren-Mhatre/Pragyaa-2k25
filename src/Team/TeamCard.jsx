import React from "react";
import "./Team.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ name, position, image, instagram, linkedin, email }) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="caption">
        <h5>{name}</h5>
        <p>{position}</p>
    
      </div>
    </div>
    
  );
};

export default TeamCard;