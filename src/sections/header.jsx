import React from 'react';
import '../styles/header.css'
import { ShoppingBag, HeartHandshake } from 'lucide-react';

export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#" className="logo">
          <div className="logo-icon">
            <HeartHandshake size={24} />
          </div>
          <span className="logo-title">[Your Shop Name]</span>
        </a>
        <button className="cart-toggle-btn" onClick={onOpenCart}>
          <ShoppingBag size={20} />
          <span>My Order</span>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </nav>
    </header>
  );
}