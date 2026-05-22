import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  
  // 1. State to manage category selection
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div style={{ 
      backgroundColor: darkMode ? '#222' : '#fff', 
      color: darkMode ? '#fff' : '#222',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>🛒 Shopping App</h1>
        <DarkModeToggle isDarkMode={darkMode} setIsDarkMode={setDarkMode} />
      </header>

      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      {/* 2. onChange event updates the category state directly */}
      <div style={{ margin: '20px 0' }}>
        <label htmlFor="category-select">Filter by Category: </label>
        <select 
          id="category-select"
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '5px', borderRadius: '4px' }}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* 3. Passing the category state into ProductList */}
      <ProductList 
        category={selectedCategory} 
        isDarkMode={darkMode} 
        onAddToCart={handleAddToCart} 
      />

      <Cart 
        cartItems={cart} 
        isDarkMode={darkMode} 
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
