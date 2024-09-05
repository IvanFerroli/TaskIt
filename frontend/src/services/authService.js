import axios from 'axios';
import jwtDecode from 'jwt-decode'; 

const API_URL = '/auth';

const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error('Error during login', error);
    return { success: false };
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
    console.error('Error decoding token', error);
    return false;
  }
};

const getToken = () => {
  return localStorage.getItem('token');
};

const signup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error) {
    console.error('Error during signup', error);
    throw error;
  }
};

export default {
  login,
  logout,
  isAuthenticated,
  getToken,
  signup,
};
