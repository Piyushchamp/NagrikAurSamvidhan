// import React from "react";
// import userImage from "../assets/images/profile.png";
// import Footer from "./Footer";
// import "../css/AboutSection.css";
// import "../css/HeroSection.css";
// import "../css/AboutPlatform.css";
// import "../css/Header.css";
// import '../css/Testimonials.css'
// import "../css/Footer.css";


// function Home() {
//   return (
//     <>
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Nagrik Aur Samvidhan</h1>
//           <p>Empowering Citizens through constitutional literacy.</p>
//           <div className="hero-buttons">
//             <button>Play n Learn</button>
//             <button>Let's Learn</button>
//           </div>
//         </div>
//         <div class="highlight-box"></div>
//       </section>
//       <section className="about-platform">
//         <h4>About platform</h4>
//         <h2>Simplifying the Constitution</h2>
//         <p>
//           Nagrik Aur Samvidhan is a gamified platform that aims to make the
//           language of the Indian Constitution accessible to all citizens.
//           Through interactive lessons, quizzes, and discussions, we empower
//           individuals to understand their rights and responsibilities.
//         </p>
//         <div class="features-section">
//           <div class="features">
//             <div class="feature-item">
//               <h3>Play n Learn</h3>
//               <p>
//                 Engage with interactive games and quizzes to understand
//                 constitutional concepts.
//               </p>
//             </div>
//             <div class="feature-item">
//               <h3>Let's Learn</h3>
//               <p>
//                 Access simplified explanations and multimedia content to deepen
//                 your understanding.
//               </p>
//             </div>
//             <div class="feature-item">
//               <h3>Discussion Forum</h3>
//               <p>
//                 Engage in discussions with fellow citizens and experts to
//                 explore constitutional topics.
//               </p>
//             </div>
//           </div>
//           <div class="highlight-box"></div>
//         </div>
//       </section>
//       <section className="about-section">
//         <div className="about-content">
//           <button className="about-btn">About us</button>
//           <h1>Empowering Citizens Through Constitutional Literacy</h1>
//           <p className="section-content">
//             Nagrik Aur Samvidhan is a non-profit initiative dedicated to
//             spreading constitutional awareness and fostering an informed
//             citizenry. Our team of legal experts and educators are committed to
//             making the language of the Constitution accessible to all.
//           </p>
//         </div>
//         <div className="cta-buttons">
//           <button className="btn join-btn">Join the Discussion</button>
//           <button className="btn contact-btn">Contact us</button>
//         </div>
//       </section>
//       <section className="testimonials">
//         <h4>Testimonials</h4>
//         <h2>What Our Users Say</h2>
//         <h3>Hear from the citizens who have benefited from our platform.</h3>
//         <div className="testimonial-list">
//           <div className="testimonial">
//             <div className="testimonial-image">
//               <img src={userImage} alt="User" />
//             </div>
//             <div className="testimonial-info">
//               <h4>Sushant Roy</h4>
//               <p>
//                 "Nagrik Aur Samvidhan has been a game-changer for me. I now
//                 understand my rights and responsibilities as a citizen."
//               </p>
//             </div>
//           </div>
//           <div className="testimonial">
//             <div className="testimonial-image">
//               <img src={userImage} alt="User" />
//             </div>
//             <div className="testimonial-info">
//               <h4>Surya Sekhar Prajapati</h4>
//               <p>
//                 "The interactive lessons and quizzes on this platform have made
//                 learning about the Constitution fun and engaging."
//               </p>
//             </div>
//           </div>
//           <div className="testimonial">
//             <div className="testimonial-image">
//               <img src={userImage} alt="User" />
//             </div>
//             <div className="testimonial-info">
//               <h4>Piyush Sharma</h4>
//               <p>
//                 "Nagrik Aur Samvidhan has empowered me to understand and
//                 exercise my constitutional rights as a citizen."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <Footer/> */}
//       <footer>
//         <div className="footer-container">
//           <div className="footer-left">
//             <p>© 2024 Nagrik Aur Samvidhan. All rights reserved.</p>
//           </div>
//           <div className="footer-right">
//             <a href="/terms-of-service">Terms of Service</a>
//             <a href="/privacy-policy">Privacy Policy</a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Home;


/// ************************************ Working MM *****************************

import { useState } from "react";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";


function Home() {
  const [isConnected, setIsConnected] = useState(false);

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const navigate = useNavigate()
  return (
    <div className="metamasklogin">
      {!isConnected ? (
        <div
          className="app-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h1 style={{ marginBottom: "20px", color: "#333" }}>
            Login with MetaMask for a Seamless Web3 Experience
          </h1>
          <button
            className="app-button__login"
            onClick={onConnect}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      ) : (
        navigate('/landingpage')
        
      )}
    </div>
  );
}

export default Home;




