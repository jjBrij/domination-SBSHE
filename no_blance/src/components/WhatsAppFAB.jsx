// src/components/WhatsAppFAB.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFAB = () => {
  return (
    <a 
      href="https://wa.me/919479719159" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-spotify-green text-black p-4 rounded-circle shadow-spotify-heavy pulse-spotify flex items-center justify-center hover:bg-spotify-green-dark transition"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppFAB;