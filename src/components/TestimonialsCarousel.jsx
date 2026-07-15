import React, { useState, useEffect, useRef } from 'react';
import avatarWeberte from '../assets/avatar-weberte.png';
import avatarRejane from '../assets/avatar-rejane.png';
import avatarGleiciele from '../assets/avatar-gleiciele.png';
import avatarMatheus from '../assets/avatar-matheus.png';
import avatarIzabel from '../assets/avatar-izabel.png';

const testimonials = [
  {
    id: 1,
    stars: '★★★★★',
    text: '"O melhor que já comi nos meus 48 anos de experiência, pois é o único que não senti cheiro de ovo, é um sabor inesquecível."',
    avatar: avatarWeberte,
    name: 'Weberte Cordeiro',
    role: 'Cliente',
    theme: 'cream'
  },
  {
    id: 2,
    stars: '★★★★★',
    text: '"Pudim maravilhoso, bem cremoso e com a calda na medida certa. Doce sem ser enjoativo. Uma delícia! Os vendedores foram muito atenciosos. Atendimento excelente!"',
    avatar: avatarRejane,
    name: 'Rejane Queiroz',
    role: 'Cliente',
    theme: 'pink'
  },
  {
    id: 3,
    stars: '★★★★★',
    text: '"O melhor pudim que já experimentei, saboroso derrete na boca. Sucesso total. Parabéns pudimdadany que Deus abençoe! 👏👏👏👏❤️"',
    avatar: null,
    name: 'Regina Queiroz',
    role: 'Cliente',
    theme: 'caramel'
  },
  {
    id: 4,
    stars: '★★★★★',
    text: '"Produtos, serviço e atendimento de excelente qualidade! Já pedi diversos pudins de sabores diferentes e nos surpreendemos."',
    avatar: avatarMatheus,
    name: 'Matheus Souza Costa',
    role: 'Cliente',
    theme: 'cream'
  },
  {
    id: 5,
    stars: '★★★★★',
    text: '"Pudim maravilhoso, cremoso e muito lisinho. O melhor da região!! Recomendo a todos essa delícia 😍🥰"',
    avatar: avatarIzabel,
    name: 'Izabel Rosse',
    role: 'Cliente',
    theme: 'pink'
  },
  {
    id: 6,
    stars: '★★★★★',
    text: '"Comprei o pudim para um almoço em família e a experiência que tive foi fenomenal. Atendimento, qualidade e preço justo. Adorei e vou comprar sempre. Nota 10"',
    avatar: null,
    name: 'MTS Carvalho',
    role: 'Cliente',
    theme: 'caramel'
  },
  {
    id: 7,
    stars: '★★★★★',
    text: '"A experiência foi excelente! Comprei o bolo pudim e não deu tempo nem de tirar foto. Muito bom mesmo!"',
    avatar: avatarGleiciele,
    name: 'Gleiciele Vieira',
    role: 'Cliente',
    theme: 'cream'
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayInterval = useRef(null);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const autoPlayDelay = 5000;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayInterval.current = setInterval(nextSlide, autoPlayDelay);
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = null;
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // Keyboard navigation when carousel in viewport
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!carouselRef.current) return;
      const rect = carouselRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        if (e.key === 'ArrowLeft') {
          prevSlide();
          resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
          resetAutoPlay();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Touch handlers for swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    stopAutoPlay();
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    startAutoPlay();
  };

  return (
    <div className="testimonials reveal" id="depoimentos">
      <div 
        className="testimonials__carousel"
        ref={carouselRef}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="testimonials__track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`testimonial-slide testimonial-slide--${testimonial.theme}`}
            >
              <div className="testimonial-slide__stars" aria-label="5 estrelas">
                {testimonial.stars}
              </div>
              <p className="testimonial-slide__text">{testimonial.text}</p>
              <div className="testimonial-slide__author">
                {testimonial.avatar ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="testimonial-slide__avatar-img" 
                  />
                ) : (
                  <div className="testimonial-slide__avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div className="testimonial-slide__info">
                  <span className="testimonial-slide__name">{testimonial.name}</span>
                  <span className="testimonial-slide__role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="testimonials__arrow testimonials__arrow--prev" 
          aria-label="Depoimento anterior"
          onClick={() => { prevSlide(); resetAutoPlay(); }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button 
          className="testimonials__arrow testimonials__arrow--next" 
          aria-label="Próximo depoimento"
          onClick={() => { nextSlide(); resetAutoPlay(); }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      <div className="testimonials__dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonials__dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Ir para depoimento ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
