import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (password === confirmPassword) {
    try {
      const result = await onSubmit({ email, password });
      if (email && password) {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate('/login'); 
      } else {
        alert(result?.error || 'Register failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during register', error);
      alert('Register failed. Please try again.');
    }
  } else {
    alert('Passwords do not match!');
  }
};


  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <FormInput
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormField>
        <FormButton type="submit">Register</FormButton>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
