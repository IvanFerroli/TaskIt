import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';

const PublicRoute = ({ children, restricted }) => {
  const isAuthenticated = authService.isAuthenticated(); 

  return isAuthenticated && restricted ? (
    <Navigate to="/dashboard" />
  ) : (
    children
  );
};

export default PublicRoute;
