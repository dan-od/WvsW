/**
 * MarqueeBanner — Infinite scrolling ticker/marquee banner.
 * Displays repeated "GHOST MODE / W.VS.W. / OUT NOW / WAVY VS WITNY" text
 * in a continuous horizontal animation between the duality and featured sections.
 */
import React from 'react';

export const MarqueeBanner: React.FC = () => {
  return (
    <div className="bg-black py-4 border-y border-gold/20 overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="inline-block animate-[marquee_60s_linear_infinite]">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-ui text-4xl md:text-6xl opacity-10 text-gold mx-8">
            GHOST MODE • W.VS.W. • OUT NOW • WAVY VS WITNY •
          </span>
        ))}
      </div>
    </div>
  );
};
