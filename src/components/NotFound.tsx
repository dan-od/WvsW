import React from 'react';

export const NotFound: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-ui text-[8rem] md:text-[12rem] text-gold leading-none mb-4">404</h1>
      <p className="font-display text-2xl md:text-3xl italic text-cream/60 mb-8">This page doesn't exist</p>
      <a
        href="/"
        className="px-8 py-3 border border-gold text-gold font-mono text-sm tracking-widest hover:bg-gold hover:text-black transition-all"
      >
        BACK TO HOME
      </a>
      <div className="film-grain" />
    </div>
  );
};
