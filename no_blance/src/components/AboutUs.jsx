// src/components/AboutUs.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingBag, FaGraduationCap, FaUsers, FaHeartbeat, FaHands, FaAward, FaLightbulb, FaBook, FaBriefcase, FaHandsHelping, FaGlobe, FaSchool, FaStar } from 'react-icons/fa';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-spotify-black min-h-screen font-spotify">
  
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
              PATEL College of Professional
Education & Technology Pvt. Ltd.
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
              PATEL College of Professional
Education & Technology Pvt. Ltd. is a visionary organization dedicated to empowering individuals through quality education, skill development, and healthcare awareness. Inspired by the revolutionary ideals, courage, and sacrifice of Bhagat Singh, the institute stands as a symbol of knowledge, service, and social responsibility. It aims to create a generation of educated, skilled, and morally strong individuals who can contribute effectively to the progress of society and the nation.
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
                  The vision of PATEL College of Professional
Education & Technology Pvt. Ltd. is to become a leading center of excellence in education and healthcare training by providing high-quality, affordable, and accessible learning opportunities to all sections of society.
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

          {/* Infrastructure & Facilities */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">06</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaSchool size={24} /> Infrastructure & Facilities
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Well-equipped modern classrooms with smart boards
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Practical labs for medical, paramedical and technical training
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Computer labs with updated systems & high-speed internet
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Library with rich study materials, journals and digital resources
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Clean, safe and eco-friendly campus environment
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Hostel facilities & transport support for outstation students
              </li>
            </ul>
          </section>

          {/* Health Awareness & Community Services */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">07</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaHeartbeat size={24} /> Health Awareness & Community Services
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              Regular initiatives organized by the institute:
            </p>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Free health camps in rural & urban slum areas
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Awareness programs on hygiene, sanitation, and disease prevention
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> First aid training workshops for local communities & students
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Community outreach programs for mental health and nutrition awareness
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Collaborations with NGOs for public health drives
              </li>
            </ul>
          </section>

          {/* Career Opportunities */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">08</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaBriefcase size={24} /> Career Opportunities
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              After completing their courses, students can work as:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Medical Assistants
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Lab Technicians (pathology, radiology)
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Health Workers / Community Health Officers
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Emergency Medical Technicians (EMT)
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Computer Operators / Office Assistants
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Self-employed professionals & entrepreneurs
              </li>
            </ul>
            <div className="bg-spotify-green/10 border border-spotify-green/30 rounded-spotify p-4 mt-4">
              <p className="text-spotify-green text-sm font-spotify">
                💼 The institute also supports students in job placement, resume building, and career development through placement cell.
              </p>
            </div>
          </section>

          {/* Social Responsibility */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">09</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaHandsHelping size={24} /> Social Responsibility
            </h2>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Educating underprivileged students through subsidized fee structure
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Promoting women empowerment with special skill courses for girls
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Supporting rural development via vocational training centres
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Encouraging youth participation in social activities & blood donation camps
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Environmental sustainability initiatives on campus
              </li>
            </ul>
          </section>

          {/* Why Choose This Institute */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">10</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaStar size={24} /> Why Choose This Institute
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Affordable and quality education with flexible payment options
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Practical and job-oriented courses with industry alignment
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Experienced faculty and mentorship from domain experts
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Focus on skill development and hands-on training from day one
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Strong emphasis on health awareness and community engagement
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Career guidance, placement support, and entrepreneurship cell
              </li>
            </ul>
          </section>

          {/* Future Goals */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">11</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaGlobe size={24} /> Future Goals
            </h2>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Collaborate with leading healthcare organizations & hospitals for internships
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Introduce online learning programs and hybrid courses for remote students
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Expand infrastructure and facilities including smart labs & skill centres
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Increase placement opportunities with national and international partners
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Launch research initiatives in community health and vocational pedagogy
              </li>
            </ul>
          </section>

          {/* Skill India Mission */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">12</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaAward size={24} /> Skill India Mission at SBSHE
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              Taking the mission of Skill India forward, PATEL College of Professional
Education & Technology Pvt. Ltd. Trust announced the establishment of Delhi's first skill development institute called the SBSHE Skills. The institute offers certificates, diplomas and degree programs in high growth sectors such as NTT, NPTT, paramedical, sports, automobile, construction, mechatronics, architecture, retail, ports & terminal management, beauty & wellness, media management and film making etc. with multi entry-exit and credit banking options.
            </p>
            <div className="bg-spotify-green/10 border border-spotify-green/30 rounded-spotify p-4">
              <p className="text-spotify-green text-sm font-spotify">
                🎯 The objective of the institute is to create 'industry-ready' youth who can be gainfully employed upon completion of their courses.
              </p>
            </div>
          </section>

          {/* Key Highlights */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">13</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaLightbulb size={24} /> Key Highlights
            </h2>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Multi entry-exit & credit banking options as per NEP 2020
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Industry-ready curriculum across 12+ high-growth sectors
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Partnerships with industries for joint curricula development, on-job training & apprenticeships
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Centers of excellence, simulation labs, and advanced training workshops
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Community college & vocational guidance cell for local farmers, women, and school dropouts
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Certification recognized by industry partners and govt. bodies
              </li>
            </ul>
          </section>

          {/* Core Values */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">14</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaAward size={24} /> Core Values at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Equality & Social Justice – root of all programs
              </div>
              <div className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Affordable Quality Education – No hidden costs
              </div>
              <div className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Skill & Health Integration – unique dual focus
              </div>
              <div className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Women Empowerment – dedicated scholarships & safe spaces
              </div>
              <div className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Community Service – mandatory social outreach
              </div>
              <div className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Industry Collaboration – real-time exposure
              </div>
              <div className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Innovation in Pedagogy – digital & practical learning
              </div>
              <div className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Sustainable Development – green campus initiatives
              </div>
            </div>
            <div className="bg-spotify-warning/10 border border-spotify-warning/30 rounded-spotify p-4 mt-4">
              <p className="text-spotify-warning text-sm font-spotify">
                ⚠ Note: The institute constantly evolves to meet modern educational demands while staying rooted in the revolutionary ideals of Shaheed Bhagat Singh. Every program is designed to create employable, compassionate, and patriotic citizens.
              </p>
            </div>
          </section>

          {/* Accreditations & Affiliations */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">15</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaAward size={24} /> Accreditations & Affiliations
            </h2>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Recognized by Skill India & NSDC (National Skill Development Corporation)
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Affiliated with leading boards: NIOS, BOSSE for open schooling programs
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Approved training partner for various government schemes (PMKVY, DDU-GKY)
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Collaborations with hospitals & industries for hands-on training
              </li>
            </ul>
          </section>

          {/* Student Support & Welfare */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">16</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <FaUsers size={24} /> Student Support & Welfare
            </h2>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> 24/7 student helpline and grievance redressal system
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Scholarships for meritorious and economically weaker students
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Career counseling, soft skill development & mock interview sessions
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Hostel assistance, medical insurance and extra-curricular clubs
              </li>
            </ul>
            <div className="bg-spotify-green/10 border border-spotify-green/30 rounded-spotify p-4 mt-4">
              <p className="text-spotify-green text-sm font-spotify text-center">
                ✅ Complete Data Assurance: All the above points reflect the true philosophy, ongoing initiatives, and future roadmap of PATEL College of Professional
Education & Technology Pvt. Ltd.. Each bullet point is implemented with dedication to serve students and society.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Top - Spotify Style */}
        <div className="border-t border-spotify-border mt-8 md:mt-12 pt-8 text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-spotify-green inline-flex items-center gap-2 px-8 py-3 text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;