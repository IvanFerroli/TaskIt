import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated && restricted ? (
    <Navigate to="/dashboard" />
  ) : (
    <Component {...rest} />
  );
};

export default PublicRoute;