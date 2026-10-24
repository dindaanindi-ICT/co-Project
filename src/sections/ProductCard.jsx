import React from 'react';
import '../styles/productCard.css'
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.title}</h3>
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <button className="btn-add-cart" onClick={() => onAddToCart(product)}>
          <Plus size={18} /> Add to Order
        </button>
      </div>
    </div>
  );
}