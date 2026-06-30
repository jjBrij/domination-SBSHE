// src/components/StatsSection.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const stats = [
    { label: "Success Rate", value: 95, suffix: "%" },
    { label: "Students Trained", value: 754, suffix: "+" },
    { label: "Years of Excellence", value: 10, suffix: "+" },
    { label: "Centres Pan-India", value: 5, suffix: "+" }
  ];

  return (
    <section className="bg-spotify-black py-20 border-t border-spotify-border">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
          return (
            <div key={i} ref={ref} className="bg-spotify-dark p-8 rounded-spotify-card border border-spotify-border shadow-spotify-medium reveal text-center">
              <div className="text-4xl md:text-5xl font-bold text-spotify-green odometer">
                {inView && <CountUp start={0} end={s.value} duration={2.5} separator="," />}
                {s.suffix}
              </div>
              <div className="text-spotify-silver text-sm font-bold uppercase tracking-wider mt-2">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;