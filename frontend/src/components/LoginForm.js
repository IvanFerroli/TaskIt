import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
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

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
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
        <FormButton type="submit">Login</FormButton>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
