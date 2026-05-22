/**
 * ContactSection — "Let's Work" booking and contact section (#booking anchor).
 * Centered layout with booking/features/press categories, the main email CTA,
 * and social media icon links (Instagram, Twitter/X, Spotify, YouTube).
 */
import React from 'react';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';
import { trackSocialClick } from '../../lib/analytics';
import { siteConfig } from '../../config/siteConfig';

export const ContactSection: React.FC = () => {
  const socials = [
    { icon: Instagram, href: siteConfig.socials.instagram, label: 'Instagram' },
    { icon: Twitter, href: siteConfig.socials.twitter, label: 'Twitter' },
    { icon: Music, href: siteConfig.socials.spotify, label: 'Spotify' },
    { icon: Youtube, href: siteConfig.socials.youtube, label: 'YouTube' },
  ];

  return (
    <section id="booking" className="bg-black py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto reveal">
        <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase block mb-8">Bookings • Features • Press</span>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] md:text-8xl italic gold-gradient-text mb-4">Let's Work</h2>
        <a href={`mailto:${siteConfig.artist.bookingEmail}`} className="font-display text-3xl md:text-5xl text-gold border-b border-[rgba(201,169,110,0.3)] hover:border-gold transition-colors pb-2">
          {siteConfig.artist.bookingEmail}
        </a>
        <div className="flex justify-center gap-8 mt-24">
          {socials.map((social, i) => (
            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} onClick={() => trackSocialClick(social.label.toLowerCase())} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
