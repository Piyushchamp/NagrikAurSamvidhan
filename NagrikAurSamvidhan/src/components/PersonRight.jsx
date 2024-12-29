import React from "react";
import "../css/PersonRight.css";
import policeImage from "../assets/images/character.png";

const PersonRight = ({ onClick, message }) => {
  return (
    <div className="person-right" onClick={onClick}>
      <img src={policeImage} alt="Police Officer" className="police-image" />
      <div className="person-message1">
        {message} {/* Display the current message passed from App.js */}
      </div>
    </div>
  );
};

export default PersonRight;