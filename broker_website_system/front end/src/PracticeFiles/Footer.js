import React from 'react';
import './Footer.css'; // Your CSS file for additional styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>A brief description of your brokerage firm and its mission. Highlight what sets your company apart.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Address: 123 Broker St, City, Country</p>
          <p>Email: contact@brokerwebsite.com</p>
          <p>Phone: +1 234-567-8901</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Broker Website System. All Rights Reserved.</p>
        {/* Social media icons or links */}
        <div className="social-icons">
          <a href="#facebook"><i className="fab fa-facebook"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
