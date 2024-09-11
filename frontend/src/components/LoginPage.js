import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import LoginForm from '../components/LoginForm';
import authService from '../services/authService'; 

const LoginPage = () => {
  const navigate = useNavigate(); 

  const handleLogin = async (credentials) => {
    try {
      const response = await authService.login(credentials); 
      console.log(response);
      if (response.success) {
        
        navigate('/');
      } else {
      
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error during login', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
