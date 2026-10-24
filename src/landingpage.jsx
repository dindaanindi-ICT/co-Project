// /* Custom CSS Variables & Base Setup */
// :root {
//   --primary: #5c3d2e;
//   --primary-light: #8d5b4c;
//   --accent: #d97736;
//   --accent-light: #fef3ec;
//   --bg-cream: #faf6f0;
//   --card-bg: #ffffff;
//   --text-dark: #2d2422;
//   --text-muted: #736764;
//   --border-color: #ede5da;
//   --shadow-sm: 0 2px 8px rgba(92, 61, 46, 0.05);
//   --shadow-md: 0 8px 24px rgba(92, 61, 46, 0.08);
//   --shadow-lg: 0 16px 32px rgba(92, 61, 46, 0.12);
//   --radius-sm: 8px;
//   --radius-md: 16px;
//   --radius-lg: 24px;
// }

// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
// }

// body {
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
//   background-color: var(--bg-cream);
//   color: var(--text-dark);
//   line-height: 1.5;
// }

// .app-container {
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// }

// .main-content {
//   flex: 1;
// }

// /* Header */
// .header {
//   position: sticky;
//   top: 0;
//   z-index: 100;
//   background-color: rgba(250, 246, 240, 0.9);
//   backdrop-filter: blur(8px);
//   border-bottom: 1px solid var(--border-color);
//   padding: 1rem 2rem;
// }

// .header-nav {
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }

// .logo {
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   text-decoration: none;
//   color: var(--primary);
// }

// .logo-icon {
//   width: 40px;
//   height: 40px;
//   background-color: var(--accent-light);
//   color: var(--accent);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .logo-title {
//   font-size: 1.25rem;
//   font-weight: 700;
//   letter-spacing: -0.02em;
// }

// .cart-toggle-btn {
//   background: var(--card-bg);
//   border: 1px solid var(--border-color);
//   border-radius: var(--radius-md);
//   padding: 0.5rem 1rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   cursor: pointer;
//   color: var(--primary);
//   font-weight: 600;
//   transition: all 0.2s ease;
// }

// .cart-toggle-btn:hover {
//   background-color: #f3ece3;
// }

// .cart-count {
//   background-color: var(--accent);
//   color: white;
//   font-size: 0.75rem;
//   padding: 0.15rem 0.5rem;
//   border-radius: 12px;
// }

// /* Hero Section */
// .hero {
//   background: linear-gradient(180deg, var(--bg-cream) 0%, #f4ede2 100%);
//   padding: 5rem 2rem 4rem;
//   text-align: center;
// }

// .hero-content {
//   max-width: 800px;
//   margin: 0 auto;
// }

// .hero-subtitle {
//   color: var(--accent);
//   text-transform: uppercase;
//   font-size: 0.875rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   margin-bottom: 1rem;
// }

// .hero-title {
//   font-size: 3rem;
//   color: var(--primary);
//   margin-bottom: 1.25rem;
//   line-height: 1.15;
// }

// .hero-description {
//   font-size: 1.125rem;
//   color: var(--text-muted);
//   max-width: 600px;
//   margin: 0 auto 2.5rem;
// }

// .hero-actions {
//   display: flex;
//   gap: 1rem;
//   justify-content: center;
//   flex-wrap: wrap;
// }

// /* Common Buttons */
// .btn-primary {
//   background-color: var(--primary);
//   color: white;
//   border: none;
//   border-radius: var(--radius-md);
//   padding: 0.875rem 1.75rem;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   text-decoration: none;
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   transition: all 0.2s ease;
// }

// .btn-primary:hover {
//   background-color: var(--primary-light);
//   transform: translateY(-2px);
// }

// .btn-secondary {
//   background-color: transparent;
//   color: var(--primary);
//   border: 1px solid var(--primary);
//   border-radius: var(--radius-md);
//   padding: 0.875rem 1.75rem;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   text-decoration: none;
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   transition: all 0.2s ease;
// }

// .btn-secondary:hover {
//   background-color: rgba(92, 61, 46, 0.05);
// }

// /* Sections */
// .section {
//   padding: 4rem 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
// }

// .section-header {
//   text-align: center;
//   margin-bottom: 3rem;
// }

// .section-title {
//   font-size: 2.25rem;
//   color: var(--primary);
//   margin-bottom: 0.75rem;
// }

// .section-subtitle {
//   color: var(--text-muted);
//   font-size: 1.125rem;
// }

// /* Menu Grid & Product Cards */
// .menu-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   gap: 2rem;
// }

// .product-card {
//   background-color: var(--card-bg);
//   border-radius: var(--radius-lg);
//   overflow: hidden;
//   box-shadow: var(--shadow-sm);
//   border: 1px solid var(--border-color);
//   display: flex;
//   flex-direction: column;
//   transition: all 0.3s ease;
// }

// .product-card:hover {
//   transform: translateY(-6px);
//   box-shadow: var(--shadow-md);
// }

// .product-image-container {
//   height: 220px;
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// }

// .product-image {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.5s ease;
// }

// .product-card:hover .product-image {
//   transform: scale(1.05);
// }

// .product-info {
//   padding: 1.5rem;
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// }

// .product-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-bottom: 0.75rem;
// }

// .product-name {
//   font-size: 1.25rem;
//   color: var(--primary);
//   font-weight: 700;
// }

// .product-price {
//   font-size: 1.25rem;
//   font-weight: 700;
//   color: var(--accent);
// }

// .product-description {
//   color: var(--text-muted);
//   font-size: 0.9375rem;
//   margin-bottom: 1.25rem;
//   flex: 1;
// }

// .product-meta {
//   font-size: 0.8125rem;
//   color: #a0938e;
//   margin-bottom: 1rem;
// }

// .btn-add-cart {
//   width: 100%;
//   background-color: var(--bg-cream);
//   color: var(--primary);
//   border: 1px solid var(--border-color);
//   border-radius: var(--radius-md);
//   padding: 0.75rem;
//   font-weight: 600;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   transition: all 0.2s ease;
// }

// .btn-add-cart:hover {
//   background-color: var(--primary);
//   color: white;
//   border-color: var(--primary);
// }

// /* How to Order Section */
// .how-to-order-bg {
//   background-color: rgba(255, 255, 255, 0.6);
//   border-top: 1px solid var(--border-color);
//   border-bottom: 1px solid var(--border-color);
// }

// .steps-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//   gap: 2rem;
//   margin-bottom: 3rem;
// }

// .step-card {
//   background-color: var(--card-bg);
//   padding: 2rem;
//   border-radius: var(--radius-md);
//   box-shadow: var(--shadow-sm);
//   border: 1px solid var(--border-color);
//   text-align: center;
// }

// .step-number {
//   width: 32px;
//   height: 32px;
//   background-color: var(--accent-light);
//   color: var(--accent);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 700;
//   margin: 0 auto 1rem;
// }

// .step-icon {
//   color: var(--primary);
//   margin-bottom: 1rem;
// }

// .step-title {
//   font-size: 1.125rem;
//   color: var(--primary);
//   margin-bottom: 0.5rem;
// }

// .step-description {
//   color: var(--text-muted);
//   font-size: 0.875rem;
// }

// .cta-banner {
//   text-align: center;
//   background-color: var(--primary);
//   color: white;
//   padding: 2.5rem;
//   border-radius: var(--radius-lg);
// }

// .cta-title {
//   font-size: 1.5rem;
//   margin-bottom: 0.5rem;
// }

// .cta-subtitle {
//   opacity: 0.8;
//   margin-bottom: 1.5rem;
// }

// /* Quality Standards */
// .standards-grid {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 2rem;
// }

// .standard-item {
//   display: flex;
//   gap: 1rem;
// }

// .standard-icon {
//   width: 48px;
//   height: 48px;
//   background-color: var(--accent-light);
//   color: var(--accent);
//   border-radius: var(--radius-md);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-shrink: 0;
// }

// .standard-title {
//   font-size: 1.125rem;
//   color: var(--primary);
//   margin-bottom: 0.25rem;
// }

// .standard-description {
//   color: var(--text-muted);
//   font-size: 0.875rem;
// }

// /* Drawer / Sidebar Cart */
// .drawer-overlay {
//   position: fixed;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.4);
//   backdrop-filter: blur(2px);
//   z-index: 200;
// }

// .drawer {
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   max-width: 420px;
//   background-color: var(--card-bg);
//   z-index: 201;
//   display: flex;
//   flex-direction: column;
//   box-shadow: var(--shadow-lg);
//   animation: slideIn 0.3s ease-out;
// }

// @keyframes slideIn {
//   from { transform: translateX(100%); }
//   to { transform: translateX(0); }
// }

// .drawer-header {
//   padding: 1.25rem;
//   border-bottom: 1px solid var(--border-color);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .drawer-title {
//   font-size: 1.25rem;
//   color: var(--primary);
// }

// .btn-close {
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: var(--text-muted);
// }

// .drawer-body {
//   flex: 1;
//   overflow-y: auto;
//   padding: 1.25rem;
// }

// .cart-empty {
//   text-align: center;
//   padding: 3rem 1rem;
//   color: var(--text-muted);
// }

// .cart-item {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 0;
//   border-bottom: 1px solid var(--border-color);
// }

// .cart-item-name {
//   font-weight: 600;
//   color: var(--primary);
// }

// .cart-item-price {
//   font-size: 0.875rem;
//   color: var(--text-muted);
// }

// .quantity-controls {
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// }

// .btn-qty {
//   width: 28px;
//   height: 28px;
//   border: 1px solid var(--border-color);
//   border-radius: 4px;
//   background-color: var(--bg-cream);
//   cursor: pointer;
// }

// .drawer-footer {
//   padding: 1.25rem;
//   border-top: 1px solid var(--border-color);
//   background-color: var(--bg-cream);
// }

// .cart-total {
//   display: flex;
//   justify-content: space-between;
//   font-size: 1.25rem;
//   font-weight: 700;
//   color: var(--primary);
//   margin-bottom: 1rem;
// }

// /* Footer */
// .footer {
//   background-color: var(--primary);
//   color: #d1c4bd;
//   padding: 3rem 2rem 1.5rem;
//   margin-top: auto;
// }

// .footer-content {
//   max-width: 1200px;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//   gap: 2rem;
//   margin-bottom: 2rem;
// }

// .footer-logo {
//   color: white;
//   font-size: 1.25rem;
//   font-weight: 700;
//   margin-bottom: 0.75rem;
// }

// .footer-text {
//   font-size: 0.875rem;
// }

// .footer-heading {
//   color: white;
//   font-size: 1rem;
//   margin-bottom: 1rem;
// }

// .footer-links {
//   list-style: none;
// }

// .footer-links li {
//   margin-bottom: 0.5rem;
// }

// .footer-links a {
//   color: inherit;
//   text-decoration: none;
//   font-size: 0.875rem;
// }

// .footer-links a:hover {
//   color: white;
// }

// .footer-bottom {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding-top: 1.5rem;
//   border-top: 1px solid rgba(255, 255, 255, 0.1);
//   text-align: center;
//   font-size: 0.8125rem;
// }

// @media (max-width: 640px) {
//   .hero-title {
//     font-size: 2.25rem;
//   }
// }
// // Header
// import React from 'react';
// import { ShoppingBag, HeartHandshake } from 'lucide-react';

// export default function Header({ cartCount, onOpenCart }) {
//   return (
//     <header className="header">
//       <nav className="header-nav">
//         <a href="#" className="logo">
//           <div className="logo-icon">
//             <HeartHandshake size={24} />
//           </div>
//           <span className="logo-title">Velvet & Vine</span>
//         </a>
//         <button className="cart-toggle-btn" onClick={onOpenCart}>
//           <ShoppingBag size={20} />
//           <span>My Order</span>
//           {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//         </button>
//       </nav>
//     </header>
//   );
// }

// //Hero

// import React from 'react';
// import { ExternalLink, ArrowRight } from 'lucide-react';

// export default function HeroSection({ formUrl }) {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <p className="hero-subtitle">Handcrafted Daily in Small Batches</p>
//         <h1 className="hero-title">Pure, Artisanal Greek Yogurt</h1>
//         <p className="hero-description">
//           Made with organic whole milk, natural probiotics, and real fruit compote. Smooth, rich, and delivered directly to your doorstep.
//         </p>
//         <div className="hero-actions">
//           <a href="#menu" className="btn-primary">
//             Explore Menu <ArrowRight size={18} />
//           </a>
//           <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
//             Direct Order Form <ExternalLink size={18} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// //productCard
// import React from 'react';
// import { Plus } from 'lucide-react';

// export default function ProductCard({ product, onAddToCart }) {
//   return (
//     <div className="product-card">
//       <div className="product-image-container">
//         <img src={product.image} alt={product.title} className="product-image" />
//       </div>
//       <div className="product-info">
//         <div className="product-header">
//           <h3 className="product-name">{product.title}</h3>
//           <span className="product-price">${product.price.toFixed(2)}</span>
//         </div>
//         <p className="product-description">{product.description}</p>
//         <div className="product-meta">{product.calories} calories • {product.size}</div>
//         <button className="btn-add-cart" onClick={() => onAddToCart(product)}>
//           <Plus size={18} /> Add to Order
//         </button>
//       </div>
//     </div>
//   );
// }

// //MenuSection
// import React from 'react';
// import ProductCard from './ProductCard';

// export default function MenuSection({ products, onAddToCart }) {
//   return (
//     <section id="menu" className="section">
//       <div className="section-header">
//         <h2 className="section-title">Our Flavors</h2>
//         <p className="section-subtitle">Crafted with whole ingredients and zero artificial preservatives</p>
//       </div>
//       <div className="menu-grid">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
//         ))}
//       </div>
//     </section>
//   );
// }

// //How to Order

// import React from 'react';
// import { ShoppingBag, ClipboardList, Truck, Sparkles, ExternalLink } from 'lucide-react';

// export default function HowToOrderSection({ formUrl }) {
//   const steps = [
//     {
//       num: 1,
//       icon: <ShoppingBag size={28} />,
//       title: "1. Select Flavors",
//       description: "Browse our artisan menu above and choose your favorite fresh yogurts."
//     },
//     {
//       num: 2,
//       icon: <ClipboardList size={28} />,
//       title: "2. Fill Google Form",
//       description: "Click 'Order Now' to be redirected to our Google Form to provide delivery details."
//     },
//     {
//       num: 3,
//       icon: <Sparkles size={28} />,
//       title: "3. Confirmation",
//       description: "We review your order, send payment instructions, and prepare your fresh batch."
//     },
//     {
//       num: 4,
//       icon: <Truck size={28} />,
//       title: "4. Chilled Delivery",
//       description: "Receive your artisan yogurt packed safely in insulated temperature-controlled packages."
//     }
//   ];

//   return (
//     <section id="how-to-order" className="how-to-order-bg">
//       <div className="section">
//         <div className="section-header">
//           <h2 className="section-title">How To Order</h2>
//           <p className="section-subtitle">Simple, direct, and fresh to your doorstep in 4 simple steps</p>
//         </div>
//         <div className="steps-grid">
//           {steps.map((step) => (
//             <div key={step.num} className="step-card">
//               <div className="step-number">{step.num}</div>
//               <div className="step-icon">{step.icon}</div>
//               <h3 className="step-title">{step.title}</h3>
//               <p className="step-description">{step.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className="cta-banner">
//           <h3 className="cta-title">Ready to place your order?</h3>
//           <p className="cta-subtitle">Jump straight to our order form to submit your delivery request instantly.</p>
//           <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>
//             Complete Order Form <ExternalLink size={18} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Quality Standards

// import React from 'react';
// import { ShieldCheck, Heart, Truck } from 'lucide-react';

// export default function QualityStandards() {
//   const standards = [
//     {
//       icon: <ShieldCheck size={24} />,
//       title: "100% Organic Dairy",
//       description: "Sourced exclusively from local family farms with grass-fed cows."
//     },
//     {
//       icon: <Heart size={24} />,
//       title: "Active Probiotics",
//       description: "Contains 5 live strains to support natural digestive wellness."
//     },
//     {
//       icon: <Truck size={24} />,
//       title: "Temperature Controlled",
//       description: "Shipped in cold thermal packaging to ensure peak freshness."
//     }
//   ];

//   return (
//     <section className="section">
//       <div className="standards-grid">
//         {standards.map((item, idx) => (
//           <div key={idx} className="standard-item">
//             <div className="standard-icon">{item.icon}</div>
//             <div>
//               <h4 className="standard-title">{item.title}</h4>
//               <p className="standard-description">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// //OrderDrawer
// import React from 'react';
// import { X, ExternalLink } from 'lucide-react';

// export default function OrderDrawer({ isOpen, onClose, cart, onUpdateQuantity, total, formUrl }) {
//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="drawer-overlay" onClick={onClose} />
//       <div className="drawer">
//         <div className="drawer-header">
//           <h3 className="drawer-title">Your Selected Items</h3>
//           <button className="btn-close" onClick={onClose}>
//             <X size={24} />
//           </button>
//         </div>

//         <div className="drawer-body">
//           {cart.length === 0 ? (
//             <div className="cart-empty">
//               <p>Your basket is currently empty.</p>
//               <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Add some flavors to get started!</p>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <div>
//                   <div className="cart-item-name">{item.title}</div>
//                   <div className="cart-item-price">${item.price.toFixed(2)} each</div>
//                 </div>
//                 <div className="quantity-controls">
//                   <button className="btn-qty" onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button className="btn-qty" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="drawer-footer">
//           <div className="cart-total">
//             <span>Estimated Total:</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//           <a
//             href={formUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-primary"
//             style={{ width: '100%', justifyContent: 'center' }}
//           >
//             Submit Order via Google Form <ExternalLink size={18} />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// //footer
// import React from 'react';

// export default function Footer({ formUrl }) {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div>
//           <h3 className="footer-logo">Velvet & Vine</h3>
//           <p className="footer-text">Pure, artisan Greek yogurt made with real ingredients and crafted daily in small batches.</p>
//         </div>
//         <div>
//           <h4 className="footer-heading">Quick Links</h4>
//           <ul className="footer-links">
//             <li><a href="#menu">Our Menu</a></li>
//             <li><a href="#how-to-order">How to Order</a></li>
//             <li><a href={formUrl} target="_blank" rel="noopener noreferrer">Google Order Form</a></li>
//           </ul>
//         </div>
//         <div>
//           <h4 className="footer-heading">Contact & Hours</h4>
//           <p className="footer-text">Orders accepted Mon – Sat</p>
//           <p className="footer-text">Deliveries every Tuesday & Friday</p>
//           <p className="footer-text" style={{ marginTop: '0.5rem' }}>hello@velvetandvine.com</p>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Velvet & Vine Artisan Yogurt. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// //App js
// import React, { useState } from 'react';
// import './styles.css';

// // Import Section Components
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import MenuSection from './components/MenuSection';
// import HowToOrderSection from './components/HowToOrderSection';
// import QualityStandards from './components/QualityStandards';
// import OrderDrawer from './components/OrderDrawer';
// import Footer from './components/Footer';

// // Product Catalog Data
// const YOGURT_PRODUCTS = [
//   {
//     id: 1,
//     title: "Wild Blueberry & Honey",
//     price: 5.50,
//     description: "Creamy whole-milk yogurt layered with sweet Maine wild blueberries and local clover honey.",
//     calories: 180,
//     size: "200g jar",
//     image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 2,
//     title: "Madagascar Vanilla Bean",
//     price: 4.99,
//     description: "Classic Greek yogurt infused with real Madagascar bourbon vanilla bean specks.",
//     calories: 160,
//     size: "200g jar",
//     image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 3,
//     title: "Mediterranean Peach",
//     price: 5.25,
//     description: "Chunks of ripe sun-soaked peaches in a silky, rich strain of low-sugar yogurt.",
//     calories: 170,
//     size: "200g jar",
//     image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 4,
//     title: "Pistachio & Rose Blossom",
//     price: 6.25,
//     description: "A delicate middle-eastern inspired flavor featuring crushed pistachios and subtle rose water.",
//     calories: 210,
//     size: "200g jar",
//     image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 5,
//     title: "Dark Chocolate Raspberry",
//     price: 5.75,
//     description: "Tart raspberry compote topped with 70% dark chocolate shavings and rich cream.",
//     calories: 220,
//     size: "200g jar",
//     image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 6,
//     title: "Pure Original Greek",
//     price: 4.50,
//     description: "Thick, ultra-creamy unsweetened traditional Greek yogurt rich in protein.",
//     calories: 130,
//     size: "200g jar",
//     image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
//   }
// ];

// export default function App() {
//   const [cart, setCart] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   // Replace with your actual Google Form URL
//   const GOOGLE_FORM_URL = "https://forms.google.com/";

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => {
//       const existing = prevCart.find((item) => item.id === product.id);
//       if (existing) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//     setIsCartOpen(true);
//   };

//   const handleUpdateQuantity = (productId, delta) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) => {
//           if (item.id === productId) {
//             const newQty = item.quantity + delta;
//             return newQty > 0 ? { ...item, quantity: newQty } : null;
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//   };

//   const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const totalCartAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="app-container">
//       <Header cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />

//       <main className="main-content">
//         <HeroSection formUrl={GOOGLE_FORM_URL} />
//         <MenuSection products={YOGURT_PRODUCTS} onAddToCart={handleAddToCart} />
//         <HowToOrderSection formUrl={GOOGLE_FORM_URL} />
//         <QualityStandards />
//       </main>

//       <Footer formUrl={GOOGLE_FORM_URL} />

//       <OrderDrawer
//         isOpen={isCartOpen}
//         onClose={() => setIsCartOpen(false)}
//         cart={cart}
//         onUpdateQuantity={handleUpdateQuantity}
//         total={totalCartAmount}
//         formUrl={GOOGLE_FORM_URL}
//       />
//     </div>
//   );
// }