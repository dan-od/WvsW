import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BackgroundMusicProps {
  autoStart?: boolean;
  cookieBarVisible?: boolean;
}

/**
 * BackgroundMusic — Floating mute/unmute toggle for ambient audio.
 * When autoStart is true, plays automatically at low volume (0.3) after gate click.
 * Equalizer bars react to real audio frequency data via Web Audio API.
 * Audio fades in/out smoothly. Pauses when tab is hidden. Preference saved in localStorage.
 */
export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ autoStart = false, cookieBarVisible = false }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const hasShownToast = useRef(false);

  // Web Audio API refs for real-time frequency analysis
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);

  const wasPlayingRef = useRef(false);

  const MAX_VOLUME = 0.3;

  const fadeVolume = (target: number, duration: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const steps = 20;
    const stepTime = duration / steps;
    const stepSize = (target - audio.volume) / steps;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      audio.volume = Math.min(MAX_VOLUME, Math.max(0, audio.volume + stepSize));
      if (step >= steps) clearInterval(interval);
    }, stepTime);
  };

  // Connect audio element to Web Audio API analyser (once)
  const setupAnalyser = () => {
    if (audioContextRef.current || !audioRef.current) return;
    const ctx = new AudioContext();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 64;
    const source = ctx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    audioContextRef.current = ctx;
    analyserRef.current = analyser;
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
  };

  // Animation loop — reads frequency data and sets bar heights
  const animateBars = () => {
    if (!analyserRef.current || !dataArrayRef.current || !barsRef.current) return;
    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    const bars = barsRef.current.children;
    const bands = [
      dataArrayRef.current[1],  // low freq
      dataArrayRef.current[3],  // mid freq
      dataArrayRef.current[5],  // high freq
    ];
    for (let i = 0; i < bars.length; i++) {
      const height = Math.max(2, (bands[i] / 255) * 14);
      (bars[i] as HTMLElement).style.height = `${height}px`;
    }
    animFrameRef.current = requestAnimationFrame(animateBars);
  };

  const startPlayback = (audio: HTMLAudioElement, fadeDuration: number) => {
    audio.volume = 0;
    audio.play().then(() => {
      fadeVolume(MAX_VOLUME, fadeDuration);
      setPlaying(true);
      localStorage.setItem('music_playing', 'true');
      setupAnalyser();
      animateBars();
      if (!hasShownToast.current) {
        hasShownToast.current = true;
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    }).catch(() => {});
  };

  // Auto-start or restore saved preference on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const saved = localStorage.getItem('music_playing');
    if (saved === 'false') return;
    if (autoStart || saved === 'true') {
      startPlayback(audio, 2000);
    }
  }, [autoStart]);

  // Pause/resume on tab visibility
  useEffect(() => {
    const handleVisibility = () => {
      if (!audioRef.current || !playing) return;
      if (document.hidden) {
        audioRef.current.pause();
        cancelAnimationFrame(animFrameRef.current);
      } else {
        audioRef.current.play().then(() => animateBars()).catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [playing]);

  // Pause/resume when video embeds play
  useEffect(() => {
    const handleVideoPlaying = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === true && audioRef.current && playing) {
        audioRef.current.pause();
        cancelAnimationFrame(animFrameRef.current);
        wasPlayingRef.current = true;
      } else if (detail === false && audioRef.current && wasPlayingRef.current) {
        audioRef.current.play().then(() => animateBars()).catch(() => {});
        wasPlayingRef.current = false;
      }
    };
    window.addEventListener('video-playing', handleVideoPlaying);
    return () => window.removeEventListener('video-playing', handleVideoPlaying);
  }, [playing]);

  // Clean up animation frame on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      fadeVolume(0, 500);
      setTimeout(() => {
        audio.pause();
        cancelAnimationFrame(animFrameRef.current);
        // Reset bars to minimum
        if (barsRef.current) {
          Array.from(barsRef.current.children).forEach((bar) => {
            (bar as HTMLElement).style.height = '2px';
          });
        }
      }, 500);
      setPlaying(false);
      localStorage.setItem('music_playing', 'false');
    } else {
      startPlayback(audio, 1000);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/ambient.mp3" type="audio/mpeg" />
      </audio>

      {/* Sound button + tooltip container */}
      <div className="relative" style={{ position: 'fixed', bottom: cookieBarVisible ? '5rem' : '1.5rem', right: '1.5rem', zIndex: 9998, transition: 'bottom 0.3s ease' }}>
        {/* "NOW PLAYING" tooltip */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-full mb-2 right-0 bg-black/80 backdrop-blur border border-gold/40 px-3 py-2 whitespace-nowrap"
            >
              <span className="font-mono text-[0.55rem] tracking-[0.15em] text-gold">
                ♪ NOW PLAYING
              </span>
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-black/80 border-r border-b border-gold/40 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggle}
          aria-label={playing ? 'Mute background music' : 'Play background music'}
          className="flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur border border-gold/20 hover:border-gold/50 transition-all group"
        >
          {/* Equalizer bars — heights driven by real audio frequency data */}
          <div ref={barsRef} className="flex items-end gap-[2px] h-3">
            <div className="w-[2px] bg-gold transition-[height] duration-75" style={{ height: '2px' }} />
            <div className="w-[2px] bg-gold transition-[height] duration-75" style={{ height: '2px' }} />
            <div className="w-[2px] bg-gold transition-[height] duration-75" style={{ height: '2px' }} />
          </div>
          <span className="font-mono text-[0.45rem] tracking-[0.15em] text-gold/60 group-hover:text-gold transition-colors">
            {playing ? 'SOUND ON' : 'SOUND OFF'}
          </span>
        </button>
      </div>
    </>
  );
};
