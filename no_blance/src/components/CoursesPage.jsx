// src/components/CoursesPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft, FaSearch, FaChevronDown, FaChevronUp,
  FaGraduationCap, FaClock, FaUserGraduate, FaRupeeSign,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { departments } from '../data/coursesData';

const CoursesPage = () => {
  const [expandedDept, setExpandedDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Force content to show on mount
  useEffect(() => {
    window.scrollTo(0, 0);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);

      // Manually trigger reveal animations
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Set up Intersection Observer for scroll reveals
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
  }, [isLoaded]);

  const toggleDepartment = (deptId) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  const handleAdmission = (course) => {
    setSelectedCourse(course);
    setTimeout(() => {
      document.getElementById('admission-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Filter departments based on search
  const filteredDepartments = departments.map(dept => ({
    ...dept,
    courses: dept.courses.filter(course =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(dept => dept.courses.length > 0);

  return (
    <div className="bg-spotify-black min-h-screen font-spotify pt-20 md:pt-24">
      {/* Courses Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="border-b border-spotify-border pb-8 mb-8 flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left Side: Title and Stats */}
          <div className="flex-1">
            <h1 className="font-spotify-title text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-[0.9] tracking-tight">
              Our
              <br />
              <span className="text-spotify-green">Courses</span>
            </h1>
            <p className="text-spotify-silver text-sm md:text-base mt-4 max-w-2xl">
              Explore our comprehensive range of courses across multiple departments.
              Find the perfect program to launch your career.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-spotify-green/10 text-spotify-green text-xs px-3 py-1 rounded-full border border-spotify-green/30">
                {departments.length} Departments
              </span>
              <span className="bg-spotify-mid text-spotify-silver text-xs px-3 py-1 rounded-full border border-spotify-border">
                {departments.reduce((acc, dept) => acc + dept.courses.length, 0)} Courses
              </span>
            </div>
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
    <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-sm" style={{animation: 'pulse 1.5s ease-in-out infinite'}}>⭐</span>
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-sm" style={{animation: 'pulse 1.5s ease-in-out infinite 0.75s'}}>⭐</span>
    <span className="absolute top-1/2 -left-2 -translate-y-1/2 text-sm" style={{animation: 'pulse 1.5s ease-in-out infinite 0.5s'}}>✦</span>
    <span className="absolute top-1/2 -right-2 -translate-y-1/2 text-sm" style={{animation: 'pulse 1.5s ease-in-out infinite 1s'}}>✦</span>

    {/* Button */}
    <div className="relative bg-spotify-green text-black font-extrabold text-sm md:text-base px-6 py-3 rounded-full shadow-[0_0_25px_rgba(29,185,84,0.6)] hover:scale-110 transition-transform duration-300 overflow-hidden cursor-pointer">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
      ></div>
      <span className="relative flex items-center gap-2 whitespace-nowrap">
        <span className="text-base group-hover:animate-bounce">⭐</span>
        <span>Admission Open</span>
        <span className="text-base group-hover:animate-bounce" style={{animationDelay: '0.5s'}}>⭐</span>
      </span>
    </div>
  </a>
</div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full bg-spotify-mid text-white rounded-pill py-3 px-4 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-spotify-green border border-spotify-border"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-spotify-silver text-sm" />
          </div>
        </div>

        {/* Departments Accordion */}
        <div className="space-y-4">
          {filteredDepartments.map((dept) => (
            <div
              key={dept.id}
              className="bg-spotify-dark rounded-spotify-card border border-spotify-border shadow-spotify-medium overflow-hidden reveal"
            >
              {/* Department Header */}
              <button
                onClick={() => toggleDepartment(dept.id)}
                className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-spotify-mid/30 transition group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl md:text-4xl">{dept.icon}</span>
                  <div className="text-left">
                    <h2 className="text-white font-spotify-title text-lg md:text-xl font-bold">
                      {dept.name}
                    </h2>
                    <p className="text-spotify-silver text-xs md:text-sm font-spotify">
                      {dept.courses.length} Courses Available
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-spotify-silver text-sm font-spotify hidden md:inline">
                    {expandedDept === dept.id ? 'Collapse' : 'Expand'}
                  </span>
                  <div className="w-8 h-8 bg-spotify-mid rounded-full flex items-center justify-center group-hover:bg-spotify-green/20 transition">
                    {expandedDept === dept.id ? (
                      <FaChevronUp className="text-spotify-green" />
                    ) : (
                      <FaChevronDown className="text-spotify-silver group-hover:text-spotify-green transition" />
                    )}
                  </div>
                </div>
              </button>

              {/* Department Courses */}
              {expandedDept === dept.id && (
                <div className="border-t border-spotify-border p-4 md:p-6 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dept.courses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-spotify-mid/50 rounded-spotify p-4 border border-spotify-border hover:border-spotify-green/50 transition group card-hover"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-white font-spotify-title font-bold text-sm md:text-base">
                            {course.name}
                          </h3>
                          <span className="text-spotify-green text-xs font-bold bg-spotify-green/10 px-2 py-0.5 rounded-full">
                            {course.code}
                          </span>
                        </div>

                        <p className="text-spotify-silver text-xs md:text-sm font-spotify mb-3">
                          {course.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="flex items-center gap-1 text-spotify-silver text-xs">
                            <FaClock className="text-spotify-green" size={12} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 text-spotify-silver text-xs">
                            <FaUserGraduate className="text-spotify-green" size={12} />
                            <span>{course.eligibility}</span>
                          </div>
                          <div className="flex items-center gap-1 text-spotify-silver text-xs col-span-2">
                            <FaRupeeSign className="text-spotify-green" size={12} />
                            <span className="font-bold text-white">{course.fee}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleAdmission(course)}
                          className="w-full bg-gradient-to-b from-spotify-green to-green-600 text-black font-extrabold text-sm py-2 rounded-full flex items-center justify-center gap-2 group/btn border-b-4 border-green-800 shadow-[0_4px_15px_rgba(29,185,84,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(29,185,84,0.6)] active:translate-y-0 active:border-b-0 transition-all duration-200"
                        >
                          <FaGraduationCap size={16} className="group-hover/btn:scale-110 transition-transform" />
                          Apply for Admission
                          <FaExternalLinkAlt size={12} className="opacity-0 group-hover/btn:opacity-100 transition" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredDepartments.length === 0 && (
            <div className="text-center py-12">
              <span className="text-6xl block mb-4">🔍</span>
              <p className="text-spotify-silver font-spotify">No courses found matching your search.</p>
            </div>
          )}
        </div>

        {/* Admission Section */}
        <div id="admission-section" className="mt-16 border-t border-spotify-border pt-8">
          {selectedCourse ? (
            <div className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-green/30 shadow-spotify-medium animate-slideUp">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-spotify-title text-xl font-bold">
                  {selectedCourse.name}
                </h3>
                <span className="text-spotify-green text-sm font-bold bg-spotify-green/10 px-3 py-1 rounded-full">
                  {selectedCourse.code}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-spotify-mid/30 rounded-spotify p-3 text-center">
                  <p className="text-spotify-silver text-xs uppercase tracking-wider">Duration</p>
                  <p className="text-white font-bold">{selectedCourse.duration}</p>
                </div>
                <div className="bg-spotify-mid/30 rounded-spotify p-3 text-center">
                  <p className="text-spotify-silver text-xs uppercase tracking-wider">Eligibility</p>
                  <p className="text-white font-bold text-sm">{selectedCourse.eligibility}</p>
                </div>
                <div className="bg-spotify-mid/30 rounded-spotify p-3 text-center">
                  <p className="text-spotify-silver text-xs uppercase tracking-wider">Total Fee</p>
                  <p className="text-spotify-green font-bold text-xl">{selectedCourse.fee}</p>
                </div>
              </div>

              <div className="bg-spotify-mid/50 rounded-spotify p-4 border border-spotify-border">
                <p className="text-spotify-silver text-sm mb-4">
                  <span className="text-spotify-green font-bold">📝</span> To apply for this course, please contact our admission office:
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <a
                    href="tel:9479719159"
                    className="flex-1 bg-spotify-green text-black font-bold py-3 rounded-full text-center hover:bg-spotify-green-dark transition flex items-center justify-center gap-2 animate-pulse"
                  >
                    📞 Call Now: 9479719159
                  </a>
                  <a
                    href="mailto:skps.org@gmail.com"
                    className="flex-1 bg-spotify-mid text-white font-bold py-3 rounded-full text-center hover:bg-spotify-mid/80 transition flex items-center justify-center gap-2"
                  >
                    ✉️ Email: patelcollegeprofessionnaleducation@gmail.com
                  </a>

                  <a
                    href="https://wa.me/919479719159"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white font-bold py-3 rounded-full text-center hover:bg-green-700 transition flex items-center justify-center gap-2"
                  >
                    💬 WhatsApp
                  </a>
                </div>

                {/* ✨ Star Border Animated Button */}
                <div className="mt-6 flex justify-center">
                  <a
                    href="https://shaheedbhagatsinghhealthandeducation.com/student-register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-block"
                  >
                    {/* Star Border Container */}
                    <div className="absolute -inset-[3px] rounded-2xl overflow-hidden">
                      {/* Rotating Star Border */}
                      <div className="star-border-rotate absolute inset-0"></div>
                    </div>

                    {/* Button Body */}
                    <div className="relative bg-spotify-black px-8 py-4 rounded-2xl overflow-hidden">
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-spotify-green/0 via-spotify-green/20 to-spotify-green/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

                      {/* Stars Background on Hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="absolute top-1 left-3 text-yellow-400 text-xs animate-spin" style={{ animationDuration: '3s' }}>✦</span>
                        <span className="absolute top-2 right-4 text-yellow-300 text-[10px] animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>✧</span>
                        <span className="absolute bottom-1 left-6 text-yellow-400 text-xs animate-spin" style={{ animationDuration: '2.5s' }}>✦</span>
                        <span className="absolute bottom-2 right-8 text-yellow-300 text-[10px] animate-spin" style={{ animationDuration: '3.5s', animationDirection: 'reverse' }}>✧</span>
                      </div>

                      {/* Button Text */}
                      <span className="relative flex items-center gap-3 text-white font-bold text-sm md:text-base whitespace-nowrap">
                        <span className="text-lg group-hover:animate-bounce" style={{ animationDelay: '0s' }}>⭐</span>
                        <span>Apply Now</span>
                        <span className="text-lg group-hover:animate-bounce" style={{ animationDelay: '0.15s' }}>⭐</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                <p className="text-spotify-silver text-xs text-center mt-4">
                  Or visit our campus at: Noida, Uttar Pradesh, India
                </p>
              </div>

              <button
                onClick={() => setSelectedCourse(null)}
                className="mt-4 text-spotify-silver hover:text-white transition text-sm font-spotify"
              >
                ← Apply for a different course
              </button>
            </div>
          ) : (
            <div className="bg-spotify-mid/30 rounded-spotify p-8 border border-spotify-border text-center">
              <span className="text-4xl block mb-4">📋</span>
              <p className="text-spotify-silver font-spotify">
                Click on <span className="text-spotify-green font-bold">"Apply for Admission"</span> on any course above to start your application.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage; 