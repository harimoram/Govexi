import React from "react";
import "../styles/FooterSection.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import HexButton from "../components/HexButton.jsx";

const FooterSection = () => {
  return (
    <section className="contact-footer-wrapper">
      <div className="svg-gradient-bg">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="url(#contactGradient)"
            d="M0,160L80,186.7C160,213,320,267,480,261.3C640,256,800,192,960,154.7C1120,117,1280,107,1360,101.3L1440,96V0H0Z"
          />
          <defs>
            <linearGradient id="contactGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#18BC9C" />
              <stop offset="100%" stopColor="#2C3E50" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="contact-section">
        <h2 className="contact-heading">Start Something Remarkable.</h2>

        <p className="contact-subtext">
          Let's connect. Whether you're dreaming big or need a fresh spark — we’re here to co-create the next big thing.
        </p>

        <div className="contact-top-row">
          <HexButton className="footer-hex">Let's Connect</HexButton>
          <p className="contact-email">
            <a href="mailto:contact@youragency.com">hello@govexi.com</a>
          </p>
        </div>

        <div className="contact-social-row">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Crafted by Govexi. Built with passion and pixels.</p>
      </footer>
    </section>
  );
};

export default FooterSection;
