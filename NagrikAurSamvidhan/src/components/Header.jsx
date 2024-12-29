import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../css/Header.css';
import logo from '../assets/images/logo.jpeg';
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  // const handleMmLogin = ()=>{

  // }

  return (
    <header>
      <nav>
        <div className="navbar-logo">
          <Link to='/landingpage'><img src={logo} alt="Logo" /></Link>
        </div>
        <ul>
          <li><Link to="/learningpage">Let's Learn</Link></li>
          <li><Link to="/playingpage">Play n Learn</Link></li>
          <li><Link to="/newsapp">News n Updates</Link></li>
          <li><Link to="/blog">Blogs</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {/* <li><Link to="/mmlogin">Login with MetaMask</Link></li> */}
          {/* <li className='bg-[#F78419] text-white px-4 py-2 rounded-md hover:bg-[#e06f17] transition duration-300'>
            <Link to='/mmlogin' > Login with MetaMask</Link>
          </li> */}
          <button className='bg-[#F78419] text-white px-4 py-2 ml-4 rounded-md hover:bg-[#e06f17] transition duration-300'> <Link to='/mmlogin' >Login with Metamask</Link> </button>
        </ul>
      </nav>
      {/* <button onClick={()=> {handleMmLogin}}>Login with Metamask</button> */}
    </header>
  );
}

export default Header;
