import React from 'react';
import RegisterForm from './RegisterForm';
import authService from '../services/authService'; 

const RegisterPage = () => {
  const handleRegister = async (userInfo) => {
    try {
      const response = await authService.register(userInfo);
      
      if (response.success) {
        alert('Register successful! Please log in.');
      } else {
        alert(`Register failed: ${response.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error during register:', error);
      alert('Register failed. Please try again sasa.');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
