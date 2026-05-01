import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { trackGateEnter } from '../lib/analytics';

interface GateProps {
  onEnter: () => void;
}

export const Gate: React.FC<GateProps> = ({ onEnter }) => {
  const spriteRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!spriteRef.current) return;
      const frame = frameRef.current;
      const col = frame % 10;
      const row = Math.floor(frame / 10);
      const xPos = (col / 9) * 100;
      const yPos = (row / 8) * 100;
      spriteRef.current.style.backgroundPosition = `${xPos}% ${yPos}%`;
      frameRef.current = (frame + 1) % 90;
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-end pb-[15vh] md:justify-center md:pb-0 bg-black overflow-hidden"
    >
      {/* Background Image — responsive crops */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-aspect-ratio: 1/1)" srcSet="/images/hero-mobile.png" />
          <img
            src="/images/hero-desktop.png"
            alt=""
            className="w-full h-full object-cover opacity-40 object-[40%_center] md:object-[40%_center]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* WW Chain sprite + Button as one unit */}
      <div className="relative z-10 flex flex-col items-center">
        <div
          ref={spriteRef}
          className="w-[320px] h-[400px] md:w-[580px] md:h-[725px] pointer-events-none"
          style={{
            backgroundImage: "url('/images/WW_spritesheet.webp')",
            backgroundSize: '1000% 900%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0% 0%',
          }}
        />

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: '#c9a96e', color: '#000' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { trackGateEnter(); onEnter(); }}
          aria-label="Enter Wavy Witny website"
          autoFocus
          className="mt-8 px-12 py-4 border border-gold text-gold font-mono text-sm tracking-widest transition-colors duration-300"
        >
          ENTER THE WORLD
        </motion.button>
      </div>
    </motion.div>
  );
};
