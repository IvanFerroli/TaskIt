import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';
import theme from '../styles/theme';
import { AuthContext } from './AuthProvider'; 

const HeaderContainer = styled.header`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${theme.colors.white};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  const { authState, logout } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <HeaderContainer>
      <h1>Task Manager</h1>
      <Nav>
        <NavLink to="/">Home</NavLink>
        {!authState.isAuthenticated ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton> 
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
