// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return show ? (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 bg-spotify-mid text-white p-3 rounded-circle shadow-spotify-heavy z-50 hover:bg-spotify-card transition text-xl font-bold"
    >
      ↑
    </button>
  ) : null;
};

export default ScrollToTop;