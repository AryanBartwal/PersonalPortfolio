import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(BootstrapNavbar)`
  background-color: ${({ theme }) => theme.background} !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  .navbar-brand {
    font-weight: bold;
    color: ${({ theme }) => theme.color} !important;
  }
  
  .nav-link {
    color: ${({ theme }) => theme.color} !important;
    font-weight: 500;
    margin: 0 10px;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.accentColor} !important;
    }
  }
  
  .theme-toggle {
    background: none;
    border: 1px solid ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.color};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.accentColor};
      border-color: ${({ theme }) => theme.accentColor};
      color: white;
    }
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [navbarData, setNavbarData] = useState(null);

  useEffect(() => {
    fetch('/personal-e-portfolio/profile/navbar.json')
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
