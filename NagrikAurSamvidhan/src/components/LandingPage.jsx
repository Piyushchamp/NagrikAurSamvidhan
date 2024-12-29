// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header";
// // import Footer from './Footer';
// import Newsapp from "./Newsapp";
// import Playingpage from "./Playing";
// import QuizApp from "./QuizApp";
// import Card1Learn from "./Card1Learn";
// import Learningpage from "./LearningPage";
// import NewPage from "./NewPage";
// import SnakeLadder from "./SnakeLadder";
// import Summarizer from "./Summarizer";
// import Home from "./Home";

// function LandingPage() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <>
//           <Home/>
//         </>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/news" element={<Newsapp />} />
//           <Route path="/play" element={<Playingpage />} />
//           <Route path="/quiz" element={<QuizApp />} />
//           <Route path="/learn" element={<Learningpage />} />
//           <Route path="/learn1" element={<Card1Learn />} />
//           <Route path="/new" element={<NewPage />} />
//           <Route path="/land" element={<landingPage />} />
//           <Route path="/snake" element={<SnakeLadder />} />
//           <Route path="/summarizer" element={<Summarizer />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default LandingPage;


import React from "react";


import userImage from "../assets/images/profile.png";

// import Footer from "./Footer";
import "../css/AboutSection.css";
import "../css/HeroSection.css";
import "../css/AboutPlatform.css";
import "../css/Header.css";
import '../css/Testimonials.css'
import "../css/Footer.css";
import hero from '../assets/images/hero.webp';
import about from '../assets/images/about.webp';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


function LandingPage() {
  const navigate = useNavigate();

  const handleRedirecttoplayingpage = () => {
    navigate('/playingpage');
  };
  const handleRedirecttolearningpage = () => {
    navigate('/learningpage');
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Nagrik Aur Samvidhan</h1>
          <p>Empowering Citizens through constitutional literacy.</p>
          <div className="hero-buttons">
            <button onClick={handleRedirecttoplayingpage}>Play n Learn</button>
            <button onClick={handleRedirecttolearningpage}>Let's Learn</button>
          </div>
        </div>
        <div class="highlight-box-hero">
          <img src={hero} alt="" />
        </div>

      </section>
      {/* <section className="about-platform">
        <h4>About platform</h4>
        <h2>Simplifying the Constitution</h2>
        <p>
          Nagrik Aur Samvidhan is a gamified platform that aims to make the
          language of the Indian Constitution accessible to all citizens.
          Through interactive lessons, quizzes, and discussions, we empower
          individuals to understand their rights and responsibilities.
        </p>
        <div class="features-section">
          <div class="features">
            <div class="feature-item">
              <h3>Play n Learn</h3>
              <p>
                Engage with interactive games and quizzes to understand
                constitutional concepts.
              </p>
            </div>
            <div class="feature-item">
              <h3>Let's Learn</h3>
              <p>
                Access simplified explanations and multimedia content to deepen
                your understanding.
              </p>
            </div>
            <div class="feature-item">
              <h3>Discussion Forum</h3>
              <p>
                Engage in discussions with fellow citizens and experts to
                explore constitutional topics.
              </p>
            </div>
          </div>
          <div class="highlight-box"></div>
        </div>
      </section> */}
      <section className="about-platform">
      <h4>About platform</h4>
      <h2>Simplifying the Constitution</h2>
      <p>
        Nagrik Aur Samvidhan is a gamified platform that aims to make the
        language of the Indian Constitution accessible to all citizens. Through
        interactive lessons, quizzes, and discussions, we empower individuals to
        understand their rights and responsibilities.
      </p>
      <div class="features-section">
        <div class="features">
          <div class="feature-item">
            <h3>Play n Learn</h3>
            <p>
              Engage with interactive games and quizzes to understand
              constitutional concepts.
            </p>
          </div>
          <div class="feature-item">
            <h3>Let's Learn</h3>
            <p>
              Access simplified explanations and multimedia content to deepen
              your understanding.
            </p>
          </div>
          <div class="feature-item">
            <h3>Discussion Forum</h3>
            <p>
              Engage in discussions with fellow citizens and experts to explore
              constitutional topics.
            </p>
          </div>
        </div>
        <div class="highlight-box">
        <img src={about} alt="" />
      </div>
      </div>
    </section>
      <section className="about-section">
        <div className="about-content">
          <button className="about-btn">About us</button>
          <h1>Empowering Citizens Through Constitutional Literacy</h1>
          <p className="section-content">
            Nagrik Aur Samvidhan is a non-profit initiative dedicated to
            spreading constitutional awareness and fostering an informed
            citizenry. Our team of legal experts and educators are committed to
            making the language of the Constitution accessible to all.
          </p>
        </div>
        <div className="cta-buttons">
          <button className="btn join-btn">Join the Discussion</button>
          <button className="btn contact-btn">Contact us</button>
        </div>
      </section>
      <section className="testimonials">
        <h4>Testimonials</h4>
        <h2>What Our Users Say</h2>
        <h3>Hear from the citizens who have benefited from our platform.</h3>
        <div className="testimonial-list">
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={userImage} alt="User" />
            </div>
            <div className="testimonial-info">
              <h4>Sushant Roy</h4>
              <p>
                "Nagrik Aur Samvidhan has been a game-changer for me. I now
                understand my rights and responsibilities as a citizen."
              </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={userImage} alt="User" />
            </div>
            <div className="testimonial-info">
              <h4>Surya Sekhar Prajapati</h4>
              <p>
                "The interactive lessons and quizzes on this platform have made
                learning about the Constitution fun and engaging."
              </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={userImage} alt="User" />
            </div>
            <div className="testimonial-info">
              <h4>Piyush Sharma</h4>
              <p>
                "Nagrik Aur Samvidhan has empowered me to understand and
                exercise my constitutional rights as a citizen."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;