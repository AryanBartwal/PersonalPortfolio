import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage with welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to My E-Portfolio/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const aboutLink = screen.getByText(/About Me/i);
  const resumeLink = screen.getByText(/Resume/i);
  const learningLink = screen.getByText(/Learning Outcomes/i);
  
  expect(aboutLink).toBeInTheDocument();
  expect(resumeLink).toBeInTheDocument();
  expect(learningLink).toBeInTheDocument();
});
