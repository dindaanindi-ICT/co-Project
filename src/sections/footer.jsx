import React from 'react';
import '../styles/footer.css'

export default function Footer({ formUrl }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3 className="footer-logo">[Name of the Shop]</h3>
          <p className="footer-text">[catchy description of the product]</p>
        </div>
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#how-to-order">How to Order</a></li>
            <li><a href={formUrl} target="_blank" rel="noopener noreferrer">Google Order Form</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Contact & Hours</h4>
          <p className="footer-text">[which day that you accept orders]</p>
          <p className="footer-text">[Delivery day/hour]</p>
          <p className="footer-text" style={{ marginTop: '0.5rem' }}>[business email if you have]</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} [Name of your shop]. All rights reserved.</p>
      </div>
    </footer>
  );
}