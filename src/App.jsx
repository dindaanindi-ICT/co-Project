import { useState } from 'react'
import Header from './sections/header'
import './App.css'
import HeroSection from './sections/hero'
import MenuSection from './sections/menuCard'
import HowToOrderSection from './sections/howtoorder'
import QualityStandards from './sections/qualityStandard'
import OrderDrawer from './sections/orderDrawer'
import Footer from './sections/footer'

function App() {
const YOGURT_PRODUCTS = [
  {
    id: 1,
    title: "Wild Blueberry & Honey",
    price: 5.50,
    description: "Creamy whole-milk yogurt layered with sweet Maine wild blueberries and local clover honey.",
    calories: 180,
    size: "200g jar",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Madagascar Vanilla Bean",
    price: 4.99,
    description: "Classic Greek yogurt infused with real Madagascar bourbon vanilla bean specks.",
    calories: 160,
    size: "200g jar",
    image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Mediterranean Peach",
    price: 5.25,
    description: "Chunks of ripe sun-soaked peaches in a silky, rich strain of low-sugar yogurt.",
    calories: 170,
    size: "200g jar",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Pistachio & Rose Blossom",
    price: 6.25,
    description: "A delicate middle-eastern inspired flavor featuring crushed pistachios and subtle rose water.",
    calories: 210,
    size: "200g jar",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Dark Chocolate Raspberry",
    price: 5.75,
    description: "Tart raspberry compote topped with 70% dark chocolate shavings and rich cream.",
    calories: 220,
    size: "200g jar",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Pure Original Greek",
    price: 4.50,
    description: "Thick, ultra-creamy unsweetened traditional Greek yogurt rich in protein.",
    calories: 130,
    size: "200g jar",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80"
  }
];

const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Replace with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://forms.google.com/";

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)}/>
      <HeroSection/>
      <MenuSection
        products={YOGURT_PRODUCTS}
        onAddToCart={handleAddToCart}/>
      <HowToOrderSection 
        formUrl={GOOGLE_FORM_URL}/>
      <QualityStandards 
         formUrl={GOOGLE_FORM_URL}/>
      <OrderDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        total={totalCartAmount}
        formUrl={GOOGLE_FORM_URL}/>
      <Footer />
    </>
  )
}

export default App
