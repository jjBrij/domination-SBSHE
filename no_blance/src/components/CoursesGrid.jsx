// src/components/CoursesGrid.jsx
import React from 'react';

const CoursesGrid = () => {
  const domains = [
    { icon: "💻", title: "IT & Software", desc: "Web Designing, Advanced Excel, Diploma in Information Technology (DIT) & more", color: "bg-spotify-green/10" },
    { icon: "🌾", title: "Agriculture Sciences", desc: " Diploma in Agriculture, Organic Farming Certification, Agri-Business Management", color: "bg-spotify-green/10" },
    { icon: "🏥", title: "Para-medical", desc: "Operation Theatre Technician (OTT),Ultrasound Technician,Emergency Medical Technician", color: "bg-spotify-green/10" },
   
  
    { icon: "🏛️", title: "Yoga & Naturopathy", desc: "Diploma in Naturopathy & Yogic Sciences (DNYS)", color: "bg-spotify-green/10" }
  ];

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
              <a href="#" className="text-spotify-green text-sm font-bold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-button">
                Know More →
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://shaheedbhagatsinghhealthandeducation.com/student-register">
              
          <button className="bg-spotify-green text-black font-bold px-10 py-3 rounded-full hover:bg-spotify-green-dark transition shadow-lg uppercase tracking-button">
            Apply Now
          </button>
           </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;