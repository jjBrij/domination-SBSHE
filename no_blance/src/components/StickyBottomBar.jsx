
import React from 'react';

const StickyBottomBar = () => {
  return (
    <div className="sticky-bottom-bar fixed bottom-0 left-0 w-full bg-spotify-dark border-t border-spotify-border p-3 justify-around items-center z-40">
      <span className="text-white text-sm font-bold flex items-center gap-2 uppercase tracking-button">
        📞 Free Counselling
      </span>
      <button className="bg-spotify-green text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-spotify-green-dark transition flex items-center gap-2 uppercase tracking-button">
        💬 Call Now
      </button>
    </div>
  );
};

export default StickyBottomBar;