import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CookieConsentProps {
  onAccept?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShow(false);
    onAccept?.();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur border-t border-gold/10 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-[0.6rem] text-cream/50 tracking-wider">
            This site uses cookies for analytics to improve your experience.
          </p>
          <button
            onClick={accept}
            className="px-6 py-2 bg-gold text-black font-mono text-[0.55rem] tracking-[0.2em] hover:bg-gold-deep transition-colors whitespace-nowrap"
          >
            GOT IT
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
