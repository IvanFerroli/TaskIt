import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

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

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Task Manager</h1>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;