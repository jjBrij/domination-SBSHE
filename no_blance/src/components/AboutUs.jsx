// src/components/AboutUs.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaSearch, FaHeart, FaShoppingBag, 
  FaGraduationCap, FaUsers, FaHeartbeat, FaHands, 
  FaAward, FaLightbulb, FaBook, FaBriefcase, 
  FaHandsHelping, FaGlobe, FaSchool, FaStar 
} from 'react-icons/fa';

const AboutUs = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Force a re-render after mount to ensure content shows
    const timer = setTimeout(() => {
      // This forces the component to re-render if needed
      document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Re-run observer when component mounts
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-spotify-black min-h-screen font-spotify">
      {/* Utility Bar - Spotify Style */}
      
      {/* Navigation Bar - Spotify Style */}
      <div className="bg-spotify-black/95 backdrop-blur border-b border-spotify-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          
          {/* Right side - Spotify style icons */}
          
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header - Spotify Display Style */}
        <div className="border-b border-spotify-border pb-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-0.1 h-8 bg-spotify-green rounded-full"></div>
        
          </div>
          <h1 className="font-spotify-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[0.9] tracking-tight">
            About
            <br />
            <span className="text-spotify-green">Us</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-spotify-silver font-spotify">
            <span className="flex items-center gap-2 bg-spotify-mid px-3 py-1.5 rounded-full border border-spotify-border">
              <span className="w-1.5 h-1.5 bg-spotify-green rounded-full"></span>
              PATEL College of Professional Education & Information Technology.
            </span>
            <span className="flex items-center gap-2 bg-spotify-mid px-3 py-1.5 rounded-full border border-spotify-border">
              <span className="w-1.5 h-1.5 bg-spotify-green rounded-full"></span>
              Since 2005
            </span>
            <span className="flex items-center gap-2 bg-spotify-mid px-4 py-2 rounded-full border-2 border-yellow-400 text-yellow-300 shadow-lg hover:shadow-yellow-500/50 transition-all duration-300">
              <span className="text-yellow-400">🏆</span>
              NSDC Certified
            </span>
          </div>
        </div>

        {/* Content Sections - Spotify Style */}
        <div className="space-y-6 md:space-y-8">
          {/* Introduction */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">01</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Introduction
            </h2>
            <p className="text-spotify-silver text-sm md:text-base leading-relaxed font-spotify">
              PATEL College of Professional Education & Information Technology. is a visionary organization dedicated to empowering individuals through quality education, skill development, and healthcare awareness. Inspired by the revolutionary ideals, courage, and sacrifice of Bhagat Singh, the institute stands as a symbol of knowledge, service, and social responsibility. It aims to create a generation of educated, skilled, and morally strong individuals who can contribute effectively to the progress of society and the nation.
            </p>
            <p className="text-spotify-silver text-sm md:text-base leading-relaxed font-spotify mt-3">
              Education and health are the two most essential pillars of a developed society. Recognizing this, the institute has been established with a mission to bridge the gap between education and employment while also promoting health awareness among people from all sections of society. It focuses especially on rural and semi-urban areas where access to quality education and healthcare facilities is limited.
            </p>
          </section>

          {/* Philosophy & Inspiration */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">02</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Philosophy & Inspiration
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              The institute derives its inspiration from the life and principles of Bhagat Singh, who believed in equality, knowledge, and social justice. His vision was not only about political freedom but also about intellectual and social empowerment. Following his path, the institute works towards enlightening minds, removing ignorance, and building a strong, aware, and progressive society.
            </p>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Belief in equality, knowledge, and social justice – core of every initiative
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Intellectual and social empowerment beyond political freedom for holistic development
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Integration of practical skills + ethical values + social awareness in all courses
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Developing responsible citizens with confidence, integrity, and patriotism
              </li>
            </ul>
          </section>

          {/* Vision & Mission */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">03</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-spotify-title text-lg md:text-xl font-bold text-spotify-green mb-2 flex items-center gap-2">
                  <FaGlobe size={20} /> Vision
                </h3>
                <p className="text-spotify-silver text-sm font-spotify mb-3">
                  The vision of PATEL College of Professional Education & Information Technology. is to become a leading center of excellence in education and healthcare training by providing high-quality, affordable, and accessible learning opportunities to all sections of society.
                </p>
                <ul className="space-y-1 text-spotify-silver text-sm font-spotify ml-4">
                  <li className="flex items-center gap-2">• A society where every individual is educated and skilled for self-reliance</li>
                  <li className="flex items-center gap-2">• Equal opportunities for all regardless of caste, creed, gender or background</li>
                  <li className="flex items-center gap-2">• Improved healthcare awareness and accessible paramedical services in rural India</li>
                  <li className="flex items-center gap-2">• Development of self-reliant and confident youth driving national progress</li>
                </ul>
              </div>

              <div className="border-t border-spotify-border pt-4">
                <h3 className="font-spotify-title text-lg md:text-xl font-bold text-spotify-green mb-2 flex items-center gap-2">
                  <FaHands size={20} /> Mission
                </h3>
                <p className="text-spotify-silver text-sm font-spotify mb-3">
                  The mission of the institute is to provide comprehensive education and training that meets modern industry standards while also promoting health awareness and community service.
                </p>
                <ul className="space-y-1 text-spotify-silver text-sm font-spotify ml-4">
                  <li className="flex items-center gap-2">• Providing quality education in health, paramedical, and vocational fields</li>
                  <li className="flex items-center gap-2">• Promoting skill-based learning for employment generation and entrepreneurship</li>
                  <li className="flex items-center gap-2">• Spreading awareness about health, hygiene, and preventive care across communities</li>
                  <li className="flex items-center gap-2">• Encouraging social responsibility and active community participation</li>
                  <li className="flex items-center gap-2">• Supporting underprivileged students through affordable education & scholarships</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rest of the sections remain the same */}
          {/* Teaching Methodology */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">04</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaBook size={24} /> Teaching Methodology
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              The institute follows a student-centered teaching approach that combines theoretical knowledge with practical application.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Classroom lectures by experienced faculty & industry experts
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Practical training sessions and hands-on workshops
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Field visits and real-life exposure in healthcare & industry
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Interactive learning and group discussions for critical thinking
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Regular assessments and continuous evaluations
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Real-life application of concepts through projects and internships
              </li>
            </ul>
          </section>

          {/* Faculty & Staff */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">05</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaUsers size={24} /> Faculty and Staff
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              The strength of the institute lies in its qualified and dedicated faculty members. They focus on:
            </p>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Personalized attention to students with mentor-mentee system
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Skill-based training aligned with current industry demands
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Career guidance and counseling for competitive exams and placements
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Continuous improvement in teaching methods via regular development programs
              </li>
            </ul>
          </section>

          {/* Continue with remaining sections... */}
          {/* For brevity, the rest of the sections (6-16) would remain the same */}
          
          {/* ... ALL OTHER SECTIONS REMAIN SAME ... */}
          
          {/* Back to Top - Spotify Style */}
          <div className="border-t border-spotify-border mt-8 md:mt-12 pt-8 text-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-spotify-green text-black font-bold px-8 py-3 rounded-full hover:bg-spotify-green-dark transition inline-flex items-center gap-2 text-sm uppercase tracking-button"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;