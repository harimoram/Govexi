import React, { useEffect, useState } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    if (!isLargeScreen) return;

    const addHoverListeners = () => {
      const hoverTargets = document.querySelectorAll('button, a, .hover-target');

      hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', moveCursor);
    addHoverListeners();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, [isLargeScreen]);

  // Optional: track screen resize to update state if needed
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isLargeScreen) return null;

  return (
    <div className="custom-cursor-wrapper">
      <div
        className={`cursor-outer ${hovered ? 'hovered' : ''}`}
        style={{ left: position.x, top: position.y }}
      ></div>
      <div
        className="cursor-inner"
        style={{ left: position.x, top: position.y }}
      ></div>
    </div>
  );
};

export default Cursor;
