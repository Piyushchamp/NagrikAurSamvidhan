import React, { useState, useEffect } from 'react';
import PersonLeft from '../components/PersonLeft.js';
import PersonRight from '../components/PersonRight.js';
import CharacterPopup from '../Components/CharacterPopup.js';

function ArticleDetails() {
  const [showPersonLeft, setShowPersonLeft] = useState(true); 
  const [showPersonRight, setShowPersonRight] = useState(false); 

  const handleClick = () => {
    setShowPersonLeft(prev => !prev);
    setShowPersonRight(prev => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      {showPersonLeft && <PersonLeft />}
      {showPersonRight && <PersonRight />}

    </div>
  );
};


export default ArticleDetails;
