// src/components/FacultyGrid.jsx
import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { facultyData } from '../data/faculty';

const FacultyGrid = () => {
  const [flipped, setFlipped] = useState(null);

  return (
    <section className="bg-brand-dark py-16 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white text-center">
          Expert Faculty
        </h2>
        <p className="text-brand-muted text-center mt-4 font-inter max-w-2xl mx-auto">
          Learn from industry experts with decades of experience
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {facultyData.map((f, i) => (
            <div 
              key={i} 
              className="relative perspective-1000 cursor-pointer"
              onMouseEnter={() => setFlipped(i)}
              onMouseLeave={() => setFlipped(null)}
            >
              <div className={`transition-transform duration-500 transform-style-3d ${
                flipped === i ? 'rotate-y-180' : ''
              }`}>
                <div className="bg-brand-card p-6 rounded-xl border border-brand-border text-center backface-hidden">
                  <div className="text-6xl mb-3">👨‍🏫</div>
                  <h4 className="text-white font-poppins font-semibold">{f.name}</h4>
                  <p className="text-brand-accent text-sm">{f.specialization}</p>
                  <p className="text-brand-muted text-xs mt-1">{f.experience} experience</p>
                  <div className="mt-3 flex justify-center gap-2">
                    <span className="text-brand-muted text-xs bg-brand-border px-2 py-0.5 rounded-full">{f.qualification}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-brand-card p-6 rounded-xl border border-brand-border backface-hidden rotate-y-180 flex flex-col justify-center items-center">
                  <p className="text-brand-text text-sm font-inter text-center">{f.bio}</p>
                  <div className="flex gap-3 mt-4">
                    <a href="#" className="text-brand-muted hover:text-brand-accent transition">
                      <FaLinkedin size={18} />
                    </a>
                    <a href="#" className="text-brand-muted hover:text-brand-accent transition">
                      <FaEnvelope size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyGrid;