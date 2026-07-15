import React, { useState } from 'react';
import imgLeiteCondensado from '../assets/pudim-leite-condensado.png';
import imgCoco from '../assets/pudim-coco.png';
import imgChocolate from '../assets/pudim-chocolate.png';
import imgMaracuja from '../assets/pudim-maracuja.jpg';
import imgDoceDeLeite from '../assets/pudim-doce-de-leite.jpg';
import imgNinhoNutella from '../assets/pudim-ninho-nutella.png';
import imgCachaca from '../assets/pudim-cachaca.jpg';
import imgWhisky from '../assets/pudim-whisky.png';

const products = [
  { id: 1, name: 'Leite Condensado', image: imgLeiteCondensado, theme: 'light' },
  { id: 2, name: 'Coco', image: imgCoco, theme: 'medium' },
  { id: 3, name: 'Chocolate', image: imgChocolate, theme: 'dark' },
  { id: 4, name: 'Maracujá', image: imgMaracuja, theme: 'light' },
  { id: 5, name: 'Doce de Leite', image: imgDoceDeLeite, theme: 'medium' },
  { id: 6, name: 'Ninho com Nutella', image: imgNinhoNutella, theme: 'dark' },
  { id: 7, name: 'Cachaça', image: imgCachaca, theme: 'light' },
  { id: 8, name: 'Whisky', image: imgWhisky, theme: 'medium', imagePosition: 'center 65%' },
];

const sizes = [
  { id: 'individual', label: 'Porção Individual', weight: '120g', icon: '🍮' },
  { id: 'repetir', label: 'Pra Repetir', weight: '500g', icon: '🍮🍮' },
  { id: 'familia', label: 'Tamanho Família', weight: '1,1kg', icon: '🍮🍮🍮' },
];

const decoConfig = [
  { id: 1, type: 'star', char: '✦', top: '8%', left: '5%', delay: '0.2s', size: '1.35rem' },
  { id: 2, type: 'star', char: '✦', top: '15%', right: '7%', delay: '1.2s', size: '1.2rem' },
  { id: 3, type: 'star', char: '✦', top: '45%', left: '3%', delay: '0.7s', size: '1.5rem' },
  { id: 4, type: 'star', char: '✦', top: '72%', right: '4%', delay: '1.8s', size: '1.125rem' },
  { id: 5, type: 'heart', char: '♥', top: '22%', left: '10%', delay: '0.5s', size: '1.2rem' },
  { id: 6, type: 'heart', char: '♥', top: '60%', right: '8%', delay: '1.4s', size: '1.275rem' },
  { id: 7, type: 'star', char: '✦', top: '32%', right: '12%', delay: '2.2s', size: '1.3rem' },
  { id: 8, type: 'heart', char: '♥', top: '82%', left: '6%', delay: '1s', size: '1.2rem' },
  { id: 9, type: 'star', char: '✦', top: '90%', right: '9%', delay: '0.5s', size: '1.4rem' },
  { id: 10, type: 'heart', char: '♥', top: '28%', left: '4%', delay: '1.6s', size: '1.25rem' },
  { id: 11, type: 'star', char: '✦', top: '55%', left: '9%', delay: '0.9s', size: '1.35rem' },
  { id: 12, type: 'heart', char: '♥', top: '68%', right: '15%', delay: '2.3s', size: '1.15rem' },
  { id: 13, type: 'star', char: '✦', top: '38%', left: '11%', delay: '1.3s', size: '1.2rem' },
  { id: 14, type: 'heart', char: '♥', top: '78%', right: '5%', delay: '0.7s', size: '1.3rem' },
];

export default function Categories({ onAddToCart }) {
  const [sizeModal, setSizeModal] = useState({ open: false, product: null });

  const handleAddClick = (product) => {
    setSizeModal({ open: true, product });
  };

  const handleSelectSize = (size) => {
    if (sizeModal.product && onAddToCart) {
      onAddToCart({
        ...sizeModal.product,
        size: size.id,
        sizeLabel: size.label,
        sizeWeight: size.weight,
      });
    }
    setSizeModal({ open: false, product: null });
  };

  const handleCloseModal = () => {
    setSizeModal({ open: false, product: null });
  };

  return (
    <section className="categories" id="cardapio">
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
        <h2 className="categories__title">Nossos Pudins</h2>
        <p className="categories__subtitle">Escolha seu sabor favorito e adicione ao carrinho</p>

        <div className="categories__grid">
          {products.map((product) => (
            <div key={product.id} className={`category-card category-card--${product.theme} reveal`}>
              <span className="category-card__title">Pudim</span>
              <div className="category-card__image">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`Pudim de ${product.name}`}
                    className="category-card__img"
                    style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
                  />
                ) : (
                  <div className="category-card__placeholder">
                    <span className="category-card__placeholder-icon">🍮</span>
                    <span>Em breve</span>
                  </div>
                )}
              </div>
              <div className="category-card__subtitle">
                <span className="category-card__name">{product.name}</span>
              </div>
              <button
                className="category-card__add-btn"
                onClick={() => handleAddClick(product)}
                aria-label={`Adicionar pudim de ${product.name} ao carrinho`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Size Selection Modal */}
      {sizeModal.open && (
        <div className="size-modal-overlay" onClick={handleCloseModal}>
          <div className="size-modal" onClick={(e) => e.stopPropagation()}>
            <button className="size-modal__close" onClick={handleCloseModal} aria-label="Fechar">
              ✕
            </button>
            <h3 className="size-modal__title">Escolha o tamanho</h3>
            <p className="size-modal__product-name">
              Pudim de {sizeModal.product?.name}
            </p>
            <div className="size-modal__options">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  className="size-modal__option"
                  onClick={() => handleSelectSize(size)}
                >
                  <span className="size-modal__option-icon">{size.icon}</span>
                  <span className="size-modal__option-label">{size.label}</span>
                  <span className="size-modal__option-weight">{size.weight}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
