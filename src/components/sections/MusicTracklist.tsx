/**
 * MusicTracklist — The main Music section (#music anchor).
 * Contains the W.VS.W. tracklist (collapsible, shows 6 by default, expandable to all 15),
 * the discography horizontal scroll carousel with inline audio preview players,
 * and a streaming platform link bar.
 */
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { trackStreamingClick } from '../../lib/analytics';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const MusicTracklist: React.FC = () => {
  const [showAllTracks, setShowAllTracks] = useState(false);
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const singlesRef = useRef<HTMLDivElement>(null);

  const tracks = [
    { id: '01', title: 'Ghost Mode', credit: '' },
    { id: '02', title: 'How I Feel', credit: '' },
    { id: '03', title: 'Trying', credit: '' },
    { id: '04', title: 'Blueprint', credit: '' },
    { id: '05', title: 'Wesh', credit: 'ft. KEAN!' },
    { id: '06', title: 'Wassup', credit: '' },
    { id: '07', title: 'Ti Cheri', credit: 'ft. JJuZyy' },
    { id: '08', title: 'With You', credit: 'ft. Nai' },
    { id: '09', title: 'Slide', credit: '' },
    { id: '10', title: '4 AM in Toronto', credit: '' },
    { id: '11', title: 'Matrix', credit: 'ft. TGK' },
    { id: '12', title: 'On Me', credit: '' },
    { id: '13', title: 'Matter', credit: 'ft. Ralph Nyoni' },
    { id: '14', title: 'Worth Living', credit: '' },
    { id: '15', title: '11.01', credit: '(Outro)' },
  ];

  const singles = [
    { title: 'W.VS.W.', year: '2026', img: 'https://i.scdn.co/image/ab67616d0000b273c5529bf3be71207d222c17ac', appleId: '1884983423', appleSlug: 'w-vs-w' },
    { title: 'Wassup', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273a651d31e122474114d110476', appleId: '1855070072', appleSlug: 'wassup-single' },
    { title: 'Ghost Land EP', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273bab2846b6ac48e55781befba', appleId: '1809930207', appleSlug: 'ghost-land-ep' },
    { title: 'Nothing', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273072c09e0f5dd7417bbb6644f', appleId: '1824884262', appleSlug: 'nothing-feat-ralph-nyoni-single' },
    { title: 'Girl of My Dreams', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b2737a59d6a544566ee53962c70d', appleId: '1796246342', appleSlug: 'girl-of-my-dreams-single' },
    { title: 'Something To Say', year: '2024', img: 'https://i.scdn.co/image/ab67616d0000b2735282f56dae58dbda0c7d1d49', appleId: '1764625671', appleSlug: 'something-to-say-single' },
    { title: 'Focus', year: '2023', img: 'https://i.scdn.co/image/ab67616d0000b273f80edc3b9d4d014f5cce6c93', appleId: '1663987646', appleSlug: 'focus-single' },
    { title: 'Soldier', year: '2021', img: 'https://i.scdn.co/image/ab67616d0000b273c91ac03100666378cb050df3', appleId: '1817151977', appleSlug: 'soldier-feat-jason-chung-single' },
  ];

  const platforms = [
    { name: 'Spotify', url: 'https://open.spotify.com/artist/60FotEIEBnJSB4ZW1sS6Ue' },
    { name: 'Apple Music', url: 'https://music.apple.com/ca/artist/wavy-witny/1571096565' },
    { name: 'YouTube', url: 'https://www.youtube.com/@wavywitny' },
    { name: 'Tidal', url: '#' },
    { name: 'Audiomack', url: '#' },
  ];

  return (
    <section id="music" className="bg-black py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* SUB-SECTION: W.VS.W. (THE MAIN EVENT) */}
        <div className="reveal">
          <div className="mb-12">
            <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase block mb-4">STREAMING NOW</span>
            <h2 className="font-display text-[clamp(2rem,6vw,3rem)] md:text-7xl italic gold-gradient-text mb-4 uppercase">W.VS.W. (Wavy vs. Witny)</h2>
            <p className="font-mono text-[0.6rem] md:text-xs text-[rgba(212,200,176,0.35)] uppercase tracking-widest">The debut album — 15 tracks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {tracks.slice(0, showAllTracks ? tracks.length : 6).map((track) => (
              <div key={track.id} className="group relative flex items-center justify-between py-5 border-b border-white/5 hover:border-gold/30 transition-all duration-500">
                <div className="flex items-center gap-6 md:gap-8">
                  <span className="font-mono text-[1.1rem] md:text-2xl font-bold text-[#c0392b] w-8">{track.id}</span>
                  <div>
                    <h3 className="font-display text-[1rem] md:text-[1.1rem] font-bold text-cream group-hover:text-gold transition-colors">{track.title}</h3>
                    {track.credit && (
                      <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.35)] uppercase tracking-[0.2em] mt-1">{track.credit}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="font-mono text-xs opacity-10 group-hover:opacity-30 transition-opacity">—</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowAllTracks(!showAllTracks)}
            aria-label="Show all 15 tracks"
            className="w-full py-4 border border-gold/20 text-gold font-mono text-[0.6rem] tracking-[0.2em] hover:bg-gold hover:text-black transition-all mt-4"
          >
            {showAllTracks ? 'SHOW LESS' : 'SHOW ALL 15 TRACKS'}
          </button>
          <div className="flex justify-center mt-8 mb-24">
            <a
              href="https://open.spotify.com/album/31e8NgM9P2HAgGe6Fc5KIq"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border border-gold text-gold font-mono text-sm tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
            >
              Stream W.VS.W.
            </a>
          </div>
        </div>

        {/* SUB-SECTION: DISCOGRAPHY (HORIZONTAL SCROLL) */}
        <div className="reveal mb-24">
          <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold tracking-[0.5em] uppercase mb-8 block">DISCOGRAPHY</span>
          <div className="relative">
            <button
              onClick={() => singlesRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/70 backdrop-blur text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all hidden md:flex"
            >
              <ChevronLeft size={20} />
            </button>
            <div ref={singlesRef} className="singles-scroll flex overflow-x-auto gap-[1.2rem] pb-8 no-scrollbar snap-x snap-mandatory">
              {singles.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActivePlayer(activePlayer === item.appleId ? null : item.appleId)}
                  className={`flex-shrink-0 w-[160px] md:w-[200px] snap-start group cursor-pointer p-2 transition-all ${activePlayer === item.appleId ? 'border border-gold/50' : ''}`}
                >
                  <div className="aspect-square mb-4 overflow-hidden relative shadow-xl">
                    <img src={item.img} alt={`${item.title} album cover by Wavy Witny`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h4 className="font-display font-bold text-cream text-[1rem] mb-1 group-hover:text-gold transition-colors">{item.title}</h4>
                  <p className="font-mono text-[0.6rem] text-[rgba(212,200,176,0.35)] uppercase tracking-widest">{item.year}</p>
                  <AnimatePresence>
                    {activePlayer === item.appleId && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2"
                      >
                        <iframe
                          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                          frameBorder="0"
                          height="175"
                          style={{ width: '100%', overflow: 'hidden', borderRadius: 0, background: 'transparent' }}
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                          src={`https://embed.music.apple.com/ca/album/${item.appleSlug}/${item.appleId}?theme=dark`}
                          title={`Play ${item.title}`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="flex-shrink-0 w-12" />
            </div>
            <button
              onClick={() => singlesRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/70 backdrop-blur text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all hidden md:flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap justify-center gap-8 md:gap-16 border-y border-white/10 py-8 reveal">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackStreamingClick(platform.name.toLowerCase())}
              className="font-mono text-xs uppercase tracking-widest hover:text-gold transition-colors"
            >
              {platform.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
