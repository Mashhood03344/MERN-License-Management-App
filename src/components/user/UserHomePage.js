// src/components/user/UserHomePage.js

// import React from 'react';

// const UserHomePage = () => {
//   return (
//     <div className="container mt-5">
//       <div className="jumbotron">
//         <h1 className="display-4">Welcome to License Management App</h1>
//         <p className="lead">
//           This app is designed to help you activate and view licenses for your cloud-based software products.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default UserHomePage;


import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import UserWelcome from './UserWelcome';
import LicenseActivation from './LicenseActivation';
import ActivatedLicenseDashboard from './ActivatedLicenseDashboard';

const UserHomePage = () => {
  return (
    <div>
      {/* User Home Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="ml-3">
            User Home
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/user/LicenseActivation">
              License Activation
            </Nav.Link>
            <Nav.Link as={Link} to="/user/ActivatedLicenseDashboard">
              Activated Licenses
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* User Home Routes */}
      <Routes>
        <Route path="/user/user-welcome" element={<UserWelcome />} />
        <Route path="/user/LicenseActivation" element={<LicenseActivation />} />
        <Route path="/user/ActivatedLicenseDashboard" element={<ActivatedLicenseDashboard />} />
      </Routes>

      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to License Management App</h1>
          <p className="lead">
          This app is designed to help you activate and view licenses for your cloud-based software products.
          </p>
        </div>
     </div>

    </div>
  );
};


export default UserHomePage;





