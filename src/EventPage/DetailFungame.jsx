import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

const DetailFungame = () => {
  const { title } = useParams();
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch('/FunGames.json'); // Fetch from public folder
        if (!response.ok) {
          throw new Error('Failed to fetch records');
        }
        const data = await response.json();

        // Decode and normalize the title for case-insensitive matching
        const normalizedTitle = decodeURIComponent(title).toLowerCase().trim();
        const foundRecord = data.find(
          (item) => item.Title.toLowerCase().trim() === normalizedTitle
        );

        if (!foundRecord) {
          throw new Error('Record not found');
        }
        setRecord(foundRecord);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDetails();
  }, [title]);

  if (error) {
    return <h2 className="not-found">{error}</h2>;
  }

  if (!record) {
    return <h2 className="not-found">Loading...</h2>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{record.Title}</h1>
      <p className="detail-description">{record.Description}</p>
      <p className="venue"><strong>Venue:</strong> {record.Venue_Location}</p>
    </div>
  );
};

export default DetailFungame;
