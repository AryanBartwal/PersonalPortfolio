import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledNavbar = styled(BootstrapNavbar)`
  background: ${({ theme }) => theme.background}f0 !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  padding: 15px 0;
  animation: ${slideDown} 0.5s ease-out;
  
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.color}, ${({ theme }) => theme.accentColor});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  .nav-link {
    color: ${({ theme }) => theme.color} !important;
    font-weight: 500;
    margin: 0 15px;
    padding: 8px 16px !important;
    border-radius: 25px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, ${({ theme }) => theme.accentColor}20, transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      color: ${({ theme }) => theme.accentColor} !important;
      background: ${({ theme }) => theme.accentColor}10;
      transform: translateY(-2px);
      
      &::before {
        left: 100%;
      }
    }
    
    &.active {
      background: ${({ theme }) => theme.accentColor};
      color: white !important;
    }
  }
  
  .theme-toggle {
    background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.accentColor}80);
    border: none;
    color: white;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.2rem;
    
    &:hover {
      transform: scale(1.1) rotate(180deg);
      box-shadow: 0 5px 15px ${({ theme }) => theme.accentColor}40;
    }
  }
  
  .navbar-toggler {
    border: none;
    padding: 4px 8px;
    border-radius: 8px;
    
    &:focus {
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.accentColor}40;
    }
    
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='${({ theme }) => theme.color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    fetch('/profile/navbar.json')
      .then(response => response.json())
      .then(data => setNavbarData(data))
      .catch(error => console.error('Error loading navbar data:', error));
  }, []);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  if (!navbarData) return null;

  return (
    <StyledNavbar expand="lg" fixed="top" variant={theme}>
      <Container>
        <BootstrapNavbar.Brand href="#home">
          Portfolio
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navbarData.sections.map((section, index) => (
              <Nav.Link
                key={index}
                onClick={() => scrollToSection(section.href)}
                style={{ cursor: 'pointer' }}
              >
                {section.title}
              </Nav.Link>
            ))}
            <button className="theme-toggle ms-3" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
