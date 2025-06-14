import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';
import logo from '../assets/Logo.png';
import HexButton from './HexButton';
import ShinyText from './ShinyText';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = ['Home','Work', 'About', 'Services', 'Blog'];

const menuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: '100vh',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

const linkItemVariants = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.35 } },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown || currentScrollPos <= 0); // Show on scroll up or at the top
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <motion.nav
        className={`navbar ${!visible && 'navbar-hidden'}`}
        style={{
          position: 'fixed', // Ensure it stays at the top
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10, // Ensure it's above other content
        }}
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : '-100%' }} // Slide up/down
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>

        <div className="navbar-center desktop-links">
          {navLinks.map((link) => (
            <motion.a
              href={`#${link.toLowerCase()}`}
              key={link}
              className="nav-link"
              whileHover={{ scale: 1 }}
            >
              <ShinyText text={link} disabled={false} speed={3} />
            </motion.a>
          ))}
        </div>

        <div className="navbar-center tablet-button">
          <HexButton>Let's Talk</HexButton>
        </div>

        <div className="navbar-right">
          <div className="desktop-contact">
            <HexButton>Let's Talk</HexButton>
          </div>
          {!menuOpen && (
            <div
              className="mobile-icon-container"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') setMenuOpen(true);
              }}
            >
              <FiMenu size={28} className="menu-svg-icon" />
            </div>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="mobile-icon-container close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') setMenuOpen(false);
              }}
            >
              <FiX size={32} />
            </div>

            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="mobile-nav-link"
                variants={linkItemVariants}
                onClick={() => setMenuOpen(false)}
              >
                <ShinyText text={link} disabled={false} speed={2.5} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}