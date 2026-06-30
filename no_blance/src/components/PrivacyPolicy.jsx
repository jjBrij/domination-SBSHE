// src/components/PrivacyPolicy.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-spotify-black min-h-screen font-spotify">



      {/* Navigation Bar - Spotify Style */}
      <div className="bg-spotify-black/95 backdrop-blur border-b border-spotify-border sticky top-0 z-10">

      </div>

      {/* Privacy Policy Content - Spotify Style */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header - Spotify Display Style */}
        <div className="border-b border-spotify-border pb-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 "></div>
           
          </div>
          <h1 className="font-spotify-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[0.9] tracking-tight">
            Privacy
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
              Effective: june  01, 2026
            </span>
            <span className="flex items-center gap-2 bg-spotify-mid px-4 py-2 rounded-full border-2 border-yellow-400 text-yellow-300 shadow-lg hover:shadow-yellow-500/50 transition-all duration-300">
  <span className="text-yellow-400"></span>
  Updated: July 06, 2026
</span>
          </div>
        </div>

        {/* Content Sections - Spotify Style */}
        <div className="space-y-6 md:space-y-8">
          {/* Section 1 */}
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
Education & Technology Pvt. Ltd. (“we,” “our,” or “us”) operates a Learning Management System (LMS) platform designed to provide educational content, health-related learning programs, training courses, certifications, and related services. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By accessing or using our platform, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">02</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Information We Collect
            </h2>
            <p className="text-spotify-silver text-sm md:text-base font-spotify mb-4">
              We may collect the following types of information:
            </p>

            <div className="space-y-4">
              <div className="bg-spotify-mid/50 rounded-spotify p-4 md:p-5 border border-spotify-border">
                <h3 className="font-spotify-title text-base md:text-lg font-bold text-spotify-green mb-2">
                  2.1 Personal Information
                </h3>
                <p className="text-spotify-silver text-sm font-spotify mb-2">
                  When you register or use our platform, we may collect:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-spotify-silver text-sm font-spotify">
                  <li className="flex items-center gap-2">• Full Name</li>
                  <li className="flex items-center gap-2">• Email Address</li>
                  <li className="flex items-center gap-2">• Phone Number</li>
                  <li className="flex items-center gap-2">• Address</li>
                  <li className="flex items-center gap-2">• Date of Birth</li>
                  <li className="flex items-center gap-2">• Gender</li>
                  <li className="flex items-center gap-2">• Educational Qualification</li>
                  <li className="flex items-center gap-2">• Profile Photo (Optional)</li>
                  <li className="flex items-center gap-2 col-span-full">• Payment Information (if applicable)</li>
                </ul>
              </div>

              <div className="bg-spotify-mid/50 rounded-spotify p-4 md:p-5 border border-spotify-border">
                <h3 className="font-spotify-title text-base md:text-lg font-bold text-spotify-green mb-2">
                  2.2 Non-Personal Information
                </h3>
                <p className="text-spotify-silver text-sm font-spotify mb-2">
                  We may automatically collect:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-spotify-silver text-sm font-spotify">
                  <li className="flex items-center gap-2">• IP Address</li>
                  <li className="flex items-center gap-2">• Browser Type</li>
                  <li className="flex items-center gap-2">• Device Information</li>
                  <li className="flex items-center gap-2">• Operating System</li>
                  <li className="flex items-center gap-2">• Website Usage Data</li>
                  <li className="flex items-center gap-2">• Login Time & Activity</li>
                </ul>
              </div>

              <div className="bg-spotify-mid/50 rounded-spotify p-4 md:p-5 border border-spotify-border">
                <h3 className="font-spotify-title text-base md:text-lg font-bold text-spotify-green mb-2">
                  2.3 Learning Information
                </h3>
                <p className="text-spotify-silver text-sm font-spotify mb-2">
                  As part of our Learning Management System, we may collect:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-spotify-silver text-sm font-spotify">
                  <li className="flex items-center gap-2">• Course Enrollments</li>
                  <li className="flex items-center gap-2">• Course Progress</li>
                  <li className="flex items-center gap-2">• Quiz Results</li>
                  <li className="flex items-center gap-2">• Assignments Submitted</li>
                  <li className="flex items-center gap-2">• Certificates Earned</li>
                  <li className="flex items-center gap-2">• Learning Preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">03</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              How We Use Your Information
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              We use your information for the following purposes:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green mt-0.5">▸</span>
                To create and manage user accounts
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green mt-0.5">▸</span>
                To provide access to courses and educational material
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green mt-0.5">▸</span>
                To track course progress and performance
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green mt-0.5">▸</span>
                To provide certifications
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green mt-0.5">▸</span>
                To improve platform functionality
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green mt-0.5">▸</span>
                To send important notifications
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green mt-0.5">▸</span>
                To provide customer support
              </li>
              <li className="flex items-start gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green mt-0.5">▸</span>
                To process payments (if applicable) & comply with legal obligations
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">04</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Sharing of Information
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-4">
              We do not sell or rent your personal information. However, we may share information in the following situations:
            </p>

            <div className="space-y-3">
              <div className="bg-spotify-mid/30 rounded-spotify p-4 border border-spotify-border">
                <h3 className="font-spotify-title font-bold text-spotify-green mb-2">
                  4.1 Service Providers
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-spotify-silver text-sm font-spotify">
                  <li className="flex items-center gap-2">• Hosting Providers</li>
                  <li className="flex items-center gap-2">• Payment Gateway Providers</li>
                  <li className="flex items-center gap-2">• Analytics Services</li>
                  <li className="flex items-center gap-2">• Email/SMS Service Providers</li>
                </ul>
              </div>

              <div className="bg-spotify-mid/30 rounded-spotify p-4 border border-spotify-border">
                <h3 className="font-spotify-title font-bold text-spotify-green mb-2">
                  4.2 Legal Requirements
                </h3>
                <p className="text-spotify-silver text-sm font-spotify">
                  By law, court orders, government authorities, or legal investigations
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">05</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Data Security
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              We implement appropriate security measures to protect your data including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Secure servers
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Encrypted data transmission
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Access control
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Regular monitoring
              </li>
            </ul>
            <p className="text-spotify-warning text-sm font-spotify mt-4 p-3 bg-spotify-mid/30 rounded-spotify border border-spotify-border">
              ⚠ However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">06</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">🍪</span> Improve user experience
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">📊</span> Analyze platform usage
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">🔐</span> Remember login sessions
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">🎯</span> Provide personalized content
              </li>
            </ul>
            <p className="text-spotify-silver text-sm font-spotify mt-3 p-3 bg-spotify-mid/30 rounded-spotify border border-spotify-border">
              Users may disable cookies through browser settings, but some features may not function properly.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">07</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Third-Party Links
            </h2>
            <p className="text-spotify-silver text-sm font-spotify">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. Users are encouraged to review the privacy policies of third-party sites.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">08</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Children's Privacy
            </h2>
            <p className="text-spotify-silver text-sm font-spotify">
              Our platform is designed for students, professionals, and learners. If users under 18 access the platform, parental or guardian consent may be required. We do not knowingly collect personal data from children under 13 without parental consent.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">09</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              User Rights
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              Users have the right to:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Access their personal data
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Update their information
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Request deletion of data
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Withdraw consent
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">✓</span> Request data correction
              </li>
            </ul>
            <p className="text-spotify-silver text-sm font-spotify mt-3 p-3 bg-spotify-mid/30 rounded-spotify border border-spotify-border">
              To exercise these rights, contact us using the details below.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">10</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Data Retention
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-3">
              We retain user information:
            </p>
            <ul className="space-y-2 text-spotify-silver text-sm font-spotify">
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">⏱</span> As long as the account is active
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">⚖️</span> As required for legal obligations
              </li>
              <li className="flex items-center gap-2 bg-spotify-mid/30 p-3 rounded-spotify border border-spotify-border">
                <span className="text-spotify-green">📜</span> For educational records and certifications
              </li>
            </ul>
            <p className="text-spotify-silver text-sm font-spotify mt-3 p-3 bg-spotify-mid/30 rounded-spotify border border-spotify-border">
              Users may request deletion at any time.
            </p>
          </section>

          {/* Section 11 */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">11</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Changes to Privacy Policy
            </h2>
            <p className="text-spotify-silver text-sm font-spotify">
              We may update this Privacy Policy periodically. Changes will be posted on this page with updated dates. Users are encouraged to review the policy regularly.
            </p>
          </section>

          {/* Section 12 - Contact */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">12</span>
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

          {/* Section 13 - Consent */}
          <section className="bg-spotify-dark rounded-spotify-card p-6 md:p-8 border border-spotify-border shadow-spotify-medium reveal">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-spotify-green font-bold text-xl">13</span>
              <div className="flex-1 h-px bg-spotify-border"></div>
            </div>
            <h2 className="font-spotify-title text-xl md:text-2xl font-bold text-white mb-3">
              Consent
            </h2>
            <p className="text-spotify-silver text-sm font-spotify mb-4">
              By using our website, you consent to this Privacy Policy and agree to its terms.
            </p>
            <div className="bg-spotify-green/10 border border-spotify-green/30 rounded-spotify p-4 md:p-6">
              <p className="text-spotify-green text-sm md:text-base italic font-spotify text-center">
                "
PATEL College of Professional
Education & Technology Pvt. Ltd. — Learning Management System Privacy Policy. Your data protection is our priority."
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

export default PrivacyPolicy;