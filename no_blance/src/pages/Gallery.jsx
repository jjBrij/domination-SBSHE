// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaTimes, 
  FaExpand, 
  FaTh, 
  FaBars,
  FaImages,
  FaCamera,
  FaUsers,
  FaCalendarAlt,
  FaLaptop,
  FaAward,
  FaSearch
} from 'react-icons/fa';

// Import gallery images from assets - Update these paths with your actual images
import img1 from '../assets/images/gallery/image1.jpg';
import img2 from '../assets/images/gallery/image2.jpg';
import img3 from '../assets/images/gallery/image3.jpg';
import img4 from '../assets/images/gallery/image4.jpg';
import img5 from '../assets/images/gallery/image5.jpg';
import img6 from '../assets/images/gallery/image6.jpg';
import img7 from '../assets/images/gallery/image7.jpg';
import img8 from '../assets/images/gallery/image8.jpg';
import img9 from '../assets/images/gallery/image9.jpg';
import img10 from '../assets/images/gallery/image10.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All', icon: <FaImages /> },
    { id: 'campus', label: 'Campus', icon: <FaCamera /> },
    { id: 'students', label: 'Students', icon: <FaUsers /> },
    { id: 'events', label: 'Events', icon: <FaCalendarAlt /> },
    { id: 'workshops', label: 'Workshops', icon: <FaLaptop /> },
    { id: 'achievements', label: 'Achievements', icon: <FaAward /> },
  ];

  const images = [
    { id: 1, category: '', title: '', src: img1, description: 'Beautiful campus overlooking the valley' },
    { id: 2, category: '', title: '', src: img2, description: 'Interactive classroom learning' },
    { id: 3, category: '', title: 'Annual Day 2024', src: img3, description: 'Annual day celebration with students' },
    { id: 4, category: '', title: '', src: img4, description: 'Hands-on Python programming workshop' },
    { id: 5, category: '', title: '', src: img5, description: 'Students receiving awards for excellence' },
    { id: 6, category: '', title: '', src: img6, description: 'Well-stocked library with digital resources' },
    { id: 7, category: '', title: '', src: img7, description: 'Students collaborating on projects' },
    { id: 8, category: '', title: '', src: img8, description: 'Annual sports day competition' },
    { id: 9, category: '', title: '', src: img9, description: 'Modern agriculture laboratory' },
    { id: 10, category: '', title: '', src: img10, description: 'Top performers of the year' },
  ];

  // Filter images based on category and search
  const filteredImages = images.filter(img => {
    const matchCategory = filter === 'all' || img.category === filter;
    const matchSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        img.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-spotify-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div>
            
            <h1 className="text-4xl font-spotify-title font-bold text-white mt-2">Gallery</h1>
            <p className="text-spotify-silver mt-1">Explore our campus life and events</p>
          </div>
          
          {/* View Toggle */}
          <div className="flex gap-2 bg-spotify-dark rounded-full p-1 border border-spotify-border">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition ${
                viewMode === 'grid' 
                  ? 'bg-spotify-green text-black' 
                  : 'text-spotify-silver hover:text-white'
              }`}
            >
              <FaTh size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition ${
                viewMode === 'list' 
                  ? 'bg-spotify-green text-black' 
                  : 'text-spotify-silver hover:text-white'
              }`}
            >
              <FaBars size={16} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-spotify-silver" />
          <input
            type="text"
            placeholder="Search gallery images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-spotify-dark border border-spotify-border rounded-pill py-3 pl-12 pr-4 text-white focus:outline-none focus:border-spotify-green transition"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-bold transition ${
                filter === cat.id
                  ? 'bg-spotify-green text-black'
                  : 'bg-spotify-dark text-spotify-silver hover:text-white border border-spotify-border'
              }`}
            >
              {cat.icon}
              {cat.label}
              {cat.id !== 'all' && (
                <span className="text-xs opacity-50">
                  ({images.filter(img => img.category === cat.id).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {filteredImages.length > 0 ? (
          <div className={`grid gap-4 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className={`bg-spotify-dark rounded-spotify-card border border-spotify-border overflow-hidden cursor-pointer hover:border-spotify-green transition group ${
                  viewMode === 'list' ? 'flex items-center gap-4 p-3' : ''
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <div className={`${
                  viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'aspect-square'
                } flex items-center justify-center bg-spotify-black group-hover:bg-spotify-mid/20 transition relative overflow-hidden`}>
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect fill="%23181818" width="100" height="100"/%3E%3Ctext x="50" y="50" font-family="Arial" font-size="14" fill="%23666666" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <FaExpand className="text-white text-2xl" />
                  </div>
                </div>
                <div className={`p-3 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-white font-bold text-sm">{img.title}</h3>
                  <p className="text-spotify-silver text-xs uppercase tracking-wider">{img.category}</p>
                  {viewMode === 'list' && (
                    <p className="text-spotify-silver text-sm mt-1">{img.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-spotify-silver py-16">
            <FaImages className="text-6xl mx-auto mb-4 text-spotify-border" />
            <p className="text-xl">No images found</p>
            <p className="text-sm mt-2">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-spotify-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="bg-spotify-dark rounded-spotify-card border border-spotify-border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-spotify-border">
                <div>
                  <h2 className="text-2xl font-spotify-title font-bold text-white">
                    {selectedImage.title}
                  </h2>
                  <span className="text-spotify-silver text-sm uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-spotify-silver hover:text-white transition p-2 hover:bg-spotify-mid/20 rounded-full"
                >
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="p-4">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="w-full rounded-spotify-card"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23181818" width="400" height="300"/%3E%3Ctext x="200" y="150" font-family="Arial" font-size="20" fill="%23666666" text-anchor="middle" dy=".3em"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                  }}
                />
                {selectedImage.description && (
                  <p className="text-spotify-silver mt-4">{selectedImage.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;