import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Playing.css';

const handleTitleClick = () => {
  window.location.href = 'https://www.example.com';  
};


function Playingpage() {
  return (
    <div className="playing-container">
      <h1 className="playing-title">Welcome to Play n Learn!</h1>
      <p className="playing-description">Choose a game to start playing and learning.</p>
      <div className="game-options">
        <Link to="/quizapp" className="game-card">
          <div className="game-card-content">
            <h3>Quiz</h3>
            <p>Test your knowledge with a quiz on the Indian Constitution!</p>
          </div>
        </Link>
        <Link to="/snakeladder" className="game-card">
          <div className="game-card-content">
            <h3>Snake & Ladder</h3>
            <p>Climb the ladder and dodge the snake to win exciting rewards!</p>
          </div>
        </Link>
        <Link to="/cards" className="game-card">
          <div className="game-card-content">
            <h3>Cards</h3>
            <p>Match the cards and improve your memory while learning.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Playingpage;
