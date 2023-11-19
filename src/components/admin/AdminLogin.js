// src/components/admin/AdminLogin.js

import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's assume successful login for any input
    navigate('/admin-home');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <h1 className="text-center mb-4">Admin Login</h1>
            <Form.Group controlId="formAdminUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formAdminPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleLogin} className="mt-3">
              Login
            </Button>
            <p className="mt-3 text-center">
              Switch to User <a href="/user-login" className="btn btn-link">User Login</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
