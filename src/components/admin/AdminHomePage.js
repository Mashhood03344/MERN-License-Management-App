// src/components/admin/AdminHomePage.js

import React from 'react';

import { Link, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import ProductManagement from './ProductManagement';
import LicenseManagement from './LicenseManagement';
import LicenseGeneration from './LicenseGeneration';


const AdminHomePage = () => {
  return (

    <div>
    {/* User Home Navbar */}
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="ml-3">
          Admin Home
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/admin/products">
            Product Management
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/licenses">
            License Management
          </Nav.Link>
          <Nav.Link as={Link} to="/admin/generate">
            License Generation
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    {/* User Home Routes */}
    <Routes>
      <Route path="/admin/products" element={<ProductManagement />} />
      <Route path="/admin/licenses" element={<LicenseManagement />} />
      <Route path="/admin/generate" element={<LicenseGeneration />} />
    </Routes>
    
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to License Management App</h1>
        <p className="lead">
          This app is designed to help you manage, distribute, and validate licenses for your cloud-based software products.
        </p>
      </div>
    </div>

  </div>
    
  );
};

export default AdminHomePage;
