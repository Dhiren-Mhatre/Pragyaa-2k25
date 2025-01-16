import React from "react";
import "./GuestBox.css"; // Import the CSS file

const events = [
    {
        title: "Spirit Of Survival",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToY59wx67cEEjiEYnIw3vEV4VRYFslj9k9Dw&s",
        description: "PRAGYAA 2025 - Spirit Of Survival",
    },
    {
        title: "Hunt Warrior",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToY59wx67cEEjiEYnIw3vEV4VRYFslj9k9Dw&s",
        description: "PRAGYAA 2025 - Hunt Warrior",
    },
    {
        title: "Duck & Dive Dodgeball",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToY59wx67cEEjiEYnIw3vEV4VRYFslj9k9Dw&s",
        description: "PRAGYAA 2025 - Duck & Dive Dodgeball",
    },
];

const GuestBox = () => {
    return (
        <div className="guestbox-container">
            <h1>Event Guests</h1>
            <p>Here are some of our speakers</p>
            <div className="guestbox-grid">
                {events.map((event, index) => (
                    <div className="guestbox-card" key={index}>
                        <h2 className="guestbox-title">{event.title}</h2>
                        <div className="guestbox-image-container">
                            <img
                                src={event.img}
                                alt={event.title}
                                className="guestbox-image"
                            />
                        </div>
                        <p className="guestbox-description">{event.description}</p>
                        <button className="guestbox-button">View More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuestBox;
