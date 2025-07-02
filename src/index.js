import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// For debugging purposes, uncomment this line if you want to test with a simplified component
// import './debugTest';

// Wrap the entire rendering in a try-catch for better error reporting
try {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  console.log('React app rendered successfully');
} catch (error) {
  console.error('Error rendering React app:', error);
  
  // Display a fallback error message in the DOM
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif; text-align: center;">
        <h1 style="color: #e74c3c;">Something went wrong</h1>
        <p>There was an error loading the application.</p>
        <pre style="background: #f8f9fa; padding: 15px; text-align: left; overflow: auto; margin-top: 20px;">
          ${error.toString()}
        </pre>
      </div>
    `;
  }
}