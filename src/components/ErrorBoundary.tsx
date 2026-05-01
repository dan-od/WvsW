import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-display text-4xl md:text-6xl italic gold-gradient-text mb-4">Something went wrong</h1>
          <p className="font-mono text-xs text-cream/40 tracking-widest mb-8">An unexpected error occurred</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 border border-gold text-gold font-mono text-sm tracking-widest hover:bg-gold hover:text-black transition-all"
          >
            RELOAD
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
