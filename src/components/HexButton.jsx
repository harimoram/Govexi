import React from 'react';
import '../styles/HexButton.css';

const HexButton = ({ onClick, className = '', children, href }) => {
  return (
    <a href={href || '#'} className={`hex-button ${className}`} onClick={onClick}>
      <span className="hex-shape"></span>
      <span className="button-text">{children}</span>
    </a>
  );
};

export default HexButton;
