import React from 'react';
import '../styles/HeroButton.css';

const HeroButton = ({ children = "Let's Talk", onClick }) => {
  return (
    <button className="hero-glow-button" onClick={onClick}>
      <span className="hero-button-text">{children}</span>
    </button>
  );
};

export default HeroButton;
