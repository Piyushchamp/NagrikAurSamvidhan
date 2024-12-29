import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonLeft from "../Components/PersonLeft";
import PersonRight from "../Components/PersonRight";

function Card1Learn() {
  const [messageIndex, setMessageIndex] = useState(0); // Single index to track conversation
  const [clickCount, setClickCount] = useState(0);

  const navigate = useNavigate();

  // Conversation messages
  const leftMessages = [
    "Hey, I was reading about the Indian Constitution, and I came across Article 14. Do you know what it's about?",
    "Does it apply to everyone, or just Indian citizens?",
    "Got it. So, what's the difference between “equality before law” and “equal protection of the laws”?",
  ];

  const rightMessages = [
    "Yeah! Article 14 guarantees equality before the law and equal protection of the laws. It's one of the most important fundamental rights.",
    "It applies to everyone—citizens and even non-citizens who are in India.",
    "Nice question! Let's read it on the page ahead!",
  ];

  const handleClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;

      if (newCount < 6) {
        // Increment message index for the next message
        setMessageIndex((prevIndex) => prevIndex + 1);
      } else if (newCount === 6) {
        // Navigate to the new page after 6 clicks
        console.log("Navigating to /new");
        navigate("/newpage");
      }

      return newCount;
    });
  };

  const handlePageClick = () => {
    setShowPersonLeft(false);
    setShowPersonRight(false);
  };

  return (
    <div className="App" onClick={handlePageClick}>
      {messageIndex % 2 === 0 ? (
        <PersonLeft
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          message={leftMessages[Math.floor(messageIndex / 2)]}
        />
      ) : (
        <PersonRight
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          message={rightMessages[Math.floor(messageIndex / 2)]}
        />
      )}
    </div>
  );
}

export default Card1Learn;
