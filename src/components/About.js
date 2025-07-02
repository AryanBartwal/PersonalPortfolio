import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, ProgressBar, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(-45deg, ${({ theme }) => theme.background}, ${({ theme }) => theme.background}dd, ${({ theme }) => theme.accentColor}10);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  padding: 100px 0;
  position: relative;
  
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

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
  background: linear-gradient(135deg, ${({ theme }) => theme.color}, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.color});
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  position: relative;
  animation: ${gradientAnimation} 4s ease infinite;
  text-shadow: 0 0 30px ${({ theme }) => theme.accentColor}30;

  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.accentColor}30);
    margin: 20px auto;
    border-radius: 4px;
    box-shadow: 0 2px 10px ${({ theme }) => theme.accentColor}40;
  }
  
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
    filter: blur(8px);
    z-index: -1;
    opacity: 0.5;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.color};
  text-align: justify;
  margin-bottom: 30px;
  position: relative;
  
  &::first-letter {
    font-size: 3em;
    font-weight: bold;
    float: left;
    line-height: 1;
    margin-right: 8px;
    margin-top: 2px;
    color: ${({ theme }) => theme.accentColor};
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileImage = styled(Image)`
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border: 6px solid ${({ theme }) => theme.accentColor}40;
  filter: contrast(1.05);
  position: relative;
  
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
  }

  &:hover {
    transform: translateY(-10px) scale(1.03) rotate(1deg);
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
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 576px) {
    max-width: 250px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const StatCard = styled(Card)`
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.accentColor}20, transparent);
    animation: ${shimmer} 2s infinite;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.accentColor}20;
  }
`;

const StatNumber = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 5px;
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
`;

const SkillBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.accentColor}80);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.accentColor}40;
  }
`;

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/profile/about.json')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error loading about data:', error));
  }, []);

  if (!aboutData) return null;

  const stats = [
    { number: '10+', label: 'Projects' },
    { number: '5+', label: 'Technologies' },
    { number: '2+', label: 'Years Learning' },
    { number: '100%', label: 'Dedication' }
  ];

  const skills = [
    'React', 'Node.js', 'Python', 'JavaScript', 'C++', 'Machine Learning', 
    'AI Development', 'Full-Stack', 'Problem Solving', 'Team Work'
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <Row className="align-items-center">
          <Col lg={5} md={6} className="mb-4 mb-lg-0">
            <Fade left>
              <ProfileImageContainer>
                <ProfileImage
                  src={`/${aboutData.imageSource}`}
                  alt="Aryan Bartwal - Professional Profile"
                  fluid
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x450/3D84C6/ffffff?text=Profile';
                  }}
                />
              </ProfileImageContainer>
              <StatsContainer>
                {stats.map((stat, index) => (
                  <Fade key={index} bottom delay={index * 100}>
                    <StatCard>
                      <StatNumber>{stat.number}</StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatCard>
                  </Fade>
                ))}
              </StatsContainer>
            </Fade>
          </Col>
          <Col lg={7} md={6}>
            <Fade right>
              <AboutText>
                {aboutData.about}
              </AboutText>
              <div>
                <h5 style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>
                  Core Skills & Technologies
                </h5>
                {skills.map((skill, index) => (
                  <SkillBadge key={index}>
                    {skill}
                  </SkillBadge>
                ))}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
