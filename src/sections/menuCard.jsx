import React from 'react';
import '../styles/menuCard.css'
import ProductCard from './ProductCard';

export default function MenuSection({ products, onAddToCart }) {
  return (
    <section id="menu" className="section">
      <div className="section-header">
        <h2 className="section-title">Our Flavors</h2>
        <p className="section-subtitle">Crafted with whole ingredients and zero artificial preservatives</p>
      </div>
      <div className="menu-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}