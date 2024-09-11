import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');  
      if (token) {
        setAuthState({ isAuthenticated: true, user: token });  
      } else {
        setAuthState({ isAuthenticated: false, user: null });
      }
    };
  
    checkAuth();
  }, []);
  
  const login = async (credentials) => {
    const result = await authService.login(credentials);
    if (result.success) {
      const token = authService.getToken();  // Corrige para pegar o token diretamente
      setAuthState({ isAuthenticated: true, user: token });
    }
    return result;
  };
  
  const logout = () => {
    authService.logout();
    localStorage.removeItem('token');  
    setAuthState({ isAuthenticated: false, user: null });
  };
  
  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
