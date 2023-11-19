// src/components/admin/ProductManagement.js

import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    version: '',
    description: '',
  });

  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    fetchProducts();
  }, []); // Empty dependency array to run the effect only once on mount

  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/products/show')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => {
    setShowModal(false);
    setFormData({
      name: '',
      version: '',
      description: '',
    });
    setEditProductId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (editProductId) {
      // Update existing product
      axios.put(`http://localhost:5000/api/products/${editProductId}`, formData)
        .then(() => {
          fetchProducts();
          handleModalClose();
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
    } else {
      // Add new product
      axios.post('http://localhost:5000/api/products/create', formData)
        .then(() => {
          fetchProducts();
          handleModalClose();
        })
        .catch(error => {
          console.error('Error adding product:', error);
        });
    }
  };

  const handleEditProduct = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    setEditProductId(productId);
    setFormData({
      name: selectedProduct.name,
      version: selectedProduct.version,
      description: selectedProduct.description,
    });
    handleModalShow();
  };

  const handleDeleteProduct = (productId) => {
    axios.delete(`http://localhost:5000/api/products/${productId}`)
      .then(() => {
        fetchProducts();
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (

  <div className="mt-3 ml-5 mr-5">
  <h2>Product List</h2>
  <br></br>
  <Button variant="primary" onClick={handleModalShow} className="mb-3">
    Add Product
  </Button>


  <Table striped bordered hover>
  <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Version</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.version}</td>
                <td>{product.description}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </Button>
                  <br></br>
                  <br></br>
                  <Button variant="warning" onClick={() => handleEditProduct(product.id)}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
  </Table>

  {/* Add/Edit Product Modal */}
  <Modal show={showModal} onHide={handleModalClose}>
    <Modal.Header closeButton>
      <Modal.Title>{editProductId ? 'Update Product' : 'Add Product'}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>    
              <Form.Group controlId="formProductId">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product ID"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formProductName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formProductVersion">
                <Form.Label>Version</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product version"
                  name="version"
                  value={formData.version}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formProductDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter product description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleModalClose}>
        Close
      </Button>
      {/* Added space and proper alignment for buttons */}
      <Button variant="primary" onClick={handleAddProduct} className="mr-2">
        {editProductId ? 'Update Product' : 'Add Product'}
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  );
}

export default ProductManagement;
