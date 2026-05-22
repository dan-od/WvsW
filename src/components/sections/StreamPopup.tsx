/**
 * StreamPopup — Scroll-triggered email capture popup.
 * Appears when user scrolls past 30% of viewport height.
 * Respects a 7-day dismiss cooldown via localStorage and hides permanently after signup.
 */
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { EmailSignup } from '../ui/EmailSignup';
import { siteConfig } from '../../config/siteConfig';

export const StreamPopup: React.FC = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [entered] = useState(Date.now());

  useEffect(() => {
    if (!siteConfig.features.showPopup) return;
    // Check if dismissed within last 7 days
    const dismissedAt = localStorage.getItem('popup_dismissed');
    if (dismissedAt) {
      const daysSince = (Date.now() - Number(dismissedAt)) / (1000 * 60 * 60 * 24);
      if (daysSince < 7) return;
    }

    // Check if already signed up
    if (localStorage.getItem('email_signed_up')) return;

    // Show after scrolling past 50% of viewport AND 10 seconds have passed
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5 && Date.now() - entered > 10000) {
        setShow(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [entered]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    localStorage.setItem('popup_dismissed', String(Date.now()));
  };

  const handleSignupSuccess = () => {
    localStorage.setItem('email_signed_up', 'true');
    setTimeout(() => setShow(false), 2000);
  };

  if (dismissed || !siteConfig.features.showPopup) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed bottom-8 left-8 z-30 bg-near-black border border-gold/20 p-6 max-w-xs shadow-2xl"
        >
          <button
            onClick={handleDismiss}
            aria-label="Close popup"
            className="absolute top-3 right-3 text-cream/30 hover:text-gold transition-colors"
          >
            <X size={14} />
          </button>

          <p className="font-ui text-lg gold-gradient-text mb-2">Get Early Access</p>
          <p className="font-mono text-[0.55rem] text-cream/40 tracking-wider mb-4 leading-relaxed">
            Be first to hear new drops, exclusive content & merch alerts
          </p>

          <EmailSignup
            source="popup"
            buttonText="I'M IN"
            placeholder="YOUR EMAIL"
            darkMode={true}
            onSuccess={handleSignupSuccess}
          />

          <p className="font-mono text-[0.45rem] text-cream/20 tracking-widest mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
