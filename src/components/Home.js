import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
  padding-top: 100px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.accentColor};

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: white;
    background-color: ${({ theme }) => theme.color};
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  object-fit: cover;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 576px) {
    max-width: 250px;
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.accentColor};
  border-radius: 50%;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;

  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 70%;
    right: 10%;
    animation-delay: 2s;
  }

  &:nth-child(3) {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    fetch('/profile/home.json')
      .then(response => response.json())
      .then(data => setHomeData(data))
      .catch(error => console.error('Error loading home data:', error));

    fetch('/profile/social.json')
      .then(response => response.json())
      .then(data => setSocialData(data))
      .catch(error => console.error('Error loading social data:', error));
  }, []);

  useEffect(() => {
    if (homeData && homeData.roles) {
      const interval = setInterval(() => {
        setCurrentRole((prev) => (prev + 1) % homeData.roles.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [homeData]);

  if (!homeData || !socialData) return null;

  return (
    <HomeSection id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} className="text-center text-lg-start">
            <Fade left>
              <HeroTitle>
                Hi, I'm {homeData.name}
              </HeroTitle>
              <HeroSubtitle>
                I'm {homeData.roles[currentRole]}
              </HeroSubtitle>
              <SocialContainer className="justify-content-center justify-content-lg-start">
                {socialData.social.map((social, index) => {
                  const getIcon = (network) => {
                    switch (network) {
                      case 'linkedin': return '💼';
                      case 'github': return '🐙';
                      case 'email': return '📧';
                      case 'twitter': return '🐦';
                      default: return '🔗';
                    }
                  };

                  return (
                    <SocialLink
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getIcon(social.network)}
                    </SocialLink>
                  );
                })}
              </SocialContainer>
            </Fade>
          </Col>
          <Col lg={6} md={6}>
            <Fade right>
              <HeroImageContainer>
                <FloatingElement />
                <FloatingElement />
                <FloatingElement />
                <HeroImage
                  src="/images/about/me2.jpg"
                  alt="Aryan Bartwal - Personal Photo"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x500/3D84C6/ffffff?text=Hero+Image';
                  }}
                />
              </HeroImageContainer>
            </Fade>
          </Col>
        </Row>
      </Container>
    </HomeSection>
  );
};

export default Home;
