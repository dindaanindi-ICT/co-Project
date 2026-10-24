import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import '../styles/orderDrawer.css'

export default function OrderDrawer({ isOpen, onClose, cart, onUpdateQuantity, total, formUrl }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer">
        <div className="drawer-header">
          <h3 className="drawer-title">Your Selected Items</h3>
          <button className="btn-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your basket is currently empty.</p>
              <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Add some flavors to get started!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <div className="cart-item-name">{item.title}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)} each</div>
                </div>
                <div className="quantity-controls">
                  <button className="btn-qty" onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn-qty" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="drawer-footer">
          <div className="cart-total">
            <span>Estimated Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Submit Order via Google Form <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </>
  );
}