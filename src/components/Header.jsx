import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled class
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Active nav link
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20;
      if (isAtBottom) {
        setActiveLink('contato');
        return;
      }

      const scrollPos = window.scrollY + 120;
      const sections = document.querySelectorAll('section[id], footer[id]');
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  // Handle body overflow when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
      setActiveLink(targetId.replace('#', ''));
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container header__inner">
          <a href="#" className="header__logo" onClick={(e) => handleNavLinkClick(e, '#inicio')}>
            <span className="header__logo-text">Pudim da Dany</span>
          </a>

          <nav className={`header__nav ${menuOpen ? 'open' : ''}`} id="nav">
            <a 
              href="#inicio" 
              className={`header__nav-link ${activeLink === 'inicio' ? 'active' : ''}`}
              onClick={(e) => handleNavLinkClick(e, '#inicio')}
            >
              Início
            </a>
            <a 
              href="#cardapio" 
              className={`header__nav-link ${activeLink === 'cardapio' ? 'active' : ''}`}
              onClick={(e) => handleNavLinkClick(e, '#cardapio')}
            >
              Cardápio
            </a>
            <a 
              href="#sobre" 
              className={`header__nav-link ${activeLink === 'sobre' ? 'active' : ''}`}
              onClick={(e) => handleNavLinkClick(e, '#sobre')}
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className={`header__nav-link ${activeLink === 'contato' ? 'active' : ''}`}
              onClick={(e) => handleNavLinkClick(e, '#contato')}
            >
              Contato
            </a>
          </nav>



          <button 
            className={`header__menu-toggle ${menuOpen ? 'open' : ''}`} 
            id="menuToggle" 
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div 
        className={`nav-overlay ${menuOpen ? 'open' : ''}`} 
        id="navOverlay"
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  );
}
