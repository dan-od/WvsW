/**
 * SiteFooter — Site-wide footer.
 * Displays copyright notice and design credit in a minimal horizontal layout
 * with a subtle top border separator.
 */
import React from 'react';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.15)] tracking-[0.3em]">© 2026 WAVY WITNY / WAVYNATION. ALL RIGHTS RESERVED.</p>
      <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.12)] tracking-[0.3em]">DESIGNED BY PRO-TECH NETWORK</p>
    </footer>
  );
};
