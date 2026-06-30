// src/components/FounderSection.jsx
import React from 'react';
import founderImage from '../assets/images/gallery/image2.jpg'; // Import the image

const FounderSection = () => {
  return (
    <section className="bg-spotify-black py-section border-t border-spotify-border">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal order-2 md:order-1">
          <div className="bg-spotify-dark rounded-spotify-card border border-spotify-border relative overflow-hidden shadow-spotify-medium">
            <div className="relative h-80 md:h-96">
              {/* Image */}
              <img 
                src={founderImage} 
                alt="Founder - Dr. Vikram Singh" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-spotify-black/60 via-transparent to-transparent"></div>
            </div>
            
          </div>
        </div>
        <div className="reveal order-1 md:order-2 space-y-6">
          <div className="flex items-center gap-2 text-spotify-green">
            <span className="text-2xl">"</span>
            <span className="text-xs font-spotify font-bold tracking-widest text-spotify-silver uppercase">Visionary Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-spotify-title font-bold text-white">
            Founder's Vision
          </h2>
          <p className="text-spotify-silver font-spotify leading-relaxed">
            "Empowering India's youth with future-ready skills across sectors. Our pedagogy blends theory with real-world practice, ensuring every student is industry-ready from day one."
          </p>
          <div className="border-l-4 border-spotify-green pl-4">
            <p className="text-white font-spotify-title text-lg italic">— Dr. Vikram Singh</p>
            <p className="text-spotify-silver text-sm font-spotify">PhD, IIT Delhi · 20+ years in education</p>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default FounderSection;