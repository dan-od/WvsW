/**
 * GallerySection — Photo gallery grid (#gallery anchor).
 * Displays a responsive masonry-style grid of editorial and live photos
 * with grayscale-to-color hover effects and gradient overlays.
 */
import React from 'react';

export const GallerySection: React.FC = () => {
  const images = [
    { src: '/images/gallery/1.png', span: 'md:col-span-2 md:row-span-2', alt: 'Wavy Witny editorial portrait' },
    { src: '/images/gallery/2.png', span: '', alt: 'Wavy Witny live event' },
    { src: '/images/gallery/3.png', span: '', alt: 'Wavy Witny side profile' },
    { src: '/images/gallery/4.png', span: 'md:col-span-2', alt: 'Wavy Witny Ghost Mode' },
    { src: '/images/gallery/5.png', span: '', alt: 'Wavy Witny fashion shoot' },
    { src: '/images/gallery/6.png', span: '', alt: 'Wavy Witny close-up' },
  ];

  return (
    <section id="gallery" className="bg-ghost py-24 px-6">
      <div className="max-w-7xl mx-auto mb-16 reveal">
        <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase">Visuals</span>
        <h2 className="font-display text-[clamp(2rem,6vw,3rem)] md:text-7xl italic gold-gradient-text mt-4">Gallery</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className={`relative overflow-hidden group reveal ${img.span}`}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};
