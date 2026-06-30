
import React from 'react';

const MarqueeTicker = () => {
  const items = [
    "95% Success Rate",
    "IT Certifications",
    "Agri Sciences",
    "Para-medical",
    "Scholarship Available",
    "Since 2015"
  ];
  const doubled = [...items, ...items];

  return (
    <div className="bg-brand-card border-y border-brand-border py-3 overflow-hidden">
      <div className="animate-marquee text-brand-muted font-inter text-sm tracking-wider flex gap-8 whitespace-nowrap">
        {doubled.map((text, i) => (
          <span key={i} className="flex items-center gap-4">
            <span className="text-brand-accent">•</span> {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;