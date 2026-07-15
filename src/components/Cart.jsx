import React, { useState } from 'react';

export default function Cart({ items, onRemoveItem, onClearCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = items.length;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const message = items.map((item, i) =>
      `${i + 1}. Pudim de ${item.name} — ${item.sizeLabel} (${item.sizeWeight})`
    ).join('\n');

    const fullMessage = `Olá! Gostaria de fazer o seguinte pedido:\n\n${message}\n\nTotal de itens: ${totalItems}`;
    const encoded = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/5531999302308?text=${encoded}`, '_blank');
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        className={`cart-float ${totalItems > 0 ? 'cart-float--has-items' : ''}`}
        onClick={handleToggle}
        aria-label="Abrir carrinho de compras"
        id="cart-float-btn"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        {totalItems > 0 && (
          <span className="cart-float__badge">{totalItems}</span>
        )}
      </button>

      {/* Cart Panel */}
      {isOpen && (
        <div className="cart-overlay" onClick={handleToggle}>
          <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
            <div className="cart-panel__header">
              <h3 className="cart-panel__title">
                🛒 Seu Pedido
              </h3>
              <button className="cart-panel__close" onClick={handleToggle} aria-label="Fechar carrinho">
                ✕
              </button>
            </div>

            <div className="cart-panel__body">
              {items.length === 0 ? (
                <div className="cart-panel__empty">
                  <span className="cart-panel__empty-icon">🍮</span>
                  <p>Seu carrinho está vazio</p>
                  <span className="cart-panel__empty-hint">Adicione pudins do cardápio!</span>
                </div>
              ) : (
                <ul className="cart-panel__list">
                  {items.map((item, index) => (
                    <li key={index} className="cart-item">
                      <div className="cart-item__info">
                        <span className="cart-item__name">Pudim de {item.name}</span>
                        <span className="cart-item__size">{item.sizeLabel} — {item.sizeWeight}</span>
                      </div>
                      <button
                        className="cart-item__remove"
                        onClick={() => onRemoveItem(index)}
                        aria-label={`Remover pudim de ${item.name}`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-panel__footer">
                <div className="cart-panel__summary">
                  <span>{totalItems} {totalItems === 1 ? 'item' : 'itens'} no pedido</span>
                </div>
                <div className="cart-panel__actions">
                  <button className="cart-panel__clear" onClick={onClearCart}>
                    Limpar
                  </button>
                  <button className="cart-panel__order" onClick={handleWhatsAppOrder}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enviar Pedido
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
