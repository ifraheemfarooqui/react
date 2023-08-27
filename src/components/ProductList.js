import React from 'react';
import "./ProductList.css"

const ProductCard = ({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>Price: ${product.price.toFixed(2)}</p>
    <p>Quantity: {product.quantity}</p>
  </div>
);


  
const ProductList = () => {
    // Demo data for 10 products
    const products = [
      { id: 1, name: 'Product 1', price: 10.99, quantity: 5 },
      { id: 2, name: 'Product 2', price: 20.49, quantity: 3 },
      { id: 3, name: 'Product 3', price: 15.00, quantity: 7 },
      { id: 4, name: 'Product 4', price: 8.75, quantity: 10 },
      { id: 5, name: 'Product 5', price: 30.00, quantity: 2 },
      { id: 6, name: 'Product 6', price: 25.99, quantity: 4 },
      { id: 7, name: 'Product 7', price: 12.50, quantity: 8 },
      { id: 8, name: 'Product 8', price: 18.25, quantity: 6 },
      { id: 9, name: 'Product 9', price: 22.00, quantity: 9 },
      { id: 10, name: 'Product 10', price: 9.99, quantity: 1 },
    ];

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
