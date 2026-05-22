/**
 * EventsSection — Upcoming events and ticket links.
 * Currently hidden via a flag. Unhide when events are added.
 */
import React from 'react';
import { siteConfig } from '../../config/siteConfig';

const SHOW_EVENTS = siteConfig.features.showEvents;

const upcomingEvents = siteConfig.events.upcoming;
const pastEvents = siteConfig.events.past;

export const EventsSection: React.FC = () => {
  if (!SHOW_EVENTS) return null;

  return (
    <section id="events" className="py-32 px-6 md:px-16 bg-near-black">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[0.6rem] tracking-[0.3em] text-gold/60 mb-4 reveal">EVENTS</p>
        <h2 className="font-display text-4xl md:text-6xl italic gold-gradient-text mb-16 reveal">Upcoming</h2>

        {upcomingEvents.length > 0 ? (
          <div className="space-y-4 mb-20">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 py-6 reveal group">
                <div className="flex items-start gap-6">
                  <div className="text-center min-w-[50px]">
                    <p className="font-display text-2xl text-gold">{event.date}</p>
                    <p className="font-mono text-[0.5rem] tracking-[0.2em] text-cream/40">{event.month}</p>
                  </div>
                  <div>
                    <p className="font-display text-xl text-cream group-hover:text-gold transition-colors">{event.name}</p>
                    <p className="font-mono text-[0.55rem] tracking-[0.15em] text-cream/40 mt-1">{event.venue} · {event.city}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  {event.status === 'available' && (
                    <a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 border border-gold text-gold font-mono text-[0.6rem] tracking-[0.2em] hover:bg-gold hover:text-black transition-all"
                    >
                      GET TICKETS →
                    </a>
                  )}
                  {event.status === 'sold-out' && (
                    <span className="inline-block px-8 py-3 border border-white/10 text-cream/30 font-mono text-[0.6rem] tracking-[0.2em]">
                      SOLD OUT
                    </span>
                  )}
                  {event.status === 'coming-soon' && (
                    <span className="inline-block px-8 py-3 border border-gold/30 text-gold/50 font-mono text-[0.6rem] tracking-[0.2em]">
                      COMING SOON
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-mono text-xs text-cream/30 tracking-widest mb-20 reveal">NEW DATES COMING SOON</p>
        )}

        {pastEvents.length > 0 && (
          <>
            <p className="font-mono text-[0.6rem] tracking-[0.3em] text-cream/20 mb-6 reveal">PAST EVENTS</p>
            <div className="space-y-3">
              {pastEvents.map((event, i) => (
                <div key={i} className="flex items-center gap-6 py-3 opacity-40 reveal">
                  <p className="font-mono text-[0.55rem] tracking-[0.15em] text-cream/40 min-w-[40px]">{event.date}</p>
                  <p className="font-mono text-[0.55rem] tracking-[0.15em] text-cream/40">{event.name} · {event.venue}, {event.city}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
