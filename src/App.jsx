import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';
import Cart from './components/Cart';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useScrollReveal();

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories onAddToCart={handleAddToCart} />
        <About />
      </main>
      <Footer />
      <Cart
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </>
  );
}

export default App;

