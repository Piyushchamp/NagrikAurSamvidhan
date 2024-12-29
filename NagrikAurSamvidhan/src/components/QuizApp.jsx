import React, { useState } from 'react';
import '../css/quiz.css';
import artimage from '../assets/images/article-1.jpg';


const articles = [
  {
    id: 1,
    title: 'Article 14 - Right to Equality',
    image: artimage,
    questions: [
      {
        question: "What does Article 14 provide?",
        options: [
          "Equality before law and equal protection of law",
          "Freedom of speech",
          "Protection against arrest",
          "Right to property"
        ],
        answer: "Equality before law and equal protection of law"
      },
      {
        question: "Article 14 is a part of which fundamental right?",
        options: [
          "Right to Equality",
          "Right to Freedom",
          "Right to Constitutional Remedies",
          "Cultural and Educational Rights"
        ],
        answer: "Right to Equality"
      }
    ]
  },
  {
    id: 2,
    title: 'Article 19 - Freedom of Speech',
    image: artimage,
    questions: [
      {
        question: "What is protected under Article 19?",
        options: [
          "Freedom of speech and expression",
          "Right to property",
          "Right to education",
          "Right to religion"
        ],
        answer: "Freedom of speech and expression"
      },
      {
        question: "Which of the following is NOT a freedom under Article 19?",
        options: [
          "Freedom of speech",
          "Freedom to form associations",
          "Freedom to migrate abroad",
          "Freedom to practice any profession"
        ],
        answer: "Freedom to migrate abroad"
      }
    ]
  },
  {
    id: 3,
    title: 'Article 21 - Right to Life',
    image: artimage,
    questions: [
      {
        question: "What is guaranteed under Article 21?",
        options: [
          "Right to education",
          "Right to life and personal liberty",
          "Right to equality",
          "Right to property"
        ],
        answer: "Right to life and personal liberty"
      },
      {
        question: "Article 21 is part of which fundamental right?",
        options: [
          "Right to Equality",
          "Right to Freedom",
          "Right to Life",
          "Cultural and Educational Rights"
        ],
        answer: "Right to Life"
      }
    ]
  },
  {
    id: 4,
    title: 'Article 32 - Right to Constitutional Remedies',
    image: artimage,
    questions: [
      {
        question: "Who can issue writs under Article 32?",
        options: [
          "President",
          "Parliament",
          "Supreme Court",
          "Prime Minister"
        ],
        answer: "Supreme Court"
      },
      {
        question: "Article 32 is known as the heart and soul of the Constitution. Who called it so?",
        options: [
          "Jawaharlal Nehru",
          "Dr. B.R. Ambedkar",
          "Mahatma Gandhi",
          "Sardar Vallabhbhai Patel"
        ],
        answer: "Dr. B.R. Ambedkar"
      }
    ]
  },
  {
    id: 5,
    title: 'Article 51A - Fundamental Duties',
    image: artimage,
    questions: [
      {
        question: "How many fundamental duties are there in Article 51A?",
        options: [
          "10",
          "11",
          "12",
          "9"
        ],
        answer: "11"
      },
      {
        question: "Which constitutional amendment added fundamental duties to the Indian Constitution?",
        options: [
          "42nd Amendment",
          "44th Amendment",
          "73rd Amendment",
          "86th Amendment"
        ],
        answer: "42nd Amendment"
      }
    ]
  }
];

const Quiz = ({ selectedArticle, markPassedQuiz, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === selectedArticle.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < selectedArticle.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  };

  const percentage = (score / selectedArticle.questions.length) * 100;

  const handleCompletion = () => {
    if (percentage >= 80) {
      markPassedQuiz(selectedArticle.id);  // Mark the quiz as passed
    }
    onComplete();  // Redirect to the starting page
  };

  return (
    <div className="quiz-container">
      {finished ? (
        <div>
          <h2>Your Score: {score}/{selectedArticle.questions.length}</h2>
          <h3>Percentage: {percentage}%</h3>
          {percentage >= 80 ? <p className="result pass">Congratulations! You passed the quiz!</p> : <p className="result fail">You did not pass the quiz.</p>}
          <button className="try-again" onClick={handleCompletion}>Go Back</button>
        </div>
      ) : (
        <div>
          <h2>{selectedArticle.title}</h2>
          <h3>{selectedArticle.questions[currentQuestion].question}</h3>
          <ul>
            {selectedArticle.questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

function QuizApp() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [passedQuizzes, setPassedQuizzes] = useState([]);

  const markPassedQuiz = (articleId) => {
    setPassedQuizzes((prevPassedQuizzes) => [...prevPassedQuizzes, articleId]);
  };

  const handleCompleteQuiz = () => {
    setSelectedArticle(null);  // Go back to the starting page
  };

  return (
    <div className="Quiz">
      <h1>Indian Constitution Quiz</h1>
      {selectedArticle ? (
        <Quiz
          selectedArticle={selectedArticle}
          markPassedQuiz={markPassedQuiz}
          onComplete={handleCompleteQuiz}
        />
      ) : (
        <div>
          <h2>Select an Article to Start the Quiz</h2>
          <div className="articles-grid">
            {articles.map(article => (
              <div className="card" key={article.id}>
                <img src={article.image} alt={article.title} />
                <h3>{article.title} {passedQuizzes.includes(article.id) && <span>✔️</span>}</h3>
                <button onClick={() => setSelectedArticle(article)} className='card-button'>Start Quiz</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
