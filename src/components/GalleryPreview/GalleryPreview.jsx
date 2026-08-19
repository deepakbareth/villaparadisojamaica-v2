import React, { useState, useEffect } from 'react';
import { ArrowRight, Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

import i1 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i1.webp';
import i2 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i2.webp';
import i3 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i3.webp';
import i4 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i4.webp';
import i6 from '../../assets/villaparadisojamaica/villaparadisojamaica/video/i6.webp';

const galleryImages = [
  { id: 0, src: i1, alt: "Villa Aerial View", type: "featured" },
  { id: 1, src: i2, alt: "Villa Pool View", type: "regular" },
  { id: 2, src: i3, alt: "Villa Exterior", type: "regular" },
  { id: 3, src: i4, alt: "Villa Interior", type: "regular" },
  { id: 4, src: i6, alt: "Villa Surroundings", type: "regular" },
];

const GalleryPreview = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#fcfcfc] py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-gray-700 uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-4 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              A Glimpse of Paradise
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Explore the Villa Beauty
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#a2f2ea] to-[#0f766e] rounded-full mb-10"></div>
          </div>

          <button className="bg-[#0f766e] hover:bg-[#003d52]  text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group w-fit">
            VIEW FULL GALLERY
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px] lg:h-[700px]">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              className={`
                cursor-pointer overflow-hidden group relative shadow-md
                ${img.type === 'featured' ? 'md:col-span-2 md:row-span-2 rounded-[2rem] h-[400px] md:h-full shadow-lg' : 'md:col-span-1 md:row-span-1 rounded-3xl h-[250px] md:h-full'}
              `}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none"></div>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Optional hover icon to indicate it's clickable */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                  <ImageIcon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-up [animation-duration:300ms]"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300 z-50"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300 z-50 hidden md:flex"
            onClick={prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-full max-w-6xl max-h-[85vh] px-4 md:px-24 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm md:rounded-lg animate-fade-up [animation-duration:400ms]"
            />

            {/* Image Counter */}
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-widest">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300 z-50 hidden md:flex"
            onClick={nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Prev/Next controls (visible only on small screens) */}
          <div className="absolute bottom-8 left-0 w-full flex justify-center gap-6 md:hidden z-50" onClick={(e) => e.stopPropagation()}>
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white" onClick={prevImage}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white" onClick={nextImage}>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPreview;
