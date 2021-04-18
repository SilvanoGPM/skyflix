import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: #111;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

export default GlobalStyle;
