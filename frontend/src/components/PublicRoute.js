import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';

const PublicRoute = ({ children, restricted }) => {
  const isAuthenticated = authService.isAuthenticated(); 

  if (isAuthenticated && restricted) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PublicRoute;
