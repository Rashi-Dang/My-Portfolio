// components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Rashi Dang | All Rights Reserved</p>
      <div className="social-icons">
        <a href="https://github.com/Rashi-Dang" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/contactrashidang/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:rashidang07@example.com"><FaEnvelope /></a>
      </div>
    </footer>
  );
};

export default Footer;
