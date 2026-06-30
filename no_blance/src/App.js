// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import StatsSection from './components/StatsSection';
import SearchBar from './components/SearchBar';
import CoursesGrid from './components/CoursesGrid';
import TopPerformers from './components/TopPerformers';
import FounderSection from './components/FounderSection';
import FacultyGrid from './components/FacultyGrid';
import TestimonialsSlider from './components/TestimonialsSlider';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import ScrollToTop from './components/ScrollToTop';
import StickyBottomBar from './components/StickyBottomBar';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import RefundPolicy from './components/RefundPolicy';
import VideoPopup from './components/VideoPopup';
import CoursesPage from './components/CoursesPage';
import AboutUs from './components/AboutUs';
import './index.css';

function App() {
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
    <Router>
      <div className="bg-spotify-black min-h-screen font-spotify">
        <VideoPopup />
        <Navbar />
        <Routes>
          {/* Home Page with all sections */}
         
          <Route path="/" element={
            <>
              <Hero />
              <MarqueeTicker />
              <StatsSection />
              <SearchBar />
              <CoursesGrid />
              <TopPerformers />
              <FounderSection />
              <FacultyGrid />
              <TestimonialsSlider />
            </>
          } />
          
          {/* Gallery Page - Internal */}
          <Route path="/gallery" element={<Gallery />} />
           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/terms-conditions" element={<TermsConditions />} />
           <Route path="/refund-policy" element={<RefundPolicy />} />
           <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<CoursesGrid />} />
          <Route path="/about" element={<FounderSection />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center text-white">Contact Page</div>} />
        </Routes>
        <Footer />
        <WhatsAppFAB />
        <ScrollToTop />
        <StickyBottomBar />
      </div>
    </Router>
  );
}

export default App;