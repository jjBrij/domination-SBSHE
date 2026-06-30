 // src/components/TestimonialsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonialsData } from '../data/testimonials';

const TestimonialsSlider = () => {
  return (
    <section className="bg-brand-dark py-16 border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white text-center">
          Student Voices
        </h2>
        <p className="text-brand-muted text-center mt-4 font-inter">Real stories from our successful alumni</p>
        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-12"
          >
            {testimonialsData.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-brand-card p-8 rounded-xl border border-brand-border">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{t.photo}</span>
                    <div>
                      <h4 className="text-white font-poppins font-semibold">{t.name}</h4>
                      <p className="text-brand-accent text-sm">{t.course}</p>
                    </div>
                    <div className="ml-auto text-brand-amber text-xl">
                      {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                    </div>
                  </div>
                  <p className="text-brand-text font-inter text-lg leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="mt-4 text-brand-muted text-xs">
                    {t.year} · {t.placement}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;