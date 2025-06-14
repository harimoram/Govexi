import React from 'react';
import '../styles/Hero.css';
import HexButton from '../components/HexButton';
import HeroButton from '../components/HeroButton';
import Particle from '../components/Particles'; // Particle background
import Cursor from '../components/Cursor';

function Hero() {
  return (
    <section className="hero-section-centered">
      <Cursor />
      <div className="particle-background">
        <Particle />
      </div>
      
      <div className="hero-content-wrapper">
        <h1>
          All Your Digital Experiences, Mastered in{" "}
          <span className="gradient-text">One GOVEXI</span>
        </h1>
        <p>
          Govexi strategically engineers human-centered digital experiences that captivate users and deliver peak business performance.
        </p>

        {/* ✅ Pass text as children, not label */}
        <HeroButton onClick={() => console.log('Start Your Project clicked!')}>
          Start Your Project
        </HeroButton>
      </div>
    </section>
  );
}

export default Hero;
