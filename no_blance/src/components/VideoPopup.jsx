// src/components/VideoPopup.jsx
import React, { useState, useEffect } from 'react';
import { FaTimes, FaPlay, FaPause } from 'react-icons/fa';

const introVideo = require('../assets/images/gallery/intro-video.mp4');

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('VideoPopup: Timer triggered - opening popup');
      if (!hasBeenOpened) {
        setIsOpen(true);
        setHasBeenOpened(true);
      }
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [hasBeenOpened]);

  const closePopup = () => {
    console.log('VideoPopup: Closing popup');
    setIsOpen(false);
    const video = document.querySelector('.popup-video');
    if (video) {
      video.pause();
    }
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  };

  const togglePlay = () => {
    const video = document.querySelector('.popup-video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch(err => console.log('Play error:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closePopup();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Auto-play video when popup opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const video = document.querySelector('.popup-video');
        if (video) {
          video.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.log('Auto-play prevented:', err);
              setIsPlaying(false);
            });
        }
      }, 500);
    }
  }, [isOpen]);

  // Don't render if not open
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        // Close if clicking on the backdrop (not the video container)
        if (e.target === e.currentTarget) {
          closePopup();
        }
      }}
    >
      {/* Close button */}
      <button
        onClick={closePopup}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white transition z-20 bg-black/50 rounded-full p-2 hover:bg-black/70"
        aria-label="Close video"
      >
        <FaTimes size={24} />
      </button>

      {/* Video Container - Portrait/Reel Style */}
      <div 
        className="relative w-full max-w-sm md:max-w-md mx-4 bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Video Container - 9:16 Aspect Ratio for Portrait */}
        <div className="relative" style={{ aspectRatio: '9/16' }}>
          <video
            className="popup-video w-full h-full object-cover"
            controls={false}
            playsInline
            muted={false}
            loop
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

          {/* Play/Pause Overlay Button */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition group z-10"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-spotify-green/95 hover:bg-spotify-green rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl">
              {isPlaying ? (
                <FaPause className="text-black text-2xl md:text-3xl" />
              ) : (
                <FaPlay className="text-black text-2xl md:text-3xl ml-1" />
              )}
            </div>
          </button>

          {/* Controls Hint */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white/50 text-xs z-10">
            <span>Tap to {isPlaying ? 'pause' : 'play'}</span>
            <span>Press ESC to close</span>
          </div>
        </div>

        {/* Video Info */}
        <div className="bg-spotify-dark p-4 md:p-5 border-t border-spotify-border">
          <h3 className="text-white font-spotify-title text-base md:text-lg font-bold">
           PATEL college of professional Education & Information TechnologyAcademy
          </h3>
          <p className="text-spotify-silver text-xs md:text-sm font-spotify mt-1">
            Discover our vision, mission, and commitment to quality education
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;