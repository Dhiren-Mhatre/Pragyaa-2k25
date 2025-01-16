import React, { useState } from "react";
import "./SchedulePage.css";
import Squares from '../Background/Squares';
import SplashCursor from '../Curser/SplashCursor';

const SchedulePage = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { id: 1, date: "Feb 21, 2025" },
    { id: 2, date: "Feb 22, 2025" },
    { id: 3, date: "Feb 23, 2025" },
  ];

  const eventSchedules = {
    1: [
      { id: 1, name: "Opening/Inauguration Event", organizer: "Team Progov", timing: "09:00am - 09:30am", fees: "NA" },
      { id: 2, name: "Scholify Program", organizer: "BookTrix", timing: "10:00am - 12:00pm", fees: "NA" },
      { id: 3, name: "Junior Scientist", organizer: "Progov Events Committee", timing: "11:00am - 01:00pm", fees: "NA" },
      { id: 4, name: "AudifyX Program", organizer: "Societies and Progov Events Committee", timing: "02:00pm - 04:00pm", fees: "NA" },
      { id: 5, name: "KreativeKey Program - C++ Data Structure", organizer: "C++ & Progov Events Committee", timing: "04:30pm - 06:30pm", fees: "300/-" },
      { id: 6, name: "KreativeKey Program - Android App Development", organizer: "C++ & Progov Events Committee", timing: "06:30pm - 08:30pm", fees: "300/-" },
    ],
    2: [
      { id: 1, name: "AI Conference", organizer: "TechConnect", timing: "10:00am - 12:00pm", fees: "500/-" },
      { id: 2, name: "Blockchain Workshop", organizer: "Blockchainers", timing: "01:00pm - 03:00pm", fees: "700/-" },
      { id: 3, name: "Startup Pitching", organizer: "StartupHub", timing: "04:00pm - 06:00pm", fees: "Free" },
    ],
    3: [
      { id: 1, name: "Cloud Computing Bootcamp", organizer: "CloudTech", timing: "09:00am - 12:00pm", fees: "1000/-" },
      { id: 2, name: "Cybersecurity Panel", organizer: "InfoSec Community", timing: "01:00pm - 03:00pm", fees: "Free" },
    ],
    
  };

  const handleDayClick = (dayId) => {
    setActiveDay(dayId);
  };

  return (
    <>
    <SplashCursor/>
    <Squares
        speed={0.5}
        squareSize={70}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#ff0000'
        hoverFillColor='#ff0000'
      />
    <div className="schedule-page">
      <h1 className="schedule-title">Events Schedule</h1>
      <p className="schedule-description">
        Experience the conference wherever you are. Register now for online access. Tune in live for the keynotes and watch sessions on demand.
      </p>
      <div className="schedule-tabs">
        {days.map((day) => (
          <button
            key={day.id}
            className={`tab-button ${activeDay === day.id ? "active" : ""}`}
            onClick={() => handleDayClick(day.id)}
          >
            Day {day.id} <br /> {day.date}
          </button>
        ))}
      </div>
      <div className="schedule-table">
        <h2>{days.find((day) => day.id === activeDay)?.date}</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Events</th>
              <th>Organized By</th>
              <th>Timing</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {eventSchedules[activeDay].map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.organizer}</td>
                <td>{event.timing}</td>
                <td>{event.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default SchedulePage;
