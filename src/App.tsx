import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Gate } from './components/Gate';
import { MainSite } from './components/MainSite';
import { initGA } from './lib/analytics';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieConsent } from './components/ui/CookieConsent';
import { BackgroundMusic } from './components/ui/BackgroundMusic';

export default function App() {
  const [stage, setStage] = useState<'loading' | 'gate' | 'main'>('loading');
  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem('cookie_consent') === 'accepted'
  );

  useEffect(() => {
    initGA(import.meta.env.VITE_GA_MEASUREMENT_ID || '');
    const timer = setTimeout(() => setStage('gate'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
    <div className="relative w-full min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="mb-8"
            >
              <svg viewBox="0 0 120 50" className="w-24 h-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="loadGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8d5a3"/>
                    <stop offset="50%" stopColor="#c9a96e"/>
                    <stop offset="100%" stopColor="#8b7355"/>
                  </linearGradient>
                </defs>
                <path d="M5 8 L17 42 L30 18 L42 42 L54 8" fill="none" stroke="url(#loadGold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M52 8 L64 42 L77 18 L89 42 L101 8" fill="none" stroke="url(#loadGold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            <div className="w-32 h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-mono text-[0.5rem] tracking-[0.5em] text-gold/30 mt-6 uppercase"
            >
              Loading
            </motion.p>
          </motion.div>
        )}

        {stage === 'gate' && (
          <Gate key="gate" onEnter={() => setStage('main')} />
        )}

        {stage === 'main' && (
          <>
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <MainSite />
            </motion.div>
            <CookieConsent onAccept={() => setCookiesAccepted(true)} />
            <BackgroundMusic autoStart cookieBarVisible={!cookiesAccepted} />
          </>
        )}
      </AnimatePresence>
    </div>
    </ErrorBoundary>
  );
}
