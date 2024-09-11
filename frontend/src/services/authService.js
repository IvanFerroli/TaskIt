import axios from 'axios';
import jwtDecode from 'jwt-decode'; 

const API_URL = 'http://localhost:3002/auth';

const login = async (credentials) => {
  try {
    
    const response = await axios.post(`${API_URL}/login`, credentials);
    
    console.log(response.data.token); 
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      return { success: true };
    } else {
      return { success: false, error: 'Login failed' };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, error: error.response?.data?.error || 'Internal server error, login' };
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  
  try {
    const decoded = jwtDecode(token); 
    const currentTime = Date.now() / 1000; 
    if (decoded.exp < currentTime) {
      logout(); 
      return false;
    }
    return true; 
  } catch (error) {
    console.error('Error decoding token:', error);
    return false;
  }
};

const getToken = () => {
  return localStorage.getItem('token');
};

const register = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    
    if (response.status === 201) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: response.data.error || 'Registration failed' };
    }
  } catch (error) {
    console.error('Error during register:', error);
    return { success: false, error: error.response?.data?.error || 'Internal server error, register' };
  }
};

export default {
  login,
  logout,
  isAuthenticated,
  getToken,
  register,
};
