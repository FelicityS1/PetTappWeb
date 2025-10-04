import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthMe } from '../query/useAuth';

const ProtectedRoute = ({ children, requiredRoles = [], fallbackPath = '/login' }) => {
  const location = useLocation();
  const { data: user, isLoading, error } = useAuthMe();
  console.log("auth/me: ", user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !user) {
    return (
      <Navigate
        to={fallbackPath}
        state={{ from: location }}
        replace
      />
    );
  }

  if (requiredRoles.length > 0 && !requiredRoles.includes(user.user.role)) {
    return (
      <Navigate
        to="/unauthorized"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
