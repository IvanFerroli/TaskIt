import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import SigninForm from '../components/SigninForm';
import authService from '../services/authService'; 

const LoginPage = () => {
  const navigate = useNavigate(); 

  const handleLogin = async (credentials) => {
    try {
      const response = await authService.login(credentials); 
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
      <SigninForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
