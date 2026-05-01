/**
 * Analytics module — Google Analytics 4 + Meta Pixel integration.
 * All tracking functions no-op gracefully if GA/Pixel IDs aren't configured.
 */

// Initialize Google Analytics 4
export const initGA = (measurementId: string) => {
  if (!measurementId || measurementId.startsWith('G-XXXX')) return;
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  gtag('js', new Date());
  gtag('config', measurementId);
  (window as any).gtag = gtag;
};

// Initialize Meta Pixel
export const initMetaPixel = (pixelId: string) => {
  if (!pixelId || pixelId.startsWith('XXXX')) return;
  // Standard Meta Pixel init snippet — add fbq code when pixel ID is provided
};

// Generic event tracker
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

// Predefined events
export const trackGateEnter = () => trackEvent('gate_enter');
export const trackStreamingClick = (platform: string) => trackEvent('streaming_click', { platform });
export const trackEmailSignup = (section: string) => trackEvent('email_signup', { section });
export const trackVideoPlay = (title: string) => trackEvent('video_play', { title });
export const trackSocialClick = (platform: string) => trackEvent('social_click', { platform });
export const trackMerchNotify = () => trackEvent('merch_notify_signup');
