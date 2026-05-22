import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeroLanding } from './sections/HeroLanding';
import { StreamPopup } from './sections/StreamPopup';
import { DualitySection } from './sections/DualitySection';
import { MarqueeBanner } from './sections/MarqueeBanner';
import { FeaturedRelease } from './sections/FeaturedRelease';
import { LatestSingle } from './sections/LatestSingle';
import { MoreMusic } from './sections/MoreMusic';
import { MusicTracklist } from './sections/MusicTracklist';
import { GallerySection } from './sections/GallerySection';
import { PerformancesSection } from './sections/PerformancesSection';
import { EventsSection } from './sections/EventsSection';
import { AboutSection } from './sections/AboutSection';
import { MerchSection } from './sections/MerchSection';
import { ContactSection } from './sections/ContactSection';
import { SiteFooter } from './sections/SiteFooter';
import { siteConfig } from '../config/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export const MainSite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // GSAP reveal animations — delay to ensure all sections are mounted
    let gsapTimer: ReturnType<typeof setTimeout> | undefined;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsapTimer = setTimeout(() => {
        gsap.utils.toArray('.reveal').forEach((elem: any) => {
          gsap.to(elem, {
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            duration: 1.8,
            ease: 'power2.out',
            stagger: 0.3
          });
        });
      }, 500);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (gsapTimer) clearTimeout(gsapTimer);
    };
  }, []);

  const navLinks = [
    'Music',
    'Gallery',
    'Performances',
    ...(siteConfig.features.showEvents ? ['Events'] : []),
    ...(siteConfig.features.showMerch ? ['Merch'] : []),
    'About',
    'Booking',
  ];

  return (
    <div className="relative bg-near-black min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-6 md:px-12 py-6 flex items-center justify-between ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent'}`}>
        <button onClick={() => setIsMenuOpen(true)} aria-label="Open navigation menu" className="text-white hover:text-gold transition-colors">
          <Menu size={24} />
        </button>
        <div className="flex flex-col items-center">
          <span className="font-ui text-2xl tracking-[0.2em] gold-gradient-text">WAVY WITNY</span>
        </div>
        <div className="w-6" />
      </nav>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
          >
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close navigation menu" className="absolute top-8 left-8 text-white hover:text-gold transition-colors">
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-ui text-4xl md:text-6xl text-[rgba(212,200,176,0.4)] hover:text-gold transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <HeroLanding />
      <StreamPopup />
      <DualitySection />
      <MarqueeBanner />
      <FeaturedRelease />
      <LatestSingle />
      <MoreMusic />
      <MusicTracklist />
      <GallerySection />
      <PerformancesSection />
      {siteConfig.features.showEvents && <EventsSection />}
      <AboutSection />
      {siteConfig.features.showMerch && <MerchSection />}
      <ContactSection />
      <SiteFooter />

      {/* Film Grain */}
      <div className="film-grain" aria-hidden="true" />
    </div>
  );
};

// Add keyframes for marquee
const style = document.createElement('style');
style.textContent = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;
document.head.appendChild(style);
