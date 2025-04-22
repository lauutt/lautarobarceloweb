// src/components/Navbar.js
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Text, LanguageContext } from '../containers/Language';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const navItemsList = [
    'home',
    'news',
    'discography',
    'press',
    'bio'
  ];

  const handleLanguageChange = e => userLanguageChange(e.target.value);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {/* Botón hamburguesa */}
          <a 
            role="button" 
            className={`navbar-burger ${menuOpen ? 'is-active' : ''}`} 
            aria-label="menu" 
            aria-expanded="false" 
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
        <div id="navbarBasicExample" className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            {navItemsList.map((item) => (
              <Link key={item} to={`/${item}`} className="navbar-item">
                <Text tid={item} />
              </Link>
            ))}
          </div>
          
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="social-icons">
                <a href="https://www.instagram.com/lautarodelpasado/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="https://github.com/lauutt" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="https://www.linkedin.com/in/lautaro-barcel%C3%B3-04a68616/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://twitter.com/LautaroBarcelo" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://www.facebook.com/search/top?q=lautaro%20barcel%C3%B3" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </div>
            </div>
            
            <div className='navbar-item'>
              <div className="select is-primary">
                <select
                  onChange={handleLanguageChange}
                  value={userLanguage}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="jp">日本語</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}