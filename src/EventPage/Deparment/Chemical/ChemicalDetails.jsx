import React from 'react';
import { useParams } from 'react-router-dom';
import '../../DetailPage.css';

const ChemicalDetails = () => {
  const { title } = useParams();
  
  // Direct data array
  const data = [
    {
      "Title": "Chemical Crafter",
      "Description": "The Chem Crafter Challenge is an event designed to test participants problemsolving abilities in chemistry and designing skills.",
      "Prize_Pool": "5000",
      "Venue_Location": "CH1/CH2"
    }
  ];

  const record = data.find((item) => item.Title === title);

  if (!record) {
    return <h2 className="not-found">Record not found!</h2>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{record.Title}</h1>
      <p className="detail-description">{record.Description}</p>

      {record.How_It_Works && (
        <div className="detail-section">
          <h3 className="section-title">How It Works:</h3>
          <p className="section-text">{record.How_It_Works}</p> {/* Display "How It Works" section if available */}
        </div>
      )}

      <p className="venue"><strong>Venue:</strong> {record.Venue_Location}</p> {/* Display venue information */}
      <p className="prize-pool"><strong>Prize Pool:</strong> {record.Prize_Pool}</p> {/* Display prize pool information */}
    </div>
  );
};

export default ChemicalDetails;
