// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaGraduationCap,
  FaImages,
  FaHome,
  FaBook,
  FaTimes,
  FaBars,
  FaSignInAlt,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMinus
} from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [expandedDepartments, setExpandedDepartments] = useState({});

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)) {
        setCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    setMobileCoursesOpen(false);
  };


  const toggleMobileCourses = () => {
    setMobileCoursesOpen(!mobileCoursesOpen);
  };


  const toggleDepartment = (deptName) => {
    setExpandedDepartments(prev => ({
      ...prev,
      [deptName]: !prev[deptName]
    }));
  };


  const toggleCoursesDropdown = () => {
    setCoursesOpen(!coursesOpen);
  };


  const EXTERNAL_URLS = {
    login: 'https://shaheedbhagatsinghhealthandeducation.com/login?student',
    result: 'https://sbshe.in/Rollno-Verification.aspx',
  };


  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome className="mr-2" /> },
  ];


  const departments = [
    {
      id: 'paramedical',
      name: 'Department of Paramedical Sciences',
      icon: '🏥',
      courses: [
        'Operation Theatre Technician (OTT)',
        'Emergency Medical Technician (EMT)',
        'Community Medical Services & Essential Drugs (CMS & ED)',
        'Central Sterile Services Department Technician (CSSD Technician)',
        'First Aid & Emergency Care',
        'CT Scan Technician',
        'X-Ray Technician (Radiography Technician)',
        'Ultrasound Technician',
        'Medical Laboratory Technician (MLT)',
        'Dialysis Technician',
        'ECG Technician',
        'Cath Lab Technician'
      ]
    },
    {
      id: 'it',
      name: 'Department of Information Technology',
      icon: '💻',
      courses: [
        'Diploma in Computer Science',
        'Advanced Diploma in Computer Science',
        'Diploma in Information Technology (DIT)',
        'Advanced Diploma in Information Technology (ADIT)',
        'Certificate in Computer Applications (CCA)',
        'Diploma in Computer Applications (DCA)',
        'Advanced Diploma in Computer Applications (ADCA)',
        'Post Graduate Diploma in Computer Applications (PGDCA)',
        'Computer Teacher Training (CTT)',
        'Tally with GST',
        'Advanced Excel',
        'Office Automation',
        'Web Designing',
        'Graphic Designing',
        'Digital Marketing',
        'Programming (C, C++, Java, Python)',
        'AutoCAD',
        'Data Entry Operator (DEO)'
      ]
    },
    {
      id: 'yoga',
      name: 'Department of Yoga & Naturopathy',
      icon: '🧘',
      courses: [
        'Diploma in Naturopathy & Yogic Sciences (DNYS)'
      ]
    },
    {
      id: 'education',
      name: 'Department of Education',
      icon: '📚',
      courses: [
        'Nursery Teacher Training (NTT)',
        'Nursery Primary Teacher Training (NPTT)',
        'Computer Teacher Training (CTT)',
        'Yoga Teacher Training (YTT)'
      ]
    },
    {
      id: 'agriculture',
      name: 'Department of Agriculture',
      icon: '🌾',
      courses: [
        'Diploma in Agriculture',
        'Organic Farming Certification',
        'Modern Farming Techniques',
        'Agri-Business Management'
      ]
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'navbar-spotify shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center min-h-[100px] py-2">

          {/* Logo & Brand - Left */}
          <div className="flex items-center gap-4">
            <a href="/">
              <img
                src={logo}
                alt="Patel Academy Logo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
            </a>

            <div className="flex flex-col justify-center">
              <h1 className="text-white font-bold text-lg leading-tight">
                PATEL College of Professional
              </h1>

              <p className="text-yellow-400 text-sm font-medium">
                Education & Information Technology 
              </p>
              <a href="https://shaheedbhagatsinghhealthandeducation.com/site/">
                <span className="mt-1 inline-block w-fit px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-500 to-amber-300 text-black">
                  Affiliated with Shaheed Bhagat Singh Health & Education
                </span>
              </a>
            </div>
          </div>
          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-6 text-spotify-silver font-spotify text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-spotify-green transition font-bold flex items-center"
                onClick={handleNavClick}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {/* Courses Dropdown - Click to toggle */}
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={toggleCoursesDropdown}
                className={`hover:text-spotify-green transition flex items-center gap-1 font-bold ${coursesOpen ? 'text-spotify-green' : 'text-white'
                  }`}
              >
                <FaBook className="mr-1" /> Courses <span className="text-xs">{coursesOpen ? '▲' : '▼'}</span>
              </button>

              {coursesOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 top-8 w-[800px] max-h-[500px] overflow-y-auto bg-spotify-dark border border-spotify-border rounded-spotify-card p-4 shadow-spotify-heavy"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {departments.map((dept) => (
                      <div key={dept.id} className="border border-spotify-border rounded-lg overflow-hidden">
                        {/* Department Header - Click to Expand */}
                        <button
                          onClick={() => toggleDepartment(dept.id)}
                          className="w-full flex items-center justify-between p-3 bg-spotify-mid/20 hover:bg-spotify-mid/40 transition text-left"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-xl">{dept.icon}</span>
                            <span className="text-spotify-green font-bold text-sm">
                              {dept.name}
                            </span>
                          </span>
                          <span className="text-spotify-silver">
                            {expandedDepartments[dept.id] ? <FaMinus size={12} /> : <FaPlus size={12} />}
                          </span>
                        </button>

                        {/* Department Courses - Expandable */}
                        {expandedDepartments[dept.id] && (
                          <div className="p-3 bg-spotify-black/30">
                            <ul className="space-y-1">
                              {dept.courses.map((course, idx) => (
                                <li
                                  key={idx}
                                  className="text-spotify-silver text-xs hover:text-white cursor-pointer py-1 px-2 rounded hover:bg-spotify-mid/20 transition"
                                >
                                  • {course}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Login, Result, Gallery & CTA */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Gallery Button - Internal Link */}
            <Link
              to="/gallery"
              className="hidden md:flex items-center gap-1 text-white hover:text-spotify-green transition font-bold text-sm"
              onClick={handleNavClick}
            >
              <FaImages />
              <span className="hidden lg:inline">Gallery</span>
            </Link>

            {/* Result Button - External Link */}
            <a
              href={EXTERNAL_URLS.result}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-white hover:text-spotify-green transition font-bold text-sm"
            >
              <FaGraduationCap />
              <span className="hidden lg:inline">Result</span>
              <FaExternalLinkAlt size={10} className="opacity-50" />
            </a>

            {/* Login Button - External Link */}
            <a
              href={EXTERNAL_URLS.login}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-white hover:text-spotify-green transition font-bold text-sm px-3 py-2 rounded-full bg-spotify-mid/50 hover:bg-spotify-mid"
            >
              <FaUser />
              <span className="hidden lg:inline">Login</span>
              <FaExternalLinkAlt size={10} className="opacity-50" />
            </a>


            <a href="https://shaheedbhagatsinghhealthandeducation.com/student-register">

              <button className="hidden md:block bg-spotify-green text-black text-sm font-bold px-6 py-2 rounded-full hover:bg-spotify-green-dark transition shadow-lg uppercase tracking-button">
                Enroll Now
              </button>
            </a>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-2xl p-2 hover:bg-spotify-mid/30 rounded-full transition"
              onClick={() => setIsOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Full Screen with All Links */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-spotify-border">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-spotify-green"
              />
              <span className="text-white font-spotify-title font-bold text-lg">
                PATEL College
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl p-2 hover:bg-spotify-mid/30 rounded-full transition"
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 text-white flex-1">
            {/* Home Link */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 text-xl font-spotify-title font-bold hover:text-spotify-green transition py-3 border-b border-spotify-border/30"
                onClick={handleNavClick}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {/* Courses Button with Dropdown - Mobile Accordion */}
            <div className="border-b border-spotify-border/30">
              <button
                onClick={toggleMobileCourses}
                className="flex items-center justify-between w-full py-3 text-xl font-spotify-title font-bold hover:text-spotify-green transition"
              >
                <span className="flex items-center gap-3">
                  <FaBook /> Courses
                </span>
                {mobileCoursesOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {/* Mobile Courses Dropdown with Accordion */}
              {mobileCoursesOpen && (
                <div className="pl-2 pb-3 space-y-3">
                  {departments.map((dept) => (
                    <div key={dept.id} className="border border-spotify-border rounded-lg overflow-hidden">
                      {/* Department Header */}
                      <button
                        onClick={() => toggleDepartment(dept.id)}
                        className="w-full flex items-center justify-between p-3 bg-spotify-mid/20 hover:bg-spotify-mid/40 transition"
                      >
                        <span className="flex items-center gap-2 text-sm">
                          <span className="text-xl">{dept.icon}</span>
                          <span className="text-spotify-green font-bold">
                            {dept.name}
                          </span>
                        </span>
                        <span className="text-spotify-silver">
                          {expandedDepartments[dept.id] ? <FaMinus size={14} /> : <FaPlus size={14} />}
                        </span>
                      </button>

                      {/* Department Courses */}
                      {expandedDepartments[dept.id] && (
                        <div className="p-3 bg-spotify-black/30">
                          <ul className="space-y-1">
                            {dept.courses.map((course, idx) => (
                              <li
                                key={idx}
                                className="text-spotify-silver text-xs hover:text-white cursor-pointer py-1 px-2 rounded hover:bg-spotify-mid/20 transition"
                              >
                                • {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Gallery - Internal Link */}
            <Link
              to="/gallery"
              className="flex items-center gap-3 text-xl font-spotify-title font-bold hover:text-spotify-green transition py-3 border-b border-spotify-border/30"
              onClick={handleNavClick}
            >
              <FaImages /> Gallery
            </Link>

            {/* Result - External Link */}
            <a
              href={EXTERNAL_URLS.result}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl font-spotify-title font-bold hover:text-spotify-green transition py-3 border-b border-spotify-border/30"
              onClick={handleNavClick}
            >
              <FaGraduationCap /> Result <FaExternalLinkAlt size={14} className="opacity-50" />
            </a>
          </nav>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-spotify-border">
            {/* Login - External Link */}
            <a
              href={EXTERNAL_URLS.login}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-spotify-green text-black font-bold py-3 rounded-full text-lg hover:bg-spotify-green-dark transition"
              onClick={handleNavClick}
            >
              <FaSignInAlt />  Login <FaExternalLinkAlt size={14} />
            </a>
            <button className="w-full mt-3 bg-spotify-green text-black font-bold py-3 rounded-full text-lg hover:bg-spotify-green-dark transition">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;