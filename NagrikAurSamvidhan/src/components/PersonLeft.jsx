import React from "react";
import "../css/PersonLeft.css";
import policeImage from "../assets/images/character2.png";

const PersonLeft = ({ onClick, message }) => {
  return (
    <div className="person-left" onClick={onClick}>
      <img src={policeImage} alt="Police Officer" className="police-image" />
      <div className="person-message">
        {message} {/* Display the current message passed from App.js */}
      </div>
    </div>
  );
};

export default PersonLeft;