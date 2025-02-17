import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailWorkshop = () => {
  const { title } = useParams();
  const [workshop, setWorkshop] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshopDetails = async () => {
      try {
        const response = await fetch('/Workshops.json');
        if (!response.ok) {
          throw new Error('Failed to fetch workshop details');
        }
        const data = await response.json();

        const normalizedTitle = decodeURIComponent(title).toLowerCase().trim();
        const selectedWorkshop = data.find(
          (item) => item.Title.toLowerCase().trim() === normalizedTitle
        );

        if (!selectedWorkshop) {
          throw new Error('Workshop not found');
        }

        setWorkshop(selectedWorkshop);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWorkshopDetails();
  }, [title]);

  if (error) return <div className="error-message">{error}</div>;
  if (!workshop) return <div className="loading-message">Loading workshop details...</div>;

  return (
    <div className="detail-page">
      <div className="detail-content">
        <h1 className="detail-title">{workshop.Title}</h1>
        <div className="info-section">
          <h2>Description</h2>
          <p>{workshop.Description}</p>
        </div>
        <div className="info-section">
          <h2>Engineering Domains</h2>
          <p>{workshop['Engg Domains']}</p>
        </div>
        <div className="info-section">
          <h2>Venue</h2>
          <p>{workshop.Venue_Location}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailWorkshop;
