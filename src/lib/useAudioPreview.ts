import { useRef, useState, useEffect } from 'react';

const globalAudio = new Audio();

export const useAudioPreview = () => {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const animRef = useRef<number>(0);

  const updateProgress = () => {
    if (globalAudio.duration) {
      setProgress((globalAudio.currentTime / globalAudio.duration) * 100);
    }
    if (!globalAudio.paused) {
      animRef.current = requestAnimationFrame(updateProgress);
    }
  };

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTrack(null);
      window.dispatchEvent(new CustomEvent('video-playing', { detail: false }));
    };

    globalAudio.addEventListener('ended', handleEnded);
    return () => {
      globalAudio.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  const play = async (id: string, previewUrl: string) => {
    if (currentTrack === id && !globalAudio.paused) {
      globalAudio.pause();
      setIsPlaying(false);
      cancelAnimationFrame(animRef.current);
      window.dispatchEvent(new CustomEvent('video-playing', { detail: false }));
      return;
    }

    if (currentTrack === id && globalAudio.paused) {
      globalAudio.play();
      setIsPlaying(true);
      updateProgress();
      window.dispatchEvent(new CustomEvent('video-playing', { detail: true }));
      return;
    }

    globalAudio.src = previewUrl;
    globalAudio.volume = 0.8;
    setCurrentTrack(id);
    setProgress(0);

    try {
      await globalAudio.play();
      setIsPlaying(true);
      updateProgress();
      window.dispatchEvent(new CustomEvent('video-playing', { detail: true }));
    } catch {
      setIsPlaying(false);
    }
  };

  const stop = () => {
    globalAudio.pause();
    globalAudio.currentTime = 0;
    setIsPlaying(false);
    setProgress(0);
    setCurrentTrack(null);
    cancelAnimationFrame(animRef.current);
    window.dispatchEvent(new CustomEvent('video-playing', { detail: false }));
  };

  return { currentTrack, isPlaying, progress, play, stop };
};
