/**
 * DualitySection — The Wavy vs Witny split-screen section.
 * Displays the two personas side by side (light/dark) with watermark text backgrounds,
 * descriptive copy for each, and a centered "VS" overlay with gold gradient styling.
 */
import React from 'react';

export const DualitySection: React.FC = () => {
  return (
    <section id="duality" className="relative min-h-screen flex flex-row overflow-hidden">
      <div className="flex-1 bg-cream text-near-black p-6 md:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025] select-none" aria-hidden="true">
          <span className="font-display text-[30vw] font-black">WAVY</span>
        </div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gold/15" />
        <div className="relative z-10 reveal">
          <h2 className="font-display text-[clamp(1.5rem,5vw,4.5rem)] font-black italic mb-8 text-text-dark-warm">Wavy</h2>
          <p className="font-body text-sm md:text-xl max-w-md leading-[1.85] font-light text-text-body-light">
            The stage is my sanctuary. The lights, the fashion, the energy—it's all a performance, but it's also my truth. Wavy is the version of me that belongs to the world.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-near-black text-cream p-6 md:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015] select-none" aria-hidden="true">
          <span className="font-display text-[30vw] font-black">WITNY</span>
        </div>
        <div className="relative z-10 reveal">
          <h2 className="font-display text-[clamp(1.5rem,5vw,4.5rem)] font-black italic mb-8 witny-gradient-text">Witny</h2>
          <p className="font-body text-sm md:text-xl max-w-md leading-[1.85] font-light text-[rgba(212,200,176,0.7)]">
            In the quiet of the studio, the masks come off. Witny is the raw emotion, the unfiltered thoughts, the soul behind the sound. It's where the music truly begins.
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
        <span className="font-display text-[clamp(2rem,6vw,5rem)] italic gold-gradient-text drop-shadow-[0_0_60px_rgba(201,169,110,0.15)]">VS</span>
      </div>
    </section>
  );
};
