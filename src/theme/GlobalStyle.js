import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.3s ease;
  }

  html {
    scroll-behavior: smooth;
  }

  .App {
    text-align: center;
  }

  section {
    padding: 80px 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color};
  }

  .text-primary {
    color: ${({ theme }) => theme.accentColor} !important;
  }

  .bg-primary {
    background-color: ${({ theme }) => theme.accentColor} !important;
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.accentColor};
    border-color: ${({ theme }) => theme.accentColor};
  }

  .btn-primary:hover {
    background-color: ${({ theme }) => theme.accentColor};
    border-color: ${({ theme }) => theme.accentColor};
    opacity: 0.8;
  }

  .card {
    background-color: ${({ theme }) => theme.cardBackground};
    border-color: ${({ theme }) => theme.cardBorderColor};
    color: ${({ theme }) => theme.color};
  }

  .card-footer {
    background-color: ${({ theme }) => theme.cardFooterBackground};
    border-color: ${({ theme }) => theme.cardBorderColor};
  }
`;

export default GlobalStyle;
