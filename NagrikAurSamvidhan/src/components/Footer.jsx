import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer>
  <div className="footer-container">
    <div className="footer-left">
      <p>© 2024 Nagrik Aur Samvidhan. All rights reserved.</p>
    </div>
    <div className="footer-right">
      <a href="/terms-of-service">Terms of Service</a>
      <a href="/privacy-policy">Privacy Policy</a>
    </div>
  </div>
</footer>

  );
}

export default Footer;
