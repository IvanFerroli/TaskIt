import React from 'react';
import SigninForm from '../components/SigninForm';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    // Lógica para login
  };

  return (
    <div>
      <h1>Login</h1>
      <SigninForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
