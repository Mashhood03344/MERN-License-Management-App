// src/App.js 

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import ProductManagement from './pages/ProductManagement';
// import LicenseManagement from './pages/LicenseManagement';
// import HomePage from './pages/HomePage';
// import LicenseActivation from './components/LicenseActivation'; // Import the LicenseActivation component
// import LicenseGeneration from './components/LicenseGeneration'; // Import the new component
// import ActivatedLicenseDashboard from './pages/ActivatedLicenseDashboard'; // Import the ActivatedLicenseDashboard component
// import AdminLogin from './components/AdminLogin';
// import UserLogin from './components/UserLogin';
// import AdminHomePage from './components/AdminHomePage.js'
// import UserHomePage from './components/UserHomePage.js'


// function App() {
//   return (
//       <div>
//         <Navbar bg="dark" variant="dark">
//           <Navbar.Brand href="/" className="ml-3">Home</Navbar.Brand>
//           <Navbar.Collapse className="justify-content-end">
//             <Nav>
//               <Nav.Link href="/products">Product Management</Nav.Link>
//               <Nav.Link href="/licenses" className="mr-3">License Management</Nav.Link>
//               <Nav.Link href="/activate" className="mr-3">Activate License</Nav.Link> {/* Add link to License Activation */}
//               <Nav.Link href="/generate" className="mr-3">License Generation</Nav.Link> {/* Add a link to the new component */}
//               <Nav.Link href="/activated" className="mr-3">Activated Licenses</Nav.Link> {/* Add a link to Activated License Dashboard */}
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/products" element={<ProductManagement />} />
//           <Route path="/licenses" element={<LicenseManagement />} />
//           <Route path="/activate" element={<LicenseActivation />} /> {/* Add a new route for License Activation */}
//           <Route path="/generate" element={<LicenseGeneration />} /> {/* Add a route for the new component */}
//           <Route path="/activated" element={<ActivatedLicenseDashboard />} /> {/* Add a new route for Activated License Dashboard */}        
//         </Routes>
//       </div>
//   );
// }

// export default App;

// src/App.js 




// function App() {
//   return (
//       <div>
//         <Navbar bg="dark" variant="dark">
//           <Navbar.Brand href="/" className="ml-3">Home</Navbar.Brand>
//           <Navbar.Collapse className="justify-content-end">
//             <Nav>
//               <Nav.Link href="/products">Product Management</Nav.Link>
//               <Nav.Link href="/licenses" className="mr-3">License Management</Nav.Link>
//               <Nav.Link href="/activate" className="mr-3">Activate License</Nav.Link> {/* Add link to License Activation */}
//               <Nav.Link href="/generate" className="mr-3">License Generation</Nav.Link> {/* Add a link to the new component */}
//               <Nav.Link href="/activated" className="mr-3">Activated Licenses</Nav.Link> {/* Add a link to Activated License Dashboard */}
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/products" element={<ProductManagement />} />
//           <Route path="/licenses" element={<LicenseManagement />} />
//           <Route path="/activate" element={<LicenseActivation />} /> {/* Add a new route for License Activation */}
//           <Route path="/generate" element={<LicenseGeneration />} /> {/* Add a route for the new component */}
//           <Route path="/activated" element={<ActivatedLicenseDashboard />} /> {/* Add a new route for Activated License Dashboard */}        
//         </Routes>
//       </div>
//   );
// }

// export default App;

// function App() {
//   return (
//       <div>
//         <Navbar bg="dark" variant="dark" expand="lg">
//           <Container>
//             <Navbar.Brand as={Link} to="/" className="ml-3">
//               Home
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link as={Link} to="/admin-login">
//                   Admin Login
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/user-login">
//                   User Login
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/admin-home">
//                   Admin Home
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/admin/products">
//                   Product Management
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/admin/licenses">
//                   License Management
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/admin/generate">
//                   License Generation
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/user-home">
//                   User Home
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/user/activate">
//                   License Activation
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/user/activated">
//                   Activated Licenses
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//           <Route path="/user-login" element={<UserLogin />} />

//           {/* Admin routes */}
//           <Route path="/admin-home" element={<AdminHomePage />} />
//           <Route path="/admin/products" element={<ProductManagement />} />
//           <Route path="/admin/licenses" element={<LicenseManagement />} />
//           <Route path="/admin/generate" element={<LicenseGeneration />} />

//           {/* User routes */}
//           <Route path="/user-home" element={<UserHomePage />} />
//           <Route path="/user/activate" element={<LicenseActivation />} />
//           <Route path="/user/activated" element={<ActivatedLicenseDashboard />} />
//         </Routes>
//       </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// import AdminLogin from './components/admin/AdminLogin';
// import AdminHomePage from './components/admin/AdminHomePage';
// import ProductManagement from './components/admin/ProductManagement';
// import LicenseManagement from './components/admin/LicenseManagement';
// import LicenseGeneration from './components/admin/LicenseGeneration';

// import UserLogin from './components/user/UserLogin';
// import UserHomePage from './components/user/UserHomePage';
// import LicenseActivation from './components/user/LicenseActivation';
// import ActivatedLicenseDashboard from './components/user/ActivatedLicenseDashboard';

// import HomePage from './pages/HomePage';

// function App() {
//   return (
//       <div>
//         <Navbar bg="dark" variant="dark" expand="lg">
//           <Container>
//             <Navbar.Brand as={Link} to="/" className="ml-3">
//               Home
//             </Navbar.Brand>
//             <Nav className="ml-auto">
//               <Nav.Link as={Link} to="/admin-login">
//                 Admin Login
//               </Nav.Link>
//               <Nav.Link as={Link} to="/user-login">
//                 User Login
//               </Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar>

//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//           <Route path="/admin-home" element={<AdminHomePage />} />
//           <Route path="/admin/products" element={<ProductManagement />} />
//           <Route path="/admin/licenses" element={<LicenseManagement />} />
//           <Route path="/admin/generate" element={<LicenseGeneration />} />
//           {/* User routes */}
//           <Route path="/user-login" element={<UserLogin />} />
//           <Route path="/user-home" element={<UserHomePage />} />
//           <Route path="/user/*" element={<UserHomePage />} />
//         </Routes>
//       </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import AdminLogin from './components/admin/AdminLogin';
import AdminHomePage from './components/admin/AdminHomePage';
import ProductManagement from './components/admin/ProductManagement';
import LicenseManagement from './components/admin/LicenseManagement';
import LicenseGeneration from './components/admin/LicenseGeneration';

import UserLogin from './components/user/UserLogin';
import UserHomePage from './components/user/UserHomePage';
import UserWelcome from './components/user/UserWelcome'
import LicenseActivation from './components/user/LicenseActivation';
import ActivatedLicenseDashboard from './components/user/ActivatedLicenseDashboard';

import HomePage from './pages/HomePage';

function App() {
  return (
      <div>

        {/* this code should be commented */}
        {/* <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Nav.Link} href="/admin-login">
              Admin Login
            </Navbar.Brand>
            <Navbar.Brand as={Nav.Link} href="/user-login">
              User Login
            </Navbar.Brand>
          </Container>
        </Navbar> */}

        <Routes>

          {/* User routes */}
          <Route path="/" element={<UserLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-home" element={<UserHomePage />} />
          <Route path="/user/User-Welcome" element={<UserWelcome />} />
          <Route path="/user/LicenseActivation" element={<LicenseActivation />} />
          <Route path="/user/ActivatedLicenseDashboard" element={<ActivatedLicenseDashboard />} />

          {/* Admin routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-home" element={<AdminHomePage />} />
          <Route path="/admin/products" element={<ProductManagement />} />
          <Route path="/admin/licenses" element={<LicenseManagement />} />
          <Route path="/admin/generate" element={<LicenseGeneration />} />
          
          
        </Routes>
      </div>
  );
}

export default App;

//app component that works for the now folder structure the funcitonalities of the admin being in the admin folder in the component folder and the
//functionalities of the user being in the user folder in the components folder

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// import AdminLogin from './components/admin/AdminLogin';
// import AdminHomePage from './components/admin/AdminHomePage';
// import ProductManagement from './components/admin/ProductManagement';
// import LicenseManagement from './components/admin/LicenseManagement';
// import LicenseGeneration from './components/admin/LicenseGeneration';

// import UserLogin from './components/user/UserLogin';
// import UserHomePage from './components/user/UserHomePage';
// import LicenseActivation from './components/user/LicenseActivation';
// import ActivatedLicenseDashboard from './components/user/ActivatedLicenseDashboard';

// import HomePage from './pages/HomePage';


// function App() {
//   return (
//       <div>
//         <Navbar bg="dark" variant="dark" expand="lg">
//           <Container>
//             <Navbar.Brand as={Link} to="/" className="ml-3">
//               Home
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link as={Link} to="/admin-login">
//                   Admin Login
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/user-login">
//                   User Login
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/admin-home">
//                   Admin Home
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/admin/products">
//                   Product Management
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/admin/licenses">
//                   License Management
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/admin/generate">
//                   License Generation
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/user-home">
//                   User Home
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/user/activate">
//                   License Activation
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/user/activated">
//                   Activated Licenses
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<HomePage />} />
//           <Route path="/admin-login" element={<AdminLogin />} />
//           <Route path="/user-login" element={<UserLogin />} />

//           {/* Admin routes */}
//           <Route path="/admin-home" element={<AdminHomePage />} />
//           <Route path="/admin/products" element={<ProductManagement />} />
//           <Route path="/admin/licenses" element={<LicenseManagement />} />
//           <Route path="/admin/generate" element={<LicenseGeneration />} />

//           {/* User routes */}
//           <Route path="/user-home" element={<UserHomePage />} />
//           <Route path="/user/activate" element={<LicenseActivation />} />
//           <Route path="/user/activated" element={<ActivatedLicenseDashboard />} />
//         </Routes>
//       </div>
//   );
// }

// export default App;