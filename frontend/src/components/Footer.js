import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  padding: 10px 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
