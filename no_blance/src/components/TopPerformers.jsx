
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TopPerformers = () => {
  const performers = [
    { name: "Aarav Sharma",  course: "IT", badge: "IT Batch 2024" },
    { name: "Meena Reddy", placement: "Agri-Startup", course: "Agriculture", badge: "Agri Topper" },
    { name: "Rohit Kumar", course: "Para-medical" },
    { name: "Sneha Patel", course: "Medical Laboratory Technician (MLT)", badge: "paramedical Science " },
    { name: "Priya Singh", placement: "ICAR", course: "Agriculture", badge: "Research Scholar" }
  ];

  return (
    <section className="bg-brand-dark py-16 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white text-center">
          Top Performers
        </h2>
        <p className="text-brand-muted text-center mt-4 font-inter">Our students making waves across industries</p>
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
                <div className="bg-brand-card p-6 rounded-xl border border-brand-border reveal h-full">
                  <div className="text-6xl mb-3 text-center">👤</div>
                  <h4 className="font-poppins text-white font-semibold text-center">{p.name}</h4>
                  <p className="text-brand-accent text-sm text-center">{p.placement}</p>
                  <p className="text-brand-muted text-xs text-center mt-1">{p.course}</p>
                  <span className="inline-block bg-brand-accent/20 text-brand-accent text-xs px-3 py-1 rounded-full mt-3 w-full text-center">
                    {p.badge}
                  </span>
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