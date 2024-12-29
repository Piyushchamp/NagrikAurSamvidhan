import React, { useState } from 'react';
import '../css/SnakeLadder.css';
import { questions } from '../data/questions';

const snakesAndLadders = {
  2: 23,  // Ladder
  4: 14,  // Ladder
  9: 31,  // Ladder
  20: 38, // Ladder
  17: 7,  // Snake
  19: 8,  // Snake
  24: 16, // Snake
  52: 29, // Snake
  64: 60, // Snake
  87: 24, // Snake
  93: 73, // Snake
  95: 75, // Snake
  98: 78, // Snake
};

const SnakeLadder = () => {
  const [playerPosition, setPlayerPosition] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isQuestionActive, setIsQuestionActive] = useState(false);
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [diceRoll, setDiceRoll] = useState(0);

  const rollDice = () => {
    const dice = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(dice);

    let newPosition = playerPosition + dice;
    if (newPosition > 100) {
      newPosition = 100; // Prevent going beyond 100
    }

    if (snakesAndLadders[newPosition]) {
      newPosition = snakesAndLadders[newPosition]; // Apply ladder or snake
    }

    setPlayerPosition(newPosition);

    const questionIndex = newPosition - 1; // Questions array is 0-based index
    const question = questions[questionIndex];

    if (question) {
      setCurrentQuestion(question);
      setIsQuestionActive(true);
    } else {
      setIsQuestionActive(false);
    }
  };

  const handleAnswerSubmit = () => {
    if (playerAnswer === currentQuestion.answer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
      setPlayerPosition((prevPosition) => Math.max(prevPosition - 1, 1)); // Move back one step, ensuring position doesn't go below 1
    }

    setIsQuestionActive(false);
    setPlayerAnswer('');
  };

  return (
    <div className="game-container">
      <h1>Snake and Ladder: Constitution of India</h1>
      <div className="game-layout">
        <div className="board">
          {[...Array(100)].map((_, index) => {
            const number = index + 1;
            const isSnake =
              Object.keys(snakesAndLadders).includes(number.toString()) &&
              snakesAndLadders[number] < number;
            const isLadder =
              Object.keys(snakesAndLadders).includes(number.toString()) &&
              snakesAndLadders[number] > number;

            return (
              <div
                key={index}
                className={`square ${playerPosition === number ? 'active' : ''} ${
                  isSnake ? 'snake-number' : isLadder ? 'ladder-number' : ''
                }`}
              >
                {number}
              </div>
            );
          })}
        </div>

        <div className="question-section">
          <h3>Current Position: {playerPosition}</h3>
          <h3>Dice Rolled: {diceRoll}</h3>
          <button onClick={rollDice} className="roll-button">
            Roll Dice
          </button>

          {isQuestionActive && currentQuestion && (
            <div className="question-box">
              <h3>Question: {currentQuestion.question}</h3>
              <ul>
                {currentQuestion.options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        onChange={(e) => setPlayerAnswer(e.target.value)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <button onClick={handleAnswerSubmit} className="submit-button">
                Submit Answer
              </button>
            </div>
          )}

          {isAnswerCorrect !== null && (
            <div className="result-box">
              {isAnswerCorrect ? (
                <p>Correct! You stay on the current position.</p>
              ) : (
                <p>Incorrect! You are moved one step back.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnakeLadder;
