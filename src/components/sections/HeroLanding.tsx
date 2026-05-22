/**
 * HeroLanding — Full-screen hero section with responsive video background.
 * Renders ONE <video> element (desktop or mobile) based on viewport width
 * so the browser only downloads a single video file, not both.
 */
import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

export const HeroLanding: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        webkit-playsinline="true"
        onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
        className="w-full h-full object-cover"
        poster={isMobile ? siteConfig.images.heroMobilePoster : siteConfig.images.heroDesktopPoster}
      >
        <source src={isMobile ? siteConfig.heroVideo.mobile : siteConfig.heroVideo.desktop} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute bottom-12 right-12 opacity-30">
        <span className="font-display text-[clamp(1.5rem,4vw,3rem)] italic gold-gradient-text tracking-widest">W.VS.W.</span>
      </div>
    </section>
  );
};
