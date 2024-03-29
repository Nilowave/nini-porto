import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { typeStyle } from './typeStyle';

export const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-family: ${({ theme }) => theme.fonts.quicksand};
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    ${typeStyle.body01};
    background-color: ${({ theme }) => theme.colors.background};
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

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  ::selection {
    color: #010101;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
      transform: scale(0.9);
    }
    50% {
      
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0.5;
      transform: scale(0.9);
    }
  }

  .pulse {
    animation: pulse 0.5s ease infinite;
  }

  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 500,
    'GRAD' 0,
    'opsz' 20;


    &.filled {
      font-variation-settings:
      'FILL' 1,
      'wght' 700,
      'GRAD' 0,
      'opsz' 20

    }
  }
  `;
