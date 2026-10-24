import React from 'react';
import '../styles/hero.css'
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function HeroSection({ formUrl }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">[Your business Jargon]</p>
        <h1 className="hero-title">[catchy Description of your product]</h1>
        <p className="hero-description">
          Made with organic whole milk, natural probiotics, and real fruit compote. Smooth, rich, and delivered directly to your hands.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn-primary">
            Explore Menu <ArrowRight size={18} />
          </a>
          <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Direct Order Form <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}