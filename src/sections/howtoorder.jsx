import React from 'react';
import '../styles/howtoorder.css'
import { ShoppingBag, ClipboardList, Truck, Sparkles, ExternalLink } from 'lucide-react';

export default function HowToOrderSection({ formUrl }) {
  const steps = [
    {
      num: 1,
      icon: <ShoppingBag size={28} />,
      title: "1. Select Flavors",
      description: "Browse our artisan menu above and choose your favorite fresh yogurts."
    },
    {
      num: 2,
      icon: <ClipboardList size={28} />,
      title: "2. Fill Google Form",
      description: "Click 'Order Now' to be redirected to our Google Form to provide delivery details."
    },
    {
      num: 3,
      icon: <Sparkles size={28} />,
      title: "3. Confirmation",
      description: "We review your order, send payment instructions, and prepare your fresh batch."
    },
    {
      num: 4,
      icon: <Truck size={28} />,
      title: "4. Chilled Delivery",
      description: "Receive your artisan yogurt packed safely in insulated temperature-controlled packages."
    }
  ];

  return (
    <section id="how-to-order" className="how-to-order-bg">
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">How To Order</h2>
          <p className="section-subtitle">Simple, direct, and fresh to your doorstep in 4 simple steps</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-number">{step.num}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="cta-banner">
          <h3 className="cta-title">Ready to place your order?</h3>
          <p className="cta-subtitle">Jump straight to our order form to submit your delivery request instantly.</p>
          <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
            Complete Order Form <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}