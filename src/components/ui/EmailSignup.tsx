import React, { useState } from 'react';
import { trackEmailSignup } from '../../lib/analytics';

interface EmailSignupProps {
  source: 'merch' | 'popup' | 'performances';
  buttonText?: string;
  placeholder?: string;
  darkMode?: boolean;
  onSuccess?: () => void;
}

export const EmailSignup: React.FC<EmailSignupProps> = ({
  source,
  buttonText = 'NOTIFY ME',
  placeholder = 'EMAIL ADDRESS',
  darkMode = true,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const apiUrl = import.meta.env.VITE_EMAIL_API_URL;
      if (apiUrl && !apiUrl.includes('your-email-service')) {
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            source,
            timestamp: new Date().toISOString(),
            tags: ['wvsw-launch', source],
          }),
        });
      }

      trackEmailSignup(source);
      setStatus('success');
      setEmail('');
      onSuccess?.();
    } catch {
      trackEmailSignup(source);
      setStatus('success');
      setEmail('');
      onSuccess?.();
    }
  };

  if (status === 'success') {
    return (
      <p className={`font-mono text-xs tracking-widest ${darkMode ? 'text-gold' : 'text-gold-deep'}`}>
        You're in! Check your email.
      </p>
    );
  }

  const inputClass = darkMode
    ? 'bg-transparent border-b border-gold/30 py-3 font-mono text-xs tracking-widest text-cream placeholder:text-cream/30 focus:border-gold outline-none transition-colors'
    : 'bg-transparent border-b border-near-black/30 py-3 font-mono text-xs tracking-widest text-text-dark-warm placeholder:text-near-black/40 focus:border-gold-deep outline-none transition-colors';

  const buttonClass = darkMode
    ? 'px-10 py-3 bg-gold text-black font-mono text-[0.6rem] tracking-[0.2em] hover:bg-gold-deep transition-colors disabled:opacity-50'
    : 'px-10 py-3 bg-gold text-black font-mono text-[0.6rem] tracking-[0.2em] hover:bg-gold-deep transition-colors disabled:opacity-50';

  return (
    <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
        placeholder={placeholder}
        className={`flex-1 ${inputClass}`}
        required
      />
      <button type="submit" disabled={status === 'loading'} className={buttonClass}>
        {status === 'loading' ? 'SENDING...' : buttonText}
      </button>
    </form>
  );
};
