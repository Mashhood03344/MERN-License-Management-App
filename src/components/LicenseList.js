// src/components/LicenseList.js

import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

function LicenseList() {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    // Fetch licenses from the backend when the component mounts
    axios.get('http://localhost:5000/api/licenses/show')
      .then(response => {
        setLicenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching licenses:', error);
      });
  }, []);

  return (
    <div>
      <h2>License List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>License Key</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Activation Status</th>
          </tr>
        </thead>
        <tbody>
          {licenses.map((license, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{license.key}</td>
              <td>{license.ProductID}</td>
              <td>{license.ProductName}</td>
              <td>{license.UserID}</td>
              <td>{license.UserName}</td>
              <td>{license.activated ? 'Activated' : 'Not Activated'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default LicenseList;
