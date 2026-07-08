// src/components/StatsSection.jsx
import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const stats = [
    { label: "Success Rate", value: 95, suffix: "%" },
    { label: "Students Trained", value: 754, suffix: "+" },
    { label: "Years of Excellence", value: 10, suffix: "+" },
    { label: "Centres Pan-India", value: 5, suffix: "+" }
  ];

  // Set up Intersection Observer for reveal animations
  useEffect(() => {
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
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const { ref, inView } = useInView({ 
            triggerOnce: true, 
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px' // Helps trigger earlier
          });
          
          return (
            <div 
              key={i} 
              ref={ref} 
              className="bg-spotify-dark p-8 rounded-spotify-card border border-spotify-border shadow-spotify-medium reveal text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-spotify-green odometer">
                {inView && <CountUp start={0} end={s.value} duration={2.5} separator="," />}
                {s.suffix}
              </div>
              <div className="text-spotify-silver text-sm font-bold uppercase tracking-wider mt-2">
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;