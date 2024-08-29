import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
