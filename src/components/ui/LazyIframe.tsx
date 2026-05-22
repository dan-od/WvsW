import React, { useRef, useState, useEffect } from 'react';

export const LazyIframe: React.FC<React.IframeHTMLAttributes<HTMLIFrameElement>> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? <iframe {...props} /> : <div style={{ height: props.height || 175, background: '#111' }} />}
    </div>
  );
};
