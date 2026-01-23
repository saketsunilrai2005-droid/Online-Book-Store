import React, { useState } from 'react';
import './App.css';
import "./index.css";

// Components
import { BookDetails } from './Components/product/bookDetails';
import { Loader } from './Components/common/loader';
import { Navbar } from './Components/common/navbar';
import { Home } from "./Pages/home";
import { CartPage } from './Components/cart/cartPage';
import { Checkout } from './Components/cart/checkout';
import { Order } from "./Pages/orders";

// Context
import { CartProvider, useCart } from './Context/cartContext';

const AppContent = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const { getTotalItems } = useCart();

  return (
    <div className="min-h-screen bg-slate-50">
      <Loader isLoading={false} />
      <Navbar 
        cartCount={getTotalItems()} 
        onCartClick={() => setCurrentPage('cart')}
      />

      {currentPage === 'home' && (
        <Home onBookSelect={setSelectedBook} />
      )}

      {currentPage === 'cart' && (
        <CartPage 
          onCheckout={() => setCurrentPage('checkout')}
          onBackToStore={() => setCurrentPage('home')}
        />
      )}

      {currentPage === 'checkout' && (
        <Checkout onBackToCart={() => setCurrentPage('cart')} />
      )}

      {currentPage === 'orders' && (
        <Order onBackToStore={() => setCurrentPage('home')} />
      )}

      {selectedBook && (
        <BookDetails 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)} 
        />
      )}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;