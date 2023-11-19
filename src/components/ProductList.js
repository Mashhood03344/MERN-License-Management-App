// src/components//userProductList.js

import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch list of products when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products/show');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h2>Product List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Version</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.version}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;