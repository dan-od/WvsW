/**
 * PerformancesSection — The Stage / live performances section (#performances anchor).
 * Includes the Album Premier Night YouTube embed, performance stats (cities/stages/active years),
 * a horizontal scroll of live performance photos, the W.VS.W. album drop highlight card,
 * and the booking email CTA.
 */
import React, { useState } from 'react';

export const PerformancesSection: React.FC = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const photos = [
    { src: '/images/gallery/1.png', alt: 'Wavy Witny live moment 1' },
    { src: '/images/gallery/2.png', alt: 'Wavy Witny live moment 2' },
    { src: '/images/gallery/3.png', alt: 'Wavy Witny live moment 3' },
    { src: '/images/gallery/4.png', alt: 'Wavy Witny live moment 4' },
    { src: '/images/gallery/5.png', alt: 'Wavy Witny live moment 5' },
  ];

  return (
    <section id="performances" className="bg-near-black py-24 px-6 md:px-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16 reveal">
          <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase">Live</span>
          <h2 className="font-display text-[clamp(2rem,6vw,3rem)] md:text-7xl italic gold-gradient-text mt-4">The Stage</h2>
        </div>

        {/* Video Reel — YouTube Embed */}
        <div className="reveal mb-16">
          <div className="relative w-full aspect-video bg-black overflow-hidden">
            {videoPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/zZeCl-MvQio?autoplay=1&rel=0&modestbranding=1"
                className="w-full h-full absolute inset-0 border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Album Premier Night - Official Recap"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => {
                  setVideoPlaying(true);
                  window.dispatchEvent(new CustomEvent('video-playing', { detail: true }));
                }}
              >
                <img
                  src="https://img.youtube.com/vi/zZeCl-MvQio/hqdefault.jpg"
                  alt="Album Premier Night recap"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute w-20 h-20 rounded-full border border-gold/50 flex items-center justify-center bg-black/30 backdrop-blur-sm group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gold group-hover:text-black ml-1"><polygon points="5,3 19,12 5,21" /></svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Performance Stats Row */}
        <div className="reveal mb-16">
          <div className="grid grid-cols-3 gap-8 py-12 border-y border-white/5">
            <div className="text-center">
              <p className="font-ui text-[clamp(2rem,5vw,3.5rem)] text-gold leading-none">4+</p>
              <p className="font-mono text-[0.5rem] md:text-[0.55rem] text-[rgba(212,200,176,0.25)] uppercase tracking-[0.3em] mt-2">Cities</p>
            </div>
            <div className="text-center">
              <p className="font-ui text-[clamp(2rem,5vw,3.5rem)] text-gold leading-none">10+</p>
              <p className="font-mono text-[0.5rem] md:text-[0.55rem] text-[rgba(212,200,176,0.25)] uppercase tracking-[0.3em] mt-2">Stages</p>
            </div>
            <div className="text-center">
              <p className="font-ui text-[clamp(2rem,5vw,3.5rem)] text-gold leading-none">'24—'26</p>
              <p className="font-mono text-[0.5rem] md:text-[0.55rem] text-[rgba(212,200,176,0.25)] uppercase tracking-[0.3em] mt-2">Active</p>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll — Performance Photos */}
        <div className="reveal mb-16">
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x snap-mandatory">
            {photos.map((photo, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] md:w-[350px] aspect-[4/3] bg-ghost snap-start overflow-hidden group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            ))}
            <div className="flex-shrink-0 w-8" />
          </div>
        </div>

        {/* Album Drop Highlight */}
        <div className="reveal mb-16 p-8 md:p-12 border border-gold/20 bg-black/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="font-mono text-[0.6rem] text-gold tracking-[0.4em] uppercase block mb-2">OUT NOW</span>
            <h3 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold italic text-cream mb-2">W.VS.W. ALBUM</h3>
            <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.35)] tracking-widest uppercase mb-6">15 tracks — streaming everywhere</p>
            <a
              href="https://www.fvr.fan/wavywitny"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-gold text-gold font-mono text-[0.6rem] tracking-[0.2em] hover:bg-gold hover:text-black transition-all"
            >
              STREAM NOW
            </a>
          </div>
        </div>

        {/* Booking Info */}
        <div className="reveal text-center pt-8">
          <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.3)] tracking-[0.4em] uppercase mb-4">For Booking Inquiries</p>
          <a href="mailto:booking@wavywity.com" className="font-display text-xl md:text-2xl italic text-gold border-b border-gold/30 hover:border-gold transition-colors pb-1">
            booking@wavywity.com
          </a>
        </div>

      </div>
    </section>
  );
};
