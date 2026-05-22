/**
 * WAVY WITY — Site Configuration
 *
 * Change content, links, images, and feature toggles here.
 * No need to edit any component files.
 */

type UpcomingEvent = {
  date: string;
  month: string;
  city: string;
  venue: string;
  name: string;
  ticketUrl: string;
  status: 'available' | 'sold-out' | 'coming-soon';
};

export const siteConfig = {
  // ==================== ARTIST INFO ====================
  artist: {
    name: 'Wavy Witny',
    displayName: 'WAVY WITNY',
    tagline: "Ain't no manual for this life, but I wrote my own script.",
    bookingEmail: 'booking@wavywitny.com',
    copyright: '© 2026 WAVY WITY / WAVYNATION. ALL RIGHTS RESERVED.',
    creativeDirector: { name: '@dorottiee', url: 'https://instagram.com/dorottiee' },
    designedBy: { name: 'Pro-Tech Network', url: 'https://protechnetworks.org/' },
  },

  // ==================== SOCIALS ====================
  socials: {
    instagram: 'https://instagram.com/wavywitny',
    twitter: '#',
    spotify: 'https://open.spotify.com/artist/60FotEIEBnJSB4ZW1sS6Ue',
    appleMusic: 'https://music.apple.com/ca/artist/wavy-witny/1571096565',
    youtube: 'https://www.youtube.com/@wavywitny',
    tidal: '#',
    audiomack: '#',
    fvrFan: 'https://www.fvr.fan/wavywitny',
  },

  // ==================== ALBUMS & MUSIC ====================
  featuredAlbum: {
    title: 'W.VS.W.',
    subtitle: 'WAVY VS. WITNY',
    year: '2026',
    spotifyUrl: 'https://open.spotify.com/album/31e8NgM9P2HAgGe6Fc5KIq',
    appleMusicUrl: 'https://music.apple.com/ca/album/w-vs-w/1884983423',
    appleMusicEmbedId: '1884983423',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273c5529bf3be71207d222c17ac',
    fvrFanUrl: 'https://www.fvr.fan/wavywitny',
  },

  latestSingle: {
    title: 'Ghost Mode',
    subtitle: 'THE LATEST SINGLE',
    spotifyUrl: 'https://open.spotify.com/album/0prBRp1r3g9Ee8dWZGMrtt',
    youtubeUrl: 'https://www.youtube.com/watch?v=sHRRSNv-E8o',
    coverArt: 'https://i.scdn.co/image/ab67616d0000b273bab2846b6ac48e55781befba',
  },

  discography: [
    { title: 'W.VS.W.', year: '2026', img: 'https://i.scdn.co/image/ab67616d0000b273c5529bf3be71207d222c17ac', spotifyUrl: 'https://open.spotify.com/album/31e8NgM9P2HAgGe6Fc5KIq', appleId: '1884983423', appleSlug: 'w-vs-w' },
    { title: 'Wassup', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273a651d31e122474114d110476', spotifyUrl: 'https://open.spotify.com/album/00KLZYllOaCqCLLbyDwy5B', appleId: '1855070072', appleSlug: 'wassup-single' },
    { title: 'Ghost Land EP', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273bab2846b6ac48e55781befba', spotifyUrl: 'https://open.spotify.com/album/0prBRp1r3g9Ee8dWZGMrtt', appleId: '1809930207', appleSlug: 'ghost-land-ep' },
    { title: 'Nothing', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b273072c09e0f5dd7417bbb6644f', spotifyUrl: 'https://open.spotify.com/album/2rsIuuixWHYNqeu725Kkrb', appleId: '1824884262', appleSlug: 'nothing-feat-ralph-nyoni-single' },
    { title: 'Girl of My Dreams', year: '2025', img: 'https://i.scdn.co/image/ab67616d0000b2737a59d6a544566ee53962c70d', spotifyUrl: 'https://open.spotify.com/album/2kAGN8zA0VzGJxkremClVg', appleId: '1796246342', appleSlug: 'girl-of-my-dreams-single' },
    { title: 'Something To Say', year: '2024', img: 'https://i.scdn.co/image/ab67616d0000b2735282f56dae58dbda0c7d1d49', spotifyUrl: 'https://open.spotify.com/album/158SsVhOXmqBN9f0Nt3QQm', appleId: '1764625671', appleSlug: 'something-to-say-single' },
    { title: 'Focus', year: '2023', img: 'https://i.scdn.co/image/ab67616d0000b273f80edc3b9d4d014f5cce6c93', spotifyUrl: 'https://open.spotify.com/album/7HRCEHfyllYGFkIo4xMoyV', appleId: '1663987646', appleSlug: 'focus-single' },
    { title: 'Soldier', year: '2021', img: 'https://i.scdn.co/image/ab67616d0000b273c91ac03100666378cb050df3', spotifyUrl: 'https://open.spotify.com/album/1kshRqYxIl6wri21tYeklc', appleId: '1817151977', appleSlug: 'soldier-feat-jason-chung-single' },
  ],

  videos: [
    { title: 'Ghost Mode (Official Video)', videoId: 'sHRRSNv-E8o', views: 'Premiere' },
    { title: 'Girl of My Dreams (Official Video)', videoId: 'xT4ynjSqMhg', views: '124K views' },
    { title: 'No Reply (Official Video)', videoId: '94paoFm7fgQ', views: '10K views' },
    { title: 'Something To Say (Official Video)', videoId: '5rB31Q_BdwI', views: '5.3K views' },
    { title: 'Nothing ft. Ralph Nyoni (Official Video)', videoId: 'sDxtmMxInBA', views: '1.7K views' },
    { title: 'Soldier ft. Jason Chung (Official Video)', videoId: '2mMSixaJmOA', views: '3.3K views' },
    { title: 'Focus (Official Music Video)', videoId: 'Nst2yFP57_w', views: '424 views' },
  ],

  // ==================== IMAGES ====================
  images: {
    gateDesktop: '/images/gate-desktop.jpeg',
    gateMobile: '/images/gate-mobile.jpeg',
    heroDesktopPoster: '/images/hero-desktop.jpg',
    heroMobilePoster: '/images/hero-mobile.jpg',
    about: '/images/about-photo.png',
    gallery: [
      { src: '/images/gallery-side-profile.jpeg', alt: 'Wavy Witny side profile editorial', span: 'md:col-span-2 md:row-span-2' },
      { src: '/images/gallery-portrait.jpeg', alt: 'Wavy Witny portrait', span: '' },
      { src: '/images/gallery-closeup.jpeg', alt: 'Wavy Witny close-up', span: '' },
      { src: '/images/gallery-fashion.jpeg', alt: 'Wavy Witny fashion shot', span: '' },
      { src: '/images/gallery-editorial.jpeg', alt: 'Wavy Witny editorial', span: 'hidden md:block md:col-span-2' },
    ],
    performances: [
      { src: '/images/performance-1.jpeg', alt: 'Wavy Witny performance' },
      { src: '/images/performance-2.jpeg', alt: 'Wavy Witny on stage' },
      { src: '/images/performance-3.jpeg', alt: 'Wavy Witny live' },
      { src: '/images/performance-4.jpeg', alt: 'Wavy Witny event' },
      { src: '/images/performance-5.jpeg', alt: 'Wavy Witny show' },
    ],
  },

  // ==================== VIDEOS ====================
  heroVideo: {
    desktop: '/videos/GHOST-MODE.mp4',
    mobile: '/videos/GHOST-MODE.mp4',
  },

  // ==================== FEATURE TOGGLES ====================
  features: {
    showEvents: true,        // Set true when events are available
    showMerch: true,          // Merch section (currently "Coming Soon")
    showBackgroundMusic: true, // Blueprint ambient audio
    showCookieConsent: true,   // Cookie banner
    showPopup: true,           // Email capture popup
    showAppleMusicEmbed: true, // Apple Music player in featured release
    showVideoModal: true,      // YouTube video modal
  },

  // ==================== EVENTS ====================
  events: {
    upcoming: [] as UpcomingEvent[],
    past: [
      { date: '2025', city: 'Santa Maria', venue: 'Vibes Lounge', name: 'Live Performance' },
    ],
  },

  // ==================== STREAMING PLATFORMS ====================
  streamingPlatforms: [
    { name: 'Spotify', url: 'https://open.spotify.com/artist/60FotEIEBnJSB4ZW1sS6Ue' },
    { name: 'Apple Music', url: 'https://music.apple.com/ca/artist/wavy-witny/1571096565' },
    { name: 'YouTube', url: 'https://www.youtube.com/@wavywitny' },
    { name: 'Tidal', url: '#' },
    { name: 'Audiomack', url: '#' },
  ],

  // ==================== W.VS.W. TRACKLIST ====================
  tracklist: [
    { num: 1, title: 'Ghost Mode' },
    { num: 2, title: 'How I Feel' },
    { num: 3, title: 'Dungeons' },
    { num: 4, title: 'Blueprint' },
    { num: 5, title: 'Wesh', feature: 'KEAN!' },
    { num: 6, title: 'Wassup' },
    { num: 7, title: 'Ti Cheri', feature: 'JJuZyy' },
    { num: 8, title: 'With You', feature: 'Nai' },
    { num: 9, title: 'Slide' },
    { num: 10, title: 'Dead To Me' },
    { num: 11, title: 'LMK', feature: 'TGK' },
    { num: 12, title: 'Toxic' },
    { num: 13, title: 'Matter', feature: 'Ralph Nyoni' },
    { num: 14, title: 'Changes' },
    { num: 15, title: '11.01 (Outro)' },
  ],
};

export type SiteConfig = typeof siteConfig;
