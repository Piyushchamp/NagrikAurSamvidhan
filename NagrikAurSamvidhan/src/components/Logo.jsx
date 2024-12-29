import React from 'react'
import logo from '../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';


function Logo({ width = '100px' }) {
    return (
        <div className="navbar-logo">
          <Link to='/landingpage'><img src={logo} alt="Logo" /></Link>
        </div>
    )
}

export default Logo
