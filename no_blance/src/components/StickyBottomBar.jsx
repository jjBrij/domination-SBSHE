// src/components/StickyBottomBar.jsx
import React from 'react';

const StickyBottomBar = () => {
  const phoneNumber = "+919479719159";
  const formattedPhoneNumber = "9479719159";
  const handleCall = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return (
    <div className="sticky-bottom-bar fixed bottom-0 left-0 w-full bg-spotify-dark border-t border-spotify-border p-3 justify-around items-center z-40">
      <span className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-button">
        📞 Free Counselling
      </span>
      <button 
        onClick={handleCall}
        className="bg-spotify-green text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-spotify-green-dark transition flex items-center gap-2 uppercase tracking-button transform hover:scale-105 duration-200"
      >
        💬 Call Now: {formattedPhoneNumber}
      </button>
    </div>
  );
};

export default StickyBottomBar;