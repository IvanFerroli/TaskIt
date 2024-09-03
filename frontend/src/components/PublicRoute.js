import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); 

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated && restricted ? (
          <Navigate to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;