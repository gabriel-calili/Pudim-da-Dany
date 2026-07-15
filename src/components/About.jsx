import React from 'react';
import danySobre from '../assets/dany-sobre.png';

const decoConfig = [
  { id: 1, type: 'star', char: '✦', top: '15%', left: '6%', delay: '0.4s', size: '1.275rem' },
  { id: 2, type: 'star', char: '✦', top: '30%', right: '5%', delay: '0.8s', size: '1.5rem' },
  { id: 3, type: 'star', char: '✦', top: '65%', left: '4%', delay: '1.5s', size: '1.125rem' },
  { id: 4, type: 'star', char: '✦', top: '85%', right: '8%', delay: '0.1s', size: '1.35rem' },
  { id: 5, type: 'heart', char: '♥', top: '25%', right: '12%', delay: '1.1s', size: '1.2rem' },
  { id: 6, type: 'heart', char: '♥', top: '70%', left: '11%', delay: '0.6s', size: '1.125rem' },
  { id: 7, type: 'star', char: '✦', top: '45%', right: '10%', delay: '1.9s', size: '1.25rem' },
  { id: 8, type: 'heart', char: '♥', top: '50%', left: '14%', delay: '0.3s', size: '1.15rem' },
  { id: 9, type: 'star', char: '✦', top: '95%', left: '8%', delay: '2.2s', size: '1.4rem' },
  { id: 10, type: 'heart', char: '♥', top: '35%', right: '7%', delay: '1.8s', size: '1.2rem' },
  { id: 11, type: 'star', char: '✦', top: '55%', right: '12%', delay: '0.5s', size: '1.3rem' },
  { id: 12, type: 'heart', char: '♥', top: '80%', left: '5%', delay: '2s', size: '1.15rem' },
  { id: 13, type: 'star', char: '✦', top: '22%', left: '13%', delay: '1.2s', size: '1.25rem' },
  { id: 14, type: 'heart', char: '♥', top: '78%', left: '9%', delay: '0.8s', size: '1.3rem' },
];

export default function About() {
  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const headerEl = document.getElementById('header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 72;
      const targetPosition = target.offsetTop - headerHeight - 16;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="about" id="sobre">
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

      {/* Decorative watercolor paint splash along the top */}
      <div className="about__paint-top" aria-hidden="true"></div>

      <div className="container">
        <div className="about__grid">
          {/* Left Column: Product Image */}
          <div className="about__image-col reveal">
            <div className="about__image-wrapper">
              <img
                src={danySobre}
                alt="Dany — Confeiteira do Pudim da Dany"
                className="about__image"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="about__content reveal reveal-delay-1">
            <h2 className="about__brand-name">Oiê! Eu sou a Dany</h2>

            <p className="about__text">
              Em 2009 iniciamos no ramo da confeitaria com a R&D Bolos, trabalhando com bolos, doces e chocolates, atendendo em Belo Horizonte, posteriormente em Ipatinga.
            </p>

            <p className="about__text">
              Nos mudamos para João Monlevade e agora retornamos como <strong>Pudim da Dany</strong>, atendendo em toda a região!
            </p>

            <a 
              href="#cardapio" 
              className="about__cta"
              onClick={(e) => handleNavLinkClick(e, '#cardapio')}
            >
              Ver Cardápio
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
