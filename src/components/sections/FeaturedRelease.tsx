/**
 * FeaturedRelease — W.VS.W. album hero block.
 * Showcases the debut album with large cover art on the left and
 * "OUT NOW" copy with Spotify/All Platforms streaming links on the right.
 */
import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { LazyIframe } from '../ui/LazyIframe';

export const FeaturedRelease: React.FC = () => {
  const album = siteConfig.featuredAlbum;
  return (
    <section className="bg-black py-24 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="w-full md:w-[45%] aspect-square shadow-[0_0_50px_rgba(201,169,110,0.1)] reveal overflow-hidden">
          <img src={album.coverArt} alt={`${album.title} Album Cover by ${siteConfig.artist.name}`} width={640} height={640} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-[55%] flex flex-col justify-center reveal">
          <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase mb-4">OUT NOW</span>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-black italic mb-2 gold-gradient-text">{album.title}</h1>
          <p className="font-mono text-[0.6rem] text-[rgba(212,200,176,0.35)] uppercase tracking-[0.2em] mb-4">{album.subtitle}</p>
          <p className="font-mono text-lg text-gold mb-8">STREAMING EVERYWHERE</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gold text-black font-mono text-[0.6rem] tracking-[0.2em] hover:bg-cream transition-colors text-center"
            >
              STREAM NOW
            </a>
            <a
              href={album.fvrFanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/15 text-cream font-mono text-[0.6rem] tracking-[0.2em] hover:bg-white hover:text-black transition-all text-center"
            >
              ALL PLATFORMS
            </a>
          </div>
          {siteConfig.features.showAppleMusicEmbed && (
            <div className="mt-8">
              <LazyIframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                frameBorder="0"
                height="450"
                style={{ width: '100%', overflow: 'hidden', borderRadius: 0, background: 'transparent' }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={`https://embed.music.apple.com/ca/album/w-vs-w/${album.appleMusicEmbedId}?theme=dark`}
                title={`${album.title} Album Player`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
