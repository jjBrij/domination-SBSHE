// src/components/TermsConditions.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-spotify-black min-h-screen font-spotify">
      {/* Utility Bar - Spotify Style */}
      

      {/* Navigation Bar - Spotify Style */}
      <div className="bg-spotify-black/95 backdrop-blur border-b border-spotify-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Right side - Spotify style icons */}
          <div className="flex items-center gap-4">

          </div>
        </div>
      </div>

      {/* Terms & Conditions Content - Spotify Style */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header - Spotify Display Style */}
        <div className="border-b border-spotify-border pb-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-0.1 h-8 bg-spotify-green rounded-full"></div>
           
          </div>
          <h1 className="font-spotify-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[0.9] tracking-tight">
            Terms
            <br />
            <span className="text-spotify-green">& Conditions</span>
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
              Welcome to PATEL College of Professional
Education & Technology Pvt. Ltd.. These Terms and Conditions govern your use of our Learning Management System (LMS) platform, website, services, and educational content. By accessing or using our platform, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          {/* Section 2 - Definitions */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">02</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Definitions
            </h2>
            <ul className="space-y-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-start gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green font-bold min-w-[80px]">Platform</span>
                <span>Refers to PATEL College of Professional
Education & Technology Pvt. Ltd. website and services</span>
              </li>
              <li className="flex items-start gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green font-bold min-w-[80px]">User</span>
                <span>Refers to students, visitors, or registered members</span>
              </li>
              <li className="flex items-start gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green font-bold min-w-[80px]">Services</span>
                <span>Refers to educational courses, training, certifications, and learning materials</span>
              </li>
              <li className="flex items-start gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green font-bold min-w-[80px]">Organization</span>
                <span>Refers to PATEL College of Professional
Education & Technology Pvt. Ltd.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 - User Registration */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">03</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              User Registration
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              To access certain features, users may need to register and create an account. Users agree to:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify mb-4">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Provide accurate information
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Maintain confidentiality of login credentials
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Be responsible for account activity
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Notify us of unauthorized use
              </li>
            </ul>
            <div className="bg-spotify-warning/10 border border-spotify-warning/30 rounded-spotify p-4">
              <p className="text-spotify-warning text-sm font-spotify">
                ⚠ We reserve the right to suspend or terminate accounts that violate our terms.
              </p>
            </div>
          </section>

          {/* Section 4 - Use of Platform */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">04</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Use of Platform
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              Users agree to use the platform only for lawful purposes and educational use. Users must not:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify mb-4">
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative mt-0.5">✕</span> Share login credentials
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative mt-0.5">✕</span> Copy course content without permission
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative mt-0.5">✕</span> Upload harmful or illegal content
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative mt-0.5">✕</span> Attempt to hack or disrupt services
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative mt-0.5">✕</span> Misuse certificates or credentials
              </li>
            </ul>
            <div className="bg-spotify-negative/10 border border-spotify-negative/30 rounded-spotify p-4">
              <p className="text-spotify-negative text-sm font-spotify">
                ⚠ Violation may result in account suspension or termination.
              </p>
            </div>
          </section>

          {/* Section 5 - Course Enrollment */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">05</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Course Enrollment and Access
            </h2>
            <ul className="space-y-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green text-lg">📚</span>
                <span>Users may enroll in available courses</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green text-lg">⏱️</span>
                <span>Access duration may vary by course</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green text-lg">💰</span>
                <span>Some courses may be free or paid</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green text-lg">🎓</span>
                <span>Certificates may be issued after course completion</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green text-lg">🔄</span>
                <span>We reserve the right to modify course content at any time</span>
              </li>
            </ul>
          </section>

          {/* Section 6 - Payments */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">06</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Payments and Fees
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              If applicable:
            </p>
            <ul className="space-y-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Users must pay applicable fees</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Payments are processed via secure payment gateways</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Prices may change without prior notice</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Taxes may apply as per regulations</span>
              </li>
            </ul>
          </section>

          {/* Section 7 - Refund Policy */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">07</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Refund Policy
            </h2>
            <ul className="space-y-3 text-spotify-silver text-sm font-spotify mb-4">
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Refund eligibility depends on course type</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Refund requests must be submitted within 7 days (if applicable)</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>No refund after certificate issuance</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Processing time may vary</span>
              </li>
            </ul>
            <div className="bg-spotify-warning/10 border border-spotify-warning/30 rounded-spotify p-4">
              <p className="text-spotify-warning text-sm font-spotify">
                ⚠ Note: Organization reserves the right to approve or reject refund requests.
              </p>
            </div>
          </section>

          {/* Section 8 - Certificates */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">08</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Certificates
            </h2>
            <ul className="space-y-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Certificates are issued upon completion of course requirements</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Users must not misuse certificates</span>
              </li>
              <li className="flex items-center gap-3 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">•</span>
                <span>Organization reserves right to revoke certificates in case of misuse</span>
              </li>
            </ul>
          </section>

          {/* Section 9 - Intellectual Property */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">09</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Intellectual Property
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              All content including:
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-spotify-silver text-sm font-spotify mb-4">
              <li className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border text-center">📹 Videos</li>
              <li className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border text-center">📚 Study Materials</li>
              <li className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border text-center">🖼️ Logos</li>
              <li className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border text-center">✏️ Text</li>
              <li className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border text-center">🎨 Graphics</li>
            </ul>
            <div className="bg-spotify-mid/30 rounded-spotify p-4 border border-spotify-border">
              <p className="text-spotify-silver text-sm font-spotify">
                Are property of PATEL College of Professional
Education & Technology Pvt. Ltd.. Users may not reproduce, distribute, or copy content without written permission.
              </p>
            </div>
          </section>

          {/* Section 10 - Limitation of Liability */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">10</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Limitation of Liability
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              PATEL College of Professional
Education & Technology Pvt. Ltd. is not responsible for:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify mb-4">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Learning outcomes
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Career results
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Technical issues
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Internet interruptions
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-negative">✕</span> Third-party services
              </li>
            </ul>
            <div className="bg-spotify-warning/10 border border-spotify-warning/30 rounded-spotify p-4">
              <p className="text-spotify-warning text-sm font-spotify">
                ⚠ Users access the platform at their own risk.
              </p>
            </div>
          </section>

          {/* Section 11 - Privacy */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">11</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Privacy
            </h2>
            <p className="text-spotify-silver text-sm font-spotify">
              User data is handled according to our Privacy Policy. Please review our <Link to="/privacy-policy" className="text-spotify-green hover:underline">Privacy Policy</Link> for details.
            </p>
          </section>

          {/* Section 12 - Third-Party Links */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">12</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Third-Party Links
            </h2>
            <p className="text-spotify-silver text-sm font-spotify">
              Our platform may contain links to third-party websites. We are not responsible for third-party content or policies.
            </p>
          </section>

          {/* Section 13 - Account Termination */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">13</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Account Termination
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              We reserve the right to:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border text-center">
                <span className="text-spotify-negative block text-2xl">⛔</span>
                Suspend accounts
              </li>
              <li className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border text-center">
                <span className="text-spotify-negative block text-2xl">🚫</span>
                Terminate accounts
              </li>
              <li className="bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border text-center">
                <span className="text-spotify-negative block text-2xl">🗑️</span>
                Remove content
              </li>
            </ul>
            <p className="text-spotify-silver text-sm font-spotify mt-3 p-3 bg-spotify-mid/30 rounded-spotify border border-spotify-border">
              If users violate these terms.
            </p>
          </section>

          {/* Section 14 - Changes to Terms */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">14</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Changes to Terms
            </h2>
            <p className="text-spotify-silver text-sm font-spotify">
              We may update Terms & Conditions at any time. Updated terms will be posted on this page. Users are encouraged to review regularly.
            </p>
          </section>

          {/* Section 15 - Governing Law */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">15</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Governing Law
            </h2>
            <p className="text-spotify-silver text-sm font-spotify">
              These Terms & Conditions shall be governed by laws of India. Any disputes shall be subject to jurisdiction of Noida, Uttar Pradesh.
            </p>
          </section>

          {/* Section 16 - Contact */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">16</span>
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

          {/* Section 17 - Consent */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">17</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Consent
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-4">
              By using our website, you agree to these Terms & Conditions.
            </p>
            <div className="bg-spotify-green/10 border border-spotify-green/30 rounded-spotify p-4 md:p-6">
              <p className="text-spotify-green text-sm md:text-base italic font-spotify text-center">
                "PATEL College of Professional
Education & Technology Pvt. Ltd. — Learning Management System. Read our terms carefully before using our services."
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

export default TermsConditions;