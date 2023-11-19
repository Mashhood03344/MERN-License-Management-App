// src/components/user/WelcomePage.js

import React from 'react';

const UserWelcome = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to License Management App</h1>
        <p className="lead">
        This app is designed to help you activate and view licenses for your cloud-based software products.
        </p>
      </div>
    </div>
  );
};

export default UserWelcome;