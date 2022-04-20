import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
// import { typeStyle } from './typeStyle';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-family: ${({ theme }) => theme.fonts.quicksand}
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-size: 1.6rem;
  }

  html, body {
    height: 100%;
  }

  *,
  *:before,
  *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: inherit;
  }

  a {
    color: currentColor;
    display: block;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: 100%;
    font-weight: normal;
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  input,
  select {
    border: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`;
