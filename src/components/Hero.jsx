import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';
import heroBanner from '../assets/hero-banner.jpg';

const decoConfig = [
  { id: 1, type: 'star', char: '✦', top: '12%', left: '8%', delay: '0s', size: '1.5rem' },
  { id: 2, type: 'star', char: '✦', top: '25%', right: '6%', delay: '1s', size: '1.2rem' },
  { id: 3, type: 'star', char: '✦', top: '68%', left: '4%', delay: '0.5s', size: '1.05rem' },
  { id: 4, type: 'star', char: '✦', top: '80%', right: '10%', delay: '1.5s', size: '1.35rem' },
  { id: 5, type: 'heart', char: '♥', top: '18%', right: '12%', delay: '0.3s', size: '1.2rem' },
  { id: 6, type: 'heart', char: '♥', top: '75%', left: '12%', delay: '1.2s', size: '1.05rem' },
  { id: 7, type: 'star', char: '✦', top: '45%', left: '15%', delay: '2s', size: '1.2rem' },
  { id: 8, type: 'heart', char: '♥', top: '55%', right: '18%', delay: '0.8s', size: '1.1rem' },
  { id: 9, type: 'star', char: '✦', top: '92%', left: '7%', delay: '2.5s', size: '1.3rem' },
  { id: 10, type: 'heart', char: '♥', top: '35%', left: '5%', delay: '1.7s', size: '1.15rem' },
  { id: 11, type: 'star', char: '✦', top: '58%', right: '9%', delay: '0.4s', size: '1.25rem' },
  { id: 12, type: 'heart', char: '♥', top: '88%', right: '14%', delay: '2.1s', size: '1.2rem' },
  { id: 13, type: 'star', char: '✦', top: '28%', left: '11%', delay: '1.1s', size: '1.1rem' },
  { id: 14, type: 'heart', char: '♥', top: '64%', left: '8%', delay: '0.9s', size: '1.3rem' },
];

export default function Hero() {
  const handleScrollToCatalog = (e) => {
    e.preventDefault();
    const target = document.getElementById('cardapio');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="inicio" style={{ position: 'relative' }}>
      {/* Decorative Elements */}
      {decoConfig.map((config) => (
        <span
          key={config.id}
          className={`deco deco--${config.type}`}
          style={{
            position: 'absolute',
            fontSize: config.size,
            animationDelay: config.delay,
            zIndex: 1,
            top: config.top,
            left: config.left,
            right: config.right,
          }}
        >
          {config.char}
        </span>
      ))}

      <div className="container">
        {/* Main Hero Image */}
        <div className="hero__main reveal">
          <img
            src={heroBanner}
            alt="Pudim da Dany — Pudins artesanais feitos com amor"
            className="hero__image"
          />

          {/* CTA Button Overlay */}
          <div className="hero__cta-overlay">
            <a
              href="#cardapio"
              className="hero__cta-btn"
              id="hero-cta-btn"
              onClick={handleScrollToCatalog}
            >
              Conheça nossos produtos
            </a>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <TestimonialsCarousel />
      </div>
    </section>
  );
}

