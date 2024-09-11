import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    padding: 0.5rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textOnPrimary};
    }

    & + a {
      margin-left: 1rem;
    }
  }
`;

const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <h1>Bem-vindo ao Taskit!</h1>
      <p>O melhor aplicativo de gerenciamento de tarefas da atualidade.</p>
      <p>
        Se você já tem uma conta, <Link to="/login">faça login aqui</Link>.
      </p>
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se agora</Link> e comece a organizar suas tarefas!
      </p>
    </WelcomeContainer>
  );
};

export default WelcomePage;
