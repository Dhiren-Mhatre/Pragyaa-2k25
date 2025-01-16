import { useNavigate } from "react-router-dom";
import "./BackButton.css"; 

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-2)} 
      className="back-button" 
    >
      ← Go Back
    </button>
  );
};

export default BackButton;
