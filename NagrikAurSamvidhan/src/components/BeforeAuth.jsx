// import React from 'react'
// import { Link } from 'react-router-dom';


// function BeforeAuth() {
//     return (
//         <div>
//             <h1><strong> Demo Page </strong></h1>
//             <button className='bg-green-500'><Link to= '/landingpage'>click to Proceed</Link></button>
//         </div>
//     )
// }

// export default BeforeAuth


  import React from "react";
  import "../css/BeforeAuth.css";
  // import Logo from "./index";
  import {Link} from 'react-router-dom'

  const BeforeAuth = () => {
    return (
      <div className="landing-page">
        {/* Background Image */}
        <div className="background-image">
          {/* Center Content */}
          <div className="content-container">
            <div className="item-centre"> 
            {/* <Logo width="100%" /> */}
            <button className="lion-button" >
              <Link to='/landingpage'><span>Begin Your Journey</span></Link>
              
            </button>
            <p className="info-text">
              Discover your rights, duties, and the core values of the Indian Constitution through interactive and fun activities.
            </p>
            <p className="info-subtext">Empowering citizens, one article at a time.</p>
            </div>
            
          </div>
        </div>
      </div>
    );
  };

  export default BeforeAuth;