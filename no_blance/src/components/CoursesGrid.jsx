
import React from 'react';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
const CoursesGrid = () => {
  const domains = [
    { icon: "💻", title: "IT & Software", desc: "Web Designing, Advanced Excel, Diploma in Information Technology (DIT) & more", color: "bg-spotify-green/10" },
    { icon: "🌾", title: "Agriculture Sciences", desc: " Diploma in Agriculture, Organic Farming Certification, Agri-Business Management", color: "bg-spotify-green/10" },
    { icon: "🏥", title: "Para-medical", desc: "Operation Theatre Technician (OTT),Ultrasound Technician,Emergency Medical Technician", color: "bg-spotify-green/10" },


    { icon: "🏛️", title: "Yoga & Naturopathy", desc: "Diploma in Naturopathy & Yogic Sciences (DNYS)", color: "bg-spotify-green/10" }
  ];
  // Set up Intersection Observer for this component
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Manually trigger reveal animations for elements already in view
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);

    // Set up observer for future scrolls
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    // Observe all .reveal elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-spotify-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-spotify-title font-bold text-white text-center">
          What We Offer
        </h2>
        <p className="text-spotify-silver text-center mt-4 max-w-2xl mx-auto font-spotify">
          Comprehensive programs across multiple domains designed for career success
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {domains.map((d, i) => (
            <div key={i} className="bg-spotify-dark p-6 rounded-spotify-card border border-spotify-border card-spotify reveal group">
              <div className={`w-12 h-12 ${d.color} rounded-circle flex items-center justify-center text-2xl mb-4`}>
                {d.icon}
              </div>
              <h3 className="text-lg font-spotify-title font-bold text-white">{d.title}</h3>
              <p className="text-spotify-silver text-sm font-spotify mt-2">{d.desc}</p>
              <Link to="/courses" className="text-spotify-green text-sm font-bold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-button">
                Know More →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://shaheedbhagatsinghhealthandeducation.com/student-register"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block p-[2px] rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #1DB954, transparent, #1DB954, transparent, #1DB954, transparent, #1DB954, transparent)',
              animation: 'wobble 3s ease-in-out infinite',
            }}
          >
            {/* Corner Stars */}
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-sm" style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>⭐</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-sm" style={{ animation: 'pulse 1.5s ease-in-out infinite 0.75s' }}>⭐</span>
            <span className="absolute top-1/2 -left-2 -translate-y-1/2 text-sm" style={{ animation: 'pulse 1.5s ease-in-out infinite 0.5s' }}>✦</span>
            <span className="absolute top-1/2 -right-2 -translate-y-1/2 text-sm" style={{ animation: 'pulse 1.5s ease-in-out infinite 1s' }}>✦</span>

            {/* Button */}
            <div className="relative bg-spotify-green text-black font-extrabold text-sm md:text-base px-6 py-3 rounded-full shadow-[0_0_25px_rgba(29,185,84,0.6)] hover:scale-110 transition-transform duration-300 overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              ></div>
              <span className="relative flex items-center gap-2 whitespace-nowrap">
                <span className="text-base group-hover:animate-bounce">⭐</span>
                <span>Apply Now</span>
                <span className="text-base group-hover:animate-bounce" style={{ animationDelay: '0.15s' }}>⭐</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;