/**
 * MoreMusic — "More Music" horizontal scroll + "More Videos" grid section.
 * Music cards use inline 30-second iTunes previews with play/pause overlay.
 * Video cards open in a fullscreen modal with YouTube embed.
 */
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { trackVideoPlay } from '../../lib/analytics';

export const MoreMusic: React.FC = () => {
  const moreMusicRef = useRef<HTMLDivElement>(null);
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activePlayer, setActivePlayer] = useState<string | null>(null);

  const releases = [
    { name: 'W.VS.W.', year: '2026', img: 'https://i.scdn.co/image/ab67616d0000b273c5529bf3be71207d222c17ac', appleId: '1884983423', appleSlug: 'w-vs-w' },
    { name: 'Wassup', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273a651d31e122474114d110476', appleId: '1855070072', appleSlug: 'wassup-single' },
    { name: 'Ghost Land EP', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273bab2846b6ac48e55781befba', appleId: '1809930207', appleSlug: 'ghost-land-ep' },
    { name: 'Nothing', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273072c09e0f5dd7417bbb6644f', appleId: '1824884262', appleSlug: 'nothing-feat-ralph-nyoni-single' },
    { name: 'Girl of My Dreams', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b2737a59d6a544566ee53962c70d', appleId: '1796246342', appleSlug: 'girl-of-my-dreams-single' },
    { name: 'Something To Say', year: '2024', img: 'https://i.scdn.co/image/ab67616d0000b2735282f56dae58dbda0c7d1d49', appleId: '1764625671', appleSlug: 'something-to-say-single' },
    { name: 'Focus', year: '2023', img: 'https://i.scdn.co/image/ab67616d0000b273f80edc3b9d4d014f5cce6c93', appleId: '1663987646', appleSlug: 'focus-single' },
    { name: 'Soldier', year: '2021', img: 'https://i.scdn.co/image/ab67616d0000b273c91ac03100666378cb050df3', appleId: '1817151977', appleSlug: 'soldier-feat-jason-chung-single' },
  ];

  const videos = [
    { title: 'Ghost Mode (Official Video)', videoId: 'sHRRSNv-E8o', views: 'Premiere' },
    { title: 'Girl of My Dreams (Official Video)', videoId: 'xT4ynjSqMhg', views: '124K views' },
    { title: 'No Reply (Official Video)', videoId: '94paoFm7fgQ', views: '10K views' },
    { title: 'Something To Say (Official Video)', videoId: '5rB31Q_BdwI', views: '5.3K views' },
    { title: 'Soldier ft. Jason Chung (Official Video)', videoId: '2mMSixaJmOA', views: '3.3K views' },
    { title: 'Nothing ft. Ralph Nyoni (Official Video)', videoId: 'sDxtmMxInBA', views: '1.7K views' },
    { title: 'Focus (Official Music Video)', videoId: 'Nst2yFP57_w', views: '424 views' },
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* PART A: MORE MUSIC */}
        <div className="mb-24">
          <h3 className="font-display text-[clamp(1.2rem,3vw,2rem)] italic gold-gradient-text mb-12 reveal">MORE MUSIC FROM WAVY WITNY</h3>
          <div className="relative reveal">
            <button
              onClick={() => moreMusicRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/70 backdrop-blur text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all hidden md:flex"
            >
              <ChevronLeft size={20} />
            </button>
            <div ref={moreMusicRef} className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
              {releases.map((release, i) => (
                <div
                  key={i}
                  onClick={() => setActivePlayer(activePlayer === release.appleId ? null : release.appleId)}
                  className={`flex-shrink-0 w-[160px] md:w-[180px] group snap-start cursor-pointer p-2 transition-all ${activePlayer === release.appleId ? 'border border-gold/50' : ''}`}
                >
                  <div className="aspect-square mb-4 group-hover:scale-105 transition-transform duration-500 shadow-xl overflow-hidden">
                    <img src={release.img} alt={`${release.name} album cover by Wavy Witny`} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-display text-[1rem] font-bold text-cream group-hover:text-gold transition-colors">{release.name}</p>
                  <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.35)] uppercase tracking-widest">{release.year}</p>
                  <AnimatePresence>
                    {activePlayer === release.appleId && (
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
                          src={`https://embed.music.apple.com/ca/album/${release.appleSlug}/${release.appleId}?theme=dark`}
                          title={`Play ${release.name}`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <button
              onClick={() => moreMusicRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/70 backdrop-blur text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all hidden md:flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* PART B: VIDEOS */}
        <div>
          <h3 className="font-display text-[clamp(1.2rem,3vw,2rem)] italic gold-gradient-text mb-12 reveal">MORE VIDEOS FROM WAVY WITNY</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {videos.slice(0, showAllVideos ? videos.length : 2).map((video, i) => (
              <div key={i} onClick={() => { trackVideoPlay(video.title); setActiveVideo(video.videoId); window.dispatchEvent(new CustomEvent('video-playing', { detail: true })); }} className="group block cursor-pointer">
                <div className="aspect-video bg-near-black relative overflow-hidden mb-4">
                  <img src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} alt={`${video.title} — Wavy Witny YouTube thumbnail`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-display text-[1rem] md:text-lg font-bold text-cream group-hover:text-gold transition-colors uppercase">{video.title}</h4>
                    <p className="font-mono text-[0.5rem] text-[rgba(212,200,176,0.3)] uppercase tracking-widest mt-1">{video.views}</p>
                  </div>
                  <span className="font-mono text-[0.6rem] text-gold tracking-[0.2em]">WATCH NOW</span>
                </div>
              </div>
            ))}
          </div>
          {activeVideo && (
            <div
              className="fixed inset-0 z-[9997] bg-black/95 flex items-center justify-center p-4 md:p-8"
              onClick={() => { setActiveVideo(null); window.dispatchEvent(new CustomEvent('video-playing', { detail: false })); }}
            >
              <div className="relative w-full max-w-5xl aspect-video" onClick={e => e.stopPropagation()}>
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video player"
                />
                <button
                  onClick={() => { setActiveVideo(null); window.dispatchEvent(new CustomEvent('video-playing', { detail: false })); }}
                  aria-label="Close video"
                  className="absolute -top-10 right-0 text-gold font-mono text-sm tracking-widest hover:text-white transition-colors"
                >
                  CLOSE ✕
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => setShowAllVideos(!showAllVideos)}
            className="w-full py-4 border border-gold/20 text-gold font-mono text-[0.6rem] tracking-[0.2em] hover:bg-gold hover:text-black transition-all mt-8"
          >
            {showAllVideos ? 'SHOW LESS' : 'SHOW ALL VIDEOS'}
          </button>
        </div>
      </div>
    </section>
  );
};
