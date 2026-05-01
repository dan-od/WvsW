/**
 * HeroLanding — Full-screen hero section with responsive video background.
 * Shows the Ghost Mode video loop with separate desktop and mobile sources,
 * poster image fallbacks, a gradient overlay, and the W.VS.W. watermark in the corner.
 */
import React from 'react';

export const HeroLanding: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        webkit-playsinline="true"
        onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
        className="w-full h-full object-cover hidden md:block"
        poster="/images/hero-desktop.png"
      >
        <source src="/videos/GHOST-MODE.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        webkit-playsinline="true"
        onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
        className="w-full h-full object-cover md:hidden"
        poster="/images/hero-mobile.png"
      >
        <source src="/videos/GHOST-MODE.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute bottom-12 right-12 opacity-30">
        <span className="font-display text-[clamp(1.5rem,4vw,3rem)] italic gold-gradient-text tracking-widest">W.VS.W.</span>
      </div>
    </section>
  );
};
