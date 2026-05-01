/**
 * MerchSection — Merch teaser and email signup section (#merch anchor).
 * Light-themed section with a "WW" watermark background, "Coming Soon" headline
 * for the W.VS.W. Collection, and an email notification form for the merch drop.
 */
import React from 'react';
import { EmailSignup } from '../ui/EmailSignup';

export const MerchSection: React.FC = () => {
  return (
    <section id="merch" className="bg-cream py-32 px-6 md:px-24 relative overflow-hidden">
      {/* Subtle Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none" aria-hidden="true">
        <span className="font-display text-[50vw] font-black text-near-black">WW</span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
        <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold-deep tracking-[0.35em] md:tracking-[0.5em] uppercase block mb-6">COMING SOON</span>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] md:text-8xl italic text-text-dark-warm mb-4 uppercase">Official Merch</h2>
        <p className="font-display text-2xl md:text-3xl italic text-gold-deep mb-12">The W.VS.W. Collection</p>

        <div className="max-w-md mx-auto">
          <p className="font-body text-lg text-text-body-light mb-8">
            Be the first to know when the limited edition W.VS.W. collection drops. Exclusive vinyl, apparel, and accessories.
          </p>
          <EmailSignup source="merch" buttonText="NOTIFY ME" darkMode={false} />
          <p className="font-mono text-[0.5rem] text-near-black/25 tracking-widest mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};
