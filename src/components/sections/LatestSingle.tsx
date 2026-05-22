/**
 * LatestSingle — Ghost Mode single hero block.
 * Reverse-layout feature block with copy on the left (listen/watch CTAs)
 * and the Ghost Land EP cover art on the right. Highlights the latest single premiere.
 */
import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const LatestSingle: React.FC = () => {
  const single = siteConfig.latestSingle;
  return (
    <section className="bg-black py-24 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        <div className="w-full md:w-[55%] flex flex-col justify-center reveal">
          <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase mb-4">NEW VIDEO — PREMIERING TONIGHT</span>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] font-black italic mb-2 gold-gradient-text">{single.title.toUpperCase()}</h2>
          <p className="font-mono text-[0.6rem] text-[rgba(212,200,176,0.35)] uppercase tracking-[0.2em] mb-8">PROD. DOROTTIEE</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={single.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gold text-black font-mono text-[0.6rem] tracking-[0.2em] hover:bg-cream transition-colors text-center"
            >
              LISTEN NOW
            </a>
            <a
              href={single.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/15 text-cream font-mono text-[0.6rem] tracking-[0.2em] hover:bg-white hover:text-black transition-all text-center"
            >
              WATCH NOW
            </a>
          </div>
        </div>
        <div className="w-full md:w-[45%] aspect-square overflow-hidden shadow-[0_0_50px_rgba(201,169,110,0.1)] reveal">
          <img src={single.coverArt} alt={`${single.title} Cover`} width={640} height={640} loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
