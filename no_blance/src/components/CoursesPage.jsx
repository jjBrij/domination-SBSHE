// src/components/CoursesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaChevronDown, FaChevronUp, FaGraduationCap, FaClock, FaUserGraduate, FaRupeeSign, FaExternalLinkAlt } from 'react-icons/fa';
import { departments } from '../data/coursesData';

const CoursesPage = () => {
  const [expandedDept, setExpandedDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleDepartment = (deptId) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  const handleAdmission = (course) => {
    setSelectedCourse(course);
    // Scroll to admission section
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
    <div className="bg-spotify-black min-h-screen font-spotify">
      {/* Utility Bar */}
      <div className="bg-spotify-mid h-9 hidden md:flex items-center justify-end px-8 gap-6 border-b border-spotify-border">
        <a href="#" className="text-spotify-silver text-xs font-bold hover:text-white transition uppercase tracking-wider">Find a Store</a>
        <a href="#" className="text-spotify-silver text-xs font-bold hover:text-white transition uppercase tracking-wider">Help</a>
        <a href="#" className="text-spotify-silver text-xs font-bold hover:text-white transition uppercase tracking-wider">Join Us</a>
        <a href="#" className="text-spotify-silver text-xs font-bold hover:text-white transition uppercase tracking-wider">Sign In</a>
      </div>

      {/* Navigation Bar */}
      <div className="bg-spotify-black/95 backdrop-blur border-b border-spotify-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-3 text-spotify-white hover:text-spotify-green transition font-spotify text-sm group">
            <div className="w-8 h-8 bg-spotify-green rounded-circle flex items-center justify-center group-hover:scale-105 transition">
              <FaArrowLeft size={14} className="text-black" />
            </div>
            <span className="font-bold">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="bg-spotify-mid text-white rounded-pill py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-spotify-green w-40 md:w-60"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-silver text-xs" />
            </div>
          </div>
        </div>
      </div>

      {/* Courses Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="border-b border-spotify-border pb-8 mb-8">
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
                          className="w-full bg-spotify-green text-black font-bold text-sm py-2 rounded-full hover:bg-spotify-green-dark transition flex items-center justify-center gap-2 group/btn"
                        >
                          <FaGraduationCap size={14} />
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
          <h2 className="font-spotify-title text-2xl md:text-3xl font-bold text-white text-center mb-2">
            <span className="text-spotify-green">Apply</span> for Admission
          </h2>
          <p className="text-spotify-silver text-center text-sm mb-8">
            Fill out the form below to apply for your desired course
          </p>

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
                    href="tel:9687265333" 
                    className="flex-1 bg-spotify-green text-black font-bold py-3 rounded-full text-center hover:bg-spotify-green-dark transition flex items-center justify-center gap-2 animate-pulse"
                  >
                    📞 Call Now: 9687265333
                  </a>
                  <a 
                    href="mailto:skps.org@gmail.com" 
                    className="flex-1 bg-spotify-mid text-white font-bold py-3 rounded-full text-center hover:bg-spotify-mid/80 transition flex items-center justify-center gap-2"
                  >
                    ✉️ Emai l: skps.org@gmail.com
                  </a>
                  <a 
                    href="https://wa.me/919687265333" 
                    className="flex-1 bg-green-600 text-white font-bold py-3 rounded-full text-center hover:bg-green-700 transition flex items-center justify-center gap-2"
                  >
                    💬 WhatsApp
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