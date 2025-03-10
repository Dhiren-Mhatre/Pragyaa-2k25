<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../DetailPage.css';

const TextileDetails = () => {
 const { title } = useParams();  // Extracts the 'title' parameter from the URL
 const [record, setRecord] = useState(null);  // State to store the fetched record
 const [loading, setLoading] = useState(true);  // State to handle loading
 const [error, setError] = useState(null);  // State to handle errors

 useEffect(() => {
   const fetchRoboticsData = async () => {
     try {
       setLoading(true);
       setError(null);
       
       const response = await fetch('/TESA.json');  // Fetches data from the JSON file
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       
       const data = await response.json();  // Parses the JSON response
       const foundRecord = data.find((item) => 
         item.Title.toLowerCase() === title.toLowerCase()  // Finds the record matching the title
       );
       
       if (!foundRecord) {
         throw new Error('Event not found');
       }
       
       setRecord(foundRecord);  // Sets the found record to state
     } catch (err) {
       setError(err.message);  // Sets the error message to state
     } finally {
       setLoading(false);  // Sets loading to false
     }
   };

   fetchRoboticsData();
 }, [title]);

 if (loading) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <div className="text-white text-xl">Loading...</div>
     </div>
   );
 }

 if (error) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <div className="text-red-500 text-xl">Error: {error}</div>
     </div>
   );
 }

 if (!record) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <h2 className="text-white text-xl">Event not found!</h2>
     </div>
   );
 }

 return (
   <div className="detail-container">
     <h1 className="detail-title">{record.Title}</h1>
     <p className="detail-description">{record.Description}</p>
     {record.How_It_Works && (
       <div className="detail-section">
         <h2 className="section-title">{record.Prize_Pool}</h2>
         <p className="section-text">{record.Venue_Location}</p>
       </div>
     )}
     <p className="venue">
       <strong>Venue:</strong> {record.Venue_Location}
     </p>
   </div>
 );
};

export default TextileDetails;
=======
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../DetailPage.css';

const TextileDetails = () => {
  const { title } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    fetch('/Records.json')  // Ensure correct path to JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch records');
        }
        return response.json();
      })
      .then((data) => {
        const foundRecord = data.find((item) => item.Title === title);
        setRecord(foundRecord);
      })
      .catch((error) => console.error('Error loading records:', error));
  }, [title]);

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
          <p className="section-text">{record.How_It_Works}</p>  {/* Line breaks preserved */}
        </div>
      )}

      <p className="venue"><strong>Venue:</strong> {record.Venue_Location}</p>
    </div>
  );
};

export default TextileDetails ;
>>>>>>> upstream/master
