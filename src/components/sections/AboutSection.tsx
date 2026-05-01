/**
 * AboutSection — Artist biography and stats section (#about anchor).
 * Split layout with a grayscale hero photo on the left and the artist's story,
 * pull quote, bio text, and key metrics (monthly listeners, streams, releases) on the right.
 */
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative flex flex-col md:flex-row min-h-screen bg-near-black">
      <div className="w-full md:w-1/2 h-[60vh] md:h-auto relative overflow-hidden">
        <img
          src="/images/about-photo.png"
          alt="Wavy Witny portrait"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-near-black hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-near-black md:hidden" />
      </div>
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center reveal relative z-10 -mt-20 md:mt-0">
        <div className="mb-12">
          <span className="font-mono text-[0.6rem] md:text-[0.7rem] text-gold/80 tracking-[0.35em] md:tracking-[0.5em] uppercase block mb-4">The Story</span>
          <h2 className="font-display text-[clamp(2rem,6vw,3rem)] md:text-7xl italic gold-gradient-text">About</h2>
        </div>
        <div className="border-l-2 border-gold pl-6 mb-12">
          <p className="font-display text-[clamp(1.2rem,2.5vw,2.2rem)] italic leading-tight text-cream">
            "Ain't no manual for this life, but I wrote my own script."
          </p>
        </div>
        <div className="space-y-6 mb-12">
          <div>
            <p className="font-mono text-[0.6rem] text-gold tracking-[0.3em] uppercase mb-2">Who is Wavy Witny?</p>
            <p className="font-body text-[1rem] md:text-[1.05rem] text-[rgba(212,200,176,0.6)] leading-[2] font-light">
              I come from a place where you had to make something out of nothing. Music became my outlet, my escape, my voice, my therapy. Every track is a snapshot of my life — the wins, the losses, the lessons.
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.6rem] text-gold tracking-[0.3em] uppercase mb-2">What inspires you to make music?</p>
            <p className="font-body text-[1rem] md:text-[1.05rem] text-[rgba(212,200,176,0.6)] leading-[2] font-light">
              Blending heartfelt storytelling with melodic finesse, I bridge the gap between vulnerability and power. W.VS.W. is more than an album — it's a mirror held up to the duality we all carry within.
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.6rem] text-gold tracking-[0.3em] uppercase mb-2">What are your genres?</p>
            <p className="font-body text-[1rem] md:text-[1.05rem] text-[rgba(212,200,176,0.6)] leading-[2] font-light">
              Hip-hop, R&B, and everything in between. If you're riding your own wave, trying to figure it out too — welcome.
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.6rem] text-gold tracking-[0.3em] uppercase mb-2">What defines your style?</p>
            <p className="font-body text-[1rem] md:text-[1.05rem] text-[rgba(212,200,176,0.6)] leading-[2] font-light">
              The visuals grew naturally with the music. Some days the look is clean, editorial, put together — other days it's all black, leather, raw energy. It just reflects wherever I'm at creatively. I'm grateful to work with{' '}
              <a href="https://instagram.com/dorottiee" target="_blank" rel="noopener noreferrer" className="text-[rgba(212,200,176,0.6)] hover:text-gold transition-colors">@dorottiee</a>
              {' '}on the creative direction — she really understands how to bring the sound to life visually.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div>
            <p className="font-ui text-[clamp(2rem,4vw,2.5rem)] text-gold">925+</p>
            <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.25)] uppercase tracking-[0.3em]">Monthly Listeners</p>
          </div>
          <div>
            <p className="font-ui text-[clamp(2rem,4vw,2.5rem)] text-gold">59K+</p>
            <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.25)] uppercase tracking-[0.3em]">Top Track Streams</p>
          </div>
          <div>
            <p className="font-ui text-[clamp(2rem,4vw,2.5rem)] text-gold">10</p>
            <p className="font-mono text-[0.55rem] text-[rgba(212,200,176,0.25)] uppercase tracking-[0.3em]">Releases</p>
          </div>
        </div>
      </div>
    </section>
  );
};
