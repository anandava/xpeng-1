import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Models</h4>
          <ul>
            <li><a href="#">X9</a></li>
            <li><a href="#">G9</a></li>
            <li><a href="#">G6</a></li>
            <li><a href="#">P7</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Discover</h4>
          <ul>
            <li><a href="#">About XPENG</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">ESG Report</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Service</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">User Manual</a></li>
            <li><a href="#">XPENG App</a></li>
            <li><a href="#">Repair Manual</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Find Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Cookie Policy</a>
        </div>
        <div className="footer-social">
          <a href="#"><span className="material-symbols-outlined">language</span></a>
          <a href="#"><span className="material-symbols-outlined">work</span></a>
          <a href="#"><span className="material-symbols-outlined">photo_camera</span></a>
          <a href="#"><span className="material-symbols-outlined">thumb_up</span></a>
          <a href="#"><span className="material-symbols-outlined">smart_display</span></a>
          <a href="#"><span className="material-symbols-outlined">music_note</span></a>
        </div>
      </div>

      <div className="footer-legal">
        <p>COPYRIGHT@XPENG INC.</p>
      </div>
    </footer>
  );
};

export default Footer;
