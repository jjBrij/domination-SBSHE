// src/components/TopPerformers.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TopPerformers = () => {
  const performers = [
    { name: "Aarav Sharma", course: "IT", badge: "IT Batch 2024" },
    { name: "Meena Reddy", placement: "Agri-Startup", course: "Agriculture", badge: "Agri Topper" },
    { name: "Rohit Kumar", course: "Para-medical", badge: "Medical Sciences" },
    { name: "Sneha Patel", course: "Medical Laboratory Technician (MLT)", badge: "Paramedical Science" },
    { name: "Priya Singh", placement: "ICAR", course: "Agriculture", badge: "Research Scholar" }
  ];

  // Set up Intersection Observer for this component
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Manually trigger reveal animations for elements already in view
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);

    // Set up observer for future scrolls
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    // Observe all .reveal elements
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-spotify-black py-20 border-t border-spotify-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-spotify-title font-bold text-white text-center">
          Top Performers
        </h2>
        <p className="text-spotify-silver text-center mt-4 font-spotify">
          Our students making waves across industries
        </p>
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="py-4"
          >
            {performers.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="bg-spotify-dark p-6 rounded-spotify-card border border-spotify-border card-spotify reveal h-full">
                  <div className="text-6xl mb-3 text-center">👤</div>
                  <h4 className="font-spotify-title text-white font-bold text-center text-lg">
                    {p.name}
                  </h4>
                  {p.placement && (
                    <p className="text-spotify-green text-sm text-center font-bold">
                      {p.placement}
                    </p>
                  )}
                  <p className="text-spotify-silver text-xs text-center mt-1 font-spotify">
                    {p.course}
                  </p>
                  {p.badge && (
                    <span className="inline-block bg-spotify-green/20 text-spotify-green text-xs font-bold px-3 py-1 rounded-full mt-3 w-full text-center">
                      {p.badge}
                    </span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopPerformers;