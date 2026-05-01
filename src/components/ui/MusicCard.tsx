import React, { useState, useEffect } from 'react';
import { getPreviewUrl } from '../../lib/musicPreview';

interface MusicCardProps {
  id: string;
  title: string;
  year: string;
  img: string;
  searchQuery?: string;
  currentTrack: string | null;
  isPlaying: boolean;
  progress: number;
  onPlay: (id: string, previewUrl: string) => void;
  width?: number;
}

export const MusicCard: React.FC<MusicCardProps> = ({
  id, title, year, img, searchQuery,
  currentTrack, isPlaying, progress, onPlay,
  width = 160,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const isActive = currentTrack === id && isPlaying;
  const isPaused = currentTrack === id && !isPlaying;

  useEffect(() => {
    getPreviewUrl(searchQuery || title).then(url => setPreviewUrl(url));
  }, [title, searchQuery]);

  const handleClick = () => {
    if (previewUrl) onPlay(id, previewUrl);
  };

  return (
    <div className="flex-shrink-0 snap-start" style={{ width }}>
      <div
        className="relative overflow-hidden cursor-pointer"
        style={{
          width, height: width,
          border: isActive ? '1px solid rgba(201,169,110,0.4)' : '1px solid transparent',
        }}
        onClick={handleClick}
      >
        <img src={img} alt={`${title} album cover by Wavy Witny`} className="w-full h-full object-cover" />

        {/* Overlay + play/pause — always visible on mobile (hover:none), hover on desktop */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            background: isActive || isPaused ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.15)',
            opacity: 1,
          }}
        >
          <div
            className="md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            style={{
              width: 40, height: 40,
              border: '1.5px solid rgba(201,169,110,0.8)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)',
            }}
          >
            {isActive ? (
              <span style={{ color: '#c9a96e', fontSize: 14, letterSpacing: 3 }}>❚❚</span>
            ) : (
              <span style={{ color: '#c9a96e', fontSize: 16, marginLeft: 3 }}>▶</span>
            )}
          </div>
        </div>

        {/* Progress bar */}
        {(isActive || isPaused) && (
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/50">
            <div
              style={{ width: `${progress}%`, height: '100%', background: '#c9a96e', transition: 'width 0.1s linear' }}
            />
          </div>
        )}

        {/* No preview indicator */}
        {!previewUrl && (
          <div className="absolute bottom-2 left-2 font-mono text-[9px] text-gold/40 tracking-wider">
            PREVIEW N/A
          </div>
        )}
      </div>

      <p className={`font-display font-bold text-[1rem] mt-1.5 transition-colors ${isActive ? 'text-gold' : 'text-cream'}`}>
        {title}
      </p>
      <p className={`font-mono text-[0.55rem] uppercase tracking-widest mt-0.5 transition-colors ${isActive ? 'text-gold tracking-[0.15em]' : 'text-[rgba(212,200,176,0.35)]'}`}>
        {isActive ? 'NOW PLAYING' : year}
      </p>
    </div>
  );
};
