import React from 'react';

// Sample product dataset with distinct categories
const MOCK_PRODUCTS = [
  { id: 1, name: 'Apple', price: 1.99, category: 'Fruits' },
  { id: 2, name: 'Banana', price: 0.99, category: 'Fruits' },
  { id: 3, name: 'Milk', price: 3.49, category: 'Dairy' },
  { id: 4, name: 'Cheese', price: 4.99, category: 'Dairy' },
];

const ProductList = ({ category, isDarkMode, onAddToCart }) => {
  
  // Filters elements based on the state variable received from App.jsx
  const filteredProducts = category === 'all' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(product => product.category === category);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Products ({category})</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            style={{
              border: isDarkMode ? '1px solid #444' : '1px solid #ddd',
              backgroundColor: isDarkMode ? '#333' : '#fafafa',
              color: isDarkMode ? '#fff' : '#000',
              padding: '15px',
              borderRadius: '6px',
              minWidth: '150px'
            }}
          >
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button 
              onClick={() => onAddToCart(product)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
        {filteredProducts.length === 0 && <p>No products found in this category.</p>}
      </div>
    </div>
  );
};

export default ProductList;
