import React from 'react';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  const handleSignup = (userInfo) => {
    // Lógica para cadastro
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
};

export default SignupPage;
