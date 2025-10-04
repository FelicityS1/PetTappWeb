import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div>
      <h1>403 - Unauthorized</h1>
      <p>You don't have permission to access this page.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default UnauthorizedPage;