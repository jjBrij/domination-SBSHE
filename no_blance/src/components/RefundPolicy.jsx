// src/components/RefundPolicy.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-spotify-black min-h-screen font-spotify">
      {/* Utility Bar - Spotify Style */}
      
      {/* Navigation Bar - Spotify Style */}
      <div className="bg-spotify-black/95 backdrop-blur border-b border-spotify-border sticky top-0 z-10">
        
      </div>

      {/* Refund Policy Content - Spotify Style */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header - Spotify Display Style */}
        <div className="border-b border-spotify-border pb-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-0.1 h-11 bg-spotify-green rounded-full"></div>
       
          </div>
          <h1 className="font-spotify-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[0.9] tracking-tight">
            Refund
            <br />
            <span className="text-spotify-green">Policy</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-spotify-silver font-spotify">
            <span className="flex items-center gap-2 bg-spotify-mid px-3 py-1.5 rounded-full border border-spotify-border">
              <span className="w-1.5 h-1.5 bg-spotify-green rounded-full"></span>
              PATEL College of Professional
Education & Technology Pvt. Ltd.
            </span>
            <span className="flex items-center gap-2 bg-spotify-mid px-3 py-1.5 rounded-full border border-spotify-border">
              <span className="w-1.5 h-1.5 bg-spotify-green rounded-full"></span>
              Effective: April 01, 2025
            </span>
            <span className="flex items-center gap-2 bg-spotify-mid px-4 py-2 rounded-full border-2 border-yellow-400 text-yellow-300 shadow-lg hover:shadow-yellow-500/50 transition-all duration-300">
              <span className="text-yellow-400"></span>
              Updated: April 06, 2026
            </span>
          </div>
        </div>

        {/* Content Sections - Spotify Style */}
        <div className="space-y-6 md:space-y-8">
          {/* Section 1 - Introduction */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">01</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Introduction
            </h2>
            <p className="text-spotify-silver text-sm md:text-base leading-relaxed font-spotify">
              This Refund Policy outlines the terms and conditions for refunds related to courses, programs, and services offered by PATEL College of Professional
Education & Technology Pvt. Ltd. through its Learning Management System (LMS). By purchasing or enrolling in any course or service, you agree to this Refund Policy.
            </p>
          </section>

          {/* Section 2 - Course Purchases */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">02</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Course Purchases
            </h2>
            
            <div className="space-y-4">
              <div className="bg-spotify-mid/50 rounded-spotify p-4 md:p-5 border border-spotify-border">
                <h3 className="font-spotify-title text-base md:text-lg font-bold text-spotify-green mb-2">
                  2.1 Paid Courses
                </h3>
                <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
                  <li className="flex items-start gap-2">
                    <span className="text-spotify-green mt-0.5">•</span>
                    <span>Users may request a refund within 7 days of course purchase.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spotify-green mt-0.5">•</span>
                    <span>Refund requests must be submitted via email or support.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spotify-green mt-0.5">•</span>
                    <span>Refunds will only be processed if the course has not been substantially completed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-spotify-green mt-0.5">•</span>
                    <span>No refunds will be issued after course completion.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-spotify-mid/50 rounded-spotify p-4 md:p-5 border border-spotify-border">
                <h3 className="font-spotify-title text-base md:text-lg font-bold text-spotify-green mb-2">
                  2.2 Free Courses
                </h3>
                <p className="text-spotify-silver text-sm font-spotify">
                  Free courses are not eligible for refunds.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - Refund Eligibility */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">03</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Refund Eligibility
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              Refunds may be granted under the following conditions:
            </p>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify mb-4">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Technical issues preventing course access
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Duplicate payment
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Course not delivered as described
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Payment deducted but enrollment not received
              </li>
            </ul>
            <div className="bg-spotify-negative/10 border border-spotify-negative/30 rounded-spotify p-4">
              <p className="text-spotify-negative text-sm font-spotify font-bold mb-2">
                ⚠ Refunds may not be granted for:
              </p>
              <ul className="space-y-1 text-spotify-negative/80 text-sm font-spotify ml-4">
                <li className="flex items-center gap-2">• Change of mind</li>
                <li className="flex items-center gap-2">• Lack of usage</li>
                <li className="flex items-center gap-2">• Failure to complete course</li>
                <li className="flex items-center gap-2">• User device or internet issues</li>
              </ul>
            </div>
          </section>

          {/* Section 4 - Refund Request Process */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">04</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Refund Request Process
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              To request a refund, users must provide:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify mb-4">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Full Name
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Registered Email
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Course Name
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span> Payment Details
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border col-span-full">
                <span className="text-spotify-green">•</span> Reason for Refund
              </li>
            </ul>
            <div className="bg-spotify-mid/30 rounded-spotify p-4 border border-spotify-border">
              <p className="text-spotify-silver text-sm font-spotify">
                <span className="text-spotify-green font-bold">📧 Refund requests must be sent to:</span>
                <br />
                <a href="mailto:skps.org@gmail.com" className="text-spotify-white hover:text-spotify-green transition font-bold">
                  skps.org@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 5 - Refund Processing Time */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">05</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Refund Processing Time
            </h2>
            <ul className="space-y-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green text-lg">⏱️</span>
                <span>Approved refunds will be processed within <span className="text-spotify-green font-bold">5–10 business days</span></span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green text-lg">💳</span>
                <span>Refunds will be issued to original payment method</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green text-lg">🏦</span>
                <span>Bank processing time may vary</span>
              </li>
            </ul>
          </section>

          {/* Section 6 - Cancellation Policy */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">06</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Cancellation Policy
            </h2>
            <div className="bg-spotify-warning/10 border border-spotify-warning/30 rounded-spotify p-4">
              <p className="text-spotify-silver text-sm font-spotify">
                Users may cancel course enrollment before course access begins. Once course access is granted, cancellation may not be allowed.
              </p>
            </div>
          </section>

          {/* Section 7 - Non-Refundable Items */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">07</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Non-Refundable Items
            </h2>
            <div className="bg-spotify-negative/10 border border-spotify-negative/30 rounded-spotify p-4 mb-4">
              <p className="text-spotify-negative text-sm font-spotify font-bold">⚠ The following are non-refundable:</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Completed courses
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Downloadable materials
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Certificates issued
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Special discounted courses
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border col-span-full">
                <span className="text-spotify-negative">✕</span> Promotional offers
              </li>
            </ul>
          </section>

          {/* Section 8 - Organization Rights */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">08</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Organization Rights
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              PATEL College of Professional
Education & Technology Pvt. Ltd. reserves the right to:
            </p>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Approve or reject refund requests
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Modify refund policy
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Cancel courses if required
              </li>
            </ul>
          </section>

          {/* Section 9 - Contact */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">09</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-4">
              Contact Information
            </h2>
            <div className="bg-spotify-mid/50 rounded-spotify p-6 border border-spotify-border">
              <div className="space-y-3 text-spotify-silver font-spotify">
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-spotify-green font-bold min-w-[140px]">Organization Name:</span>
                  <span>PATEL College of Professional
Education & Technology Pvt. Ltd.</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-spotify-green font-bold min-w-[140px]">Email:</span>
                  <a href="mailto:skps.org@gmail.com" className="text-spotify-white hover:text-spotify-green transition">skps.org@gmail.com</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-spotify-green font-bold min-w-[140px]">Phone:</span>
                  <a href="tel:9687265333" className="text-spotify-white hover:text-spotify-green transition">9687265333</a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="text-spotify-green font-bold min-w-[140px]">Address:</span>
                  <span>Noida, Uttar Pradesh, India</span>
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 - Consent */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">10</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Consent
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-4">
              By purchasing or enrolling in our courses, you agree to this Refund Policy.
            </p>
            <div className="bg-spotify-green/10 border border-spotify-green/30 rounded-spotify p-4 md:p-6">
              <p className="text-spotify-green text-sm md:text-base italic font-spotify text-center">
                "PATEL College of Professional
Education & Technology Pvt. Ltd. — Transparent Refund Policy for all course purchases."
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

export default RefundPolicy;