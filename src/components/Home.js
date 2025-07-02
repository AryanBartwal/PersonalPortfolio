import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled, { keyframes } from 'styled-components';

// Animations
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const slideUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const glowPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px ${props => props.theme.accentColor}30;
  }
  50% { 
    box-shadow: 0 0 40px ${props => props.theme.accentColor}60, 
                0 0 60px ${props => props.theme.accentColor}30;
  }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(-45deg, ${({ theme }) => theme.background}, ${({ theme }) => theme.background}dd, ${({ theme }) => theme.accentColor}20);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, ${({ theme }) => theme.accentColor}10 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${({ theme }) => theme.accentColor}15 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.color}, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.color});
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  position: relative;
  animation: ${gradientAnimation} 4s ease infinite;
  text-shadow: 0 0 30px ${({ theme }) => theme.accentColor}30;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: blur(1px);
    z-index: -1;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.accentColor};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accentColor}, transparent);
    transform-origin: left;
    animation: ${pulse} 3s ease-in-out infinite;
  }
  
  &::before {
    content: '{ ';
    opacity: 0.6;
    font-weight: 300;
    margin-right: 5px;
  }
  
  span::after {
    content: ' }';
    opacity: 0.6;
    font-weight: 300;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`;

const TypewriterText = styled.span`
  position: relative;
  color: ${({ theme }) => theme.accentColor};
  font-weight: 600;
  padding: 0 5px;
  background: ${({ theme }) => theme.background}20;
  border-radius: 4px;
  box-shadow: 0 0 10px ${({ theme }) => theme.accentColor}20;
  
  &::after {
    content: '|';
    animation: blink 1s infinite;
    margin-left: 2px;
    color: ${({ theme }) => theme.accentColor};
    opacity: 0.8;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${({ theme }) => theme.accentColor}10;
    border-radius: 6px;
    z-index: -1;
    animation: ${pulse} 3s ease infinite;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
  opacity: 0.9;
  margin-bottom: 30px;
  line-height: 1.7;
  max-width: 500px;
  position: relative;
  padding: 15px;
  border-left: 3px solid ${({ theme }) => theme.accentColor}40;
  background: ${({ theme }) => theme.background}20;
  border-radius: 0 8px 8px 0;
  
  strong {
    color: ${({ theme }) => theme.accentColor};
    position: relative;
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background: ${({ theme }) => theme.accentColor}50;
      border-radius: 2px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 10px;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CTAButton = styled(Button)`
  padding: 16px 38px;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.accentColor};
  background: ${props => props.primary ? 
    `linear-gradient(135deg, ${props.theme.accentColor}, ${props.theme.accentColor}dd)` : 
    'transparent'};
  color: ${props => props.primary ? 'white' : ({ theme }) => theme.accentColor};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  z-index: 1;
  box-shadow: 0 10px 20px ${({ theme }) => theme.accentColor}20;
  perspective: 1000px;
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}20, transparent);
    z-index: -2;
    border-radius: 50px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.05) rotateX(5deg);
    box-shadow: 
      0 20px 40px ${({ theme }) => theme.accentColor}40,
      0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.accentColor};
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.03) rotateX(2deg);
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
  background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.accentColor}80);
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${({ theme }) => theme.color}20, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 25px ${({ theme }) => theme.accentColor}40;
    
    &::before {
      opacity: 1;
    }
  }
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 380px;
  height: 380px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 6px solid ${({ theme }) => theme.accentColor}40;
  box-shadow: 
    0 0 30px ${({ theme }) => theme.accentColor}20,
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}10, transparent);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(255, 255, 255, 0.4), 
      transparent
    );
    transition: left 0.5s;
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-10px) scale(1.05) rotate(2deg);
    box-shadow: 
      0 0 50px ${({ theme }) => theme.accentColor}30,
      0 30px 60px rgba(0, 0, 0, 0.3),
      inset 0 0 30px rgba(255, 255, 255, 0.2);
    border-color: ${({ theme }) => theme.accentColor};
    filter: brightness(1.1) contrast(1.05);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    max-width: 300px;
    height: 300px;
  }

  @media (max-width: 576px) {
    max-width: 250px;
    height: 250px;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}10, transparent);
    border-radius: 50%;
    z-index: -1;
    animation: ${pulse} 4s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid transparent;
    border-top: 2px solid ${({ theme }) => theme.accentColor};
    border-right: 2px solid ${({ theme }) => theme.accentColor}60;
    border-radius: 50%;
    animation: ${rotate} 8s linear infinite;
    z-index: -1;
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ImageGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}30, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;
  
  ${HeroImage}:hover + & {
    opacity: 1;
  }
`;

const SkillHighlight = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.background}f0;
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.accentColor}30;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: ${slideUp} 0.8s ease-out 0.5s both;
  width: max-content;
  max-width: 90%;
  
  span {
    color: ${({ theme }) => theme.accentColor};
    font-weight: 600;
    font-size: 0.9rem;
    white-space: nowrap;
    
    @media (max-width: 576px) {
      white-space: normal;
      text-align: center;
    }
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  animation: ${float} 8s ease-in-out infinite;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    filter: blur(5px);
  }
  
  &:nth-child(1) {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}, #ff6b6b);
    top: 0%;
    left: 5%;
    animation-delay: 0s;
    transform-origin: center bottom;
  }

  &:nth-child(2) {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #4ecdc4, ${({ theme }) => theme.accentColor});
    top: 75%;
    right: 5%;
    animation-delay: 2s;
    transform-origin: center top;
  }

  &:nth-child(3) {
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #45b7d1, #96ceb4);
    bottom: 15%;
    left: 15%;
    animation-delay: 4s;
    transform-origin: right center;
  }
  
  &:nth-child(4) {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    top: 40%;
    right: 25%;
    animation-delay: 1s;
    transform-origin: left center;
  }
`;

const ParticleElement = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${float} 10s ease-in-out infinite;
  opacity: 0.6;
  box-shadow: 0 0 5px ${({ theme }) => theme.accentColor}60,
              0 0 10px ${({ theme }) => theme.accentColor}30;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, ${({ theme }) => theme.accentColor}80, transparent 70%);
    border-radius: 50%;
    filter: blur(1px);
  }
  
  &:nth-child(5) { 
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.accentColor}; 
    top: 20%; 
    left: 80%; 
    animation-delay: 0.5s;
    animation-duration: 7s;
  }
  
  &:nth-child(6) { 
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}, #4ecdc4);
    top: 60%; 
    left: 10%; 
    animation-delay: 1.5s;
    animation-duration: 9s;
  }
  
  &:nth-child(7) { 
    width: 4px;
    height: 4px;
    background: linear-gradient(135deg, #ff6b6b, ${({ theme }) => theme.accentColor});
    top: 80%; 
    left: 70%; 
    animation-delay: 2.5s;
    animation-duration: 11s;
  }
  
  &:nth-child(8) { 
    width: 5px;
    height: 5px;
    background: ${({ theme }) => theme.accentColor};
    top: 30%; 
    left: 30%; 
    animation-delay: 3.5s;
    animation-duration: 8s;
  }
`;

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [homeData]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!homeData || !socialData) return null;

  return (
    <HomeSection id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} className="text-center text-lg-start">
            <Fade left>
              <HeroTitle>
                Hi, I'm <span style={{ color: '#3D84C6' }}>{homeData.name}</span>
              </HeroTitle>
              <HeroSubtitle>
                I'm <TypewriterText>{homeData.roles[currentRole]}</TypewriterText>
              </HeroSubtitle>
              <HeroDescription>
                Passionate <strong>full-stack developer</strong> and <strong>AI/ML engineer</strong> dedicated to crafting 
                elegant solutions to complex problems. Combining technical expertise with creative thinking 
                to build applications that make a <strong>meaningful impact</strong>. Let's transform ideas into reality!
              </HeroDescription>
              <CTAContainer>
                <CTAButton 
                  primary 
                  onClick={() => scrollToSection('about')}
                >
                  About Me
                </CTAButton>
                <CTAButton 
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                </CTAButton>
              </CTAContainer>
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
                      title={social.network}
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
                <FloatingElement />
                <ParticleElement />
                <ParticleElement />
                <ParticleElement />
                <ParticleElement />
                <HeroImage
                  src="/images/about/me2.jpg"
                  alt="Aryan Bartwal - Personal Photo"
                  onError={(e) => {
                    // Try the other images if the primary one fails
                    const tryNextImage = (index) => {
                      const imagePaths = ['/images/about/me-optimized.jpg', '/images/about/me.JPG', 'https://via.placeholder.com/400x400/3D84C6/ffffff?text=Aryan+Bartwal'];
                      if (index < imagePaths.length) {
                        e.target.src = imagePaths[index];
                        e.target.onerror = () => tryNextImage(index + 1);
                      }
                    };
                    tryNextImage(0);
                  }}
                />
                <ImageGlow />
                <SkillHighlight>
                  <span>🚀 Full-Stack Developer & AI/ML Enthusiast</span>
                </SkillHighlight>
              </HeroImageContainer>
            </Fade>
          </Col>
        </Row>
      </Container>
    </HomeSection>
  );
};

export default Home;
