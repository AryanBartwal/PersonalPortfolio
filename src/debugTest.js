import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/themes';
import GlobalStyle from './theme/GlobalStyle';

const TestComponent = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Test Component</h1>
      <p>If you can see this, the basic React rendering is working properly.</p>
    </div>
  );
};

// Try rendering a very basic component without any dependencies
try {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <TestComponent />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  console.log('Basic rendering test successful');
} catch (error) {
  console.error('Error rendering test component:', error);
}
