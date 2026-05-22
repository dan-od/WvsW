/**
 * GallerySection — Photo gallery grid (#gallery anchor).
 * Displays a responsive masonry-style grid of editorial and live photos
 * with grayscale-to-color hover effects and gradient overlays.
 */
import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const GallerySection: React.FC = () => {
  const images = siteConfig.images.gallery;

  return (
    <section id="gallery" className="bg-ghost py-24 px-6">
      <div className="max-w-7xl mx-auto mb-16 reveal">
        <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase">Visuals</span>
        <h2 className="font-display text-[clamp(2rem,6vw,3rem)] md:text-7xl italic gold-gradient-text mt-4">Gallery</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className={`relative overflow-hidden group reveal ${img.span}`}>
            <img
              src={img.src}
              alt={img.alt}
              width={800}
              height={800}
              loading="lazy"
              className="w-full h-full object-cover object-center grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};
