import React from "react";
import "./Team.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ name, position, image, instagram, linkedin, email }) => {
  return (
    <div className="profile-card hover:shadow-xl h-full  transform transition-shadow duration-300">
      <div className=" img">
        <img src={image} alt="Profile" className="w-full h-auto rounded-lg" />
      </div>
      <div className="caption text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500">{position}</p>
        <div className="social-links flex justify-center gap-4 ">
          <a href={`mailto:${email}`}><FaEnvelope className="email" /></a>
          <a href={linkedin}><FaLinkedin className="linkedin" /></a>
          <a href={instagram}><FaInstagram className="insta " /></a>
        </div>
      </div>
    </div>

  );
};

export default TeamCard;
