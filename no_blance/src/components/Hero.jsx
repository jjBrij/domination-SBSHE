// src/components/Hero.jsx (with fixed link)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import images from gallery folder
import img1 from '../assets/images/gallery/image10.jpg';
import img2 from '../assets/images/gallery/image2.jpg';
import img3 from '../assets/images/gallery/image3.jpg';
import img4 from '../assets/images/gallery/image1.jpg';
import img5 from '../assets/images/gallery/image11.jpg';

// Fallback images if gallery images fail to load
const fallbackImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState([]);
  const [imageErrors, setImageErrors] = useState({});

  // Images with fallback
  const sliderImages = [
    { id: 1, src: img1, fallback: fallbackImages[0], title: 'Campus Life', alt: 'Campus Life' },
    { id: 2, src: img2, fallback: fallbackImages[1], title: 'Training Session', alt: 'Training Session' },
    { id: 3, src: img3, fallback: fallbackImages[2], title: 'Classroom', alt: 'Classroom' },
    { id: 4, src: img4, fallback: fallbackImages[3], title: 'Students', alt: 'Students' },
    { id: 5, src: img5, fallback: fallbackImages[4], title: 'Graduation', alt: 'Graduation' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Manual navigation
  const goToSlide = (index) => {
    if (index !== currentImageIndex) {
      setCurrentImageIndex(index);
    }
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  // Handle image error - use fallback
  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  // Get image source with fallback
  const getImageSrc = (image) => {
    return imageErrors[image.id] ? image.fallback : image.src;
  };

  return (
    <section className="min-h-screen bg-spotify-black flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-spotify-mid border border-spotify-border rounded-full px-4 py-1 text-spotify-silver text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-spotify-green rounded-full animate-pulse"></span>
            India's Trusted Gateway To
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-spotify-title font-bold text-white leading-tight">
            <span className="text-spotify-green">Multi-Domain</span> <br/>
            Coaching Excellence
          </h1>
          <p className="text-spotify-silver text-lg font-spotify max-w-lg">
            754+ Students Trained Across IT, Agriculture & Healthcare
          </p>
          <div className="flex flex-wrap gap-4">
          
            <Link to="/courses">
              <button className="bg-spotify-green text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-spotify-green-dark transition uppercase tracking-button transform hover:scale-105 duration-200">
                Explore Courses
              </button>
            </Link>
            <button className="border border-spotify-border-light text-white font-bold px-8 py-3 rounded-full hover:bg-spotify-mid transition uppercase tracking-button transform hover:scale-105 duration-200">
              Free Counselling
            </button>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 text-xs text-spotify-silver font-bold uppercase tracking-wider pt-4">
            <span className="flex items-center gap-1">✓ NSDC Certified</span>
            <span className="flex items-center gap-1">🏛 Govt. Recognized</span>
            <span className="flex items-center gap-1">📅 Since 2015</span>
          </div>
        </div>

        {/* Right Content - Image Slider */}
        <div className="relative w-full">
          <div className="bg-spotify-dark rounded-spotify-card p-3 md:p-4 border border-spotify-border shadow-spotify-heavy">
            {/* Image Slider Container */}
            <div className="relative overflow-hidden rounded-lg" style={{ height: '280px', minHeight: '280px' }}>
              {/* Images */}
              {sliderImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={getImageSrc(image)}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() => handleImageError(image.id)}
                  />
                  {/* Image Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <p className="text-white font-bold text-sm md:text-base">{image.title}</p>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition duration-200 z-20"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition duration-200 z-20"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 z-20">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-spotify-green w-8'
                        : 'bg-white/50 w-2 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Stats Section Below Slider */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-spotify-black/50 rounded-lg p-3 hover:bg-spotify-black/70 transition">
                <div className="text-spotify-green font-bold text-xl md:text-2xl">95%</div>
                <div className="text-spotify-silver text-[10px] md:text-xs uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="bg-spotify-black/50 rounded-lg p-3 hover:bg-spotify-black/70 transition">
                <div className="text-spotify-green font-bold text-xl md:text-2xl">10+</div>
                <div className="text-spotify-silver text-[10px] md:text-xs uppercase tracking-wider">Years</div>
              </div>
              <div className="bg-spotify-black/50 rounded-lg p-3 hover:bg-spotify-black/70 transition">
                <div className="text-spotify-green font-bold text-xl md:text-2xl">5+</div>
                <div className="text-spotify-silver text-[10px] md:text-xs uppercase tracking-wider">Centres</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient Blobs */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-spotify-green/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-spotify-green/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;