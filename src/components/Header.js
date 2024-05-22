import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/Header.css';
import profileImage from '../assets/images/profile.jpeg'; // Assurez-vous que le chemin est correct

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profil" className="profile-image" />
        </div>
        <h1 className="header-title"><a href="/">Sophian ABANI</a></h1>
        <h2 className="header-subtitle">Étudiant développeur web fullstack</h2>
        <p className="header-description">THE CODE IS LAW</p>
        <nav className="nav" aria-label="In-page jump links">
          <ul>
            <li><a className="nav-link" href="#about"><span className="nav-indicator"></span><span className="nav-text">À propos</span></a></li>
            <li><a className="nav-link" href="#experience"><span className="nav-indicator"></span><span className="nav-text">Projets</span></a></li>
            <li><a className="nav-link" href="#projects"><span className="nav-indicator"></span><span className="nav-text">Contact</span></a></li>
          </ul>
        </nav>
        <div className="socials">
          <a href="https://github.com/yourusername" className="social-link" aria-label="GitHub">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="social-link" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
