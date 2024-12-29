import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Playing.css';


function Learningpage() {
  return (
    <div className="playing-container">
      <h1 className="playing-title">Welcome to Learning!</h1>
      <p className="playing-description">Choose a Article to start learning.</p>
      <div className="game-options">
        <Link to="/card1learn" className="game-card">
          <div className="game-card-content">
            <h3>Article 14</h3>
            <p>Right to Equality</p>
          </div>
        </Link>
        <Link to="/card1learn" className="game-card">
          <div className="game-card-content">
            <h3>Article 19</h3>
            <p>Freedom of Speech</p>
          </div>
        </Link>
        <Link to="/card1learn" className="game-card">
          <div className="game-card-content">
            <h3>Article 21</h3>
            <p>Right to Life</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Learningpage;
