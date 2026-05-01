/**
 * FeaturedRelease — W.VS.W. album hero block.
 * Showcases the debut album with large cover art on the left and
 * "OUT NOW" copy with Spotify/All Platforms streaming links on the right.
 */
import React from 'react';

export const FeaturedRelease: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="w-full md:w-[45%] aspect-square shadow-[0_0_50px_rgba(201,169,110,0.1)] reveal overflow-hidden">
          <img src="https://i.scdn.co/image/ab67616d00001e02c5529bf3be71207d222c17ac" alt="W.VS.W. Album Cover by Wavy Witny" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-[55%] flex flex-col justify-center reveal">
          <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase mb-4">OUT NOW</span>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-black italic mb-2 gold-gradient-text">W.VS.W.</h1>
          <p className="font-mono text-[0.6rem] text-[rgba(212,200,176,0.35)] uppercase tracking-[0.2em] mb-4">WAVY VS. WITNY</p>
          <p className="font-mono text-lg text-gold mb-8">STREAMING EVERYWHERE</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://open.spotify.com/album/31e8NgM9P2HAgGe6Fc5KIq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gold text-black font-mono text-[0.6rem] tracking-[0.2em] hover:bg-cream transition-colors text-center"
            >
              STREAM NOW
            </a>
            <a
              href="https://www.fvr.fan/wavywitny"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/15 text-cream font-mono text-[0.6rem] tracking-[0.2em] hover:bg-white hover:text-black transition-all text-center"
            >
              ALL PLATFORMS
            </a>
          </div>
          <div className="mt-8">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="450"
              style={{ width: '100%', overflow: 'hidden', borderRadius: 0, background: 'transparent' }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/ca/album/w-vs-w/1884983423?theme=dark"
              title="W.VS.W. Album Player"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
