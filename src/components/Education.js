import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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

const EducationSection = styled.section`
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
    background: radial-gradient(circle at 30% 70%, ${({ theme }) => theme.accentColor}10 0%, transparent 50%),
                radial-gradient(circle at 70% 30%, ${({ theme }) => theme.accentColor}15 0%, transparent 50%);
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
  animation: ${shimmer} 4s ease infinite;
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

const EducationCard = styled(Card)`
  background: ${({ theme }) => theme.cardBackground};
  border: 2px solid ${({ theme }) => theme.accentColor}30;
  border-radius: 15px;
  margin-bottom: 30px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}10, transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.15),
      0 0 30px ${({ theme }) => theme.accentColor}30;
    border-color: ${({ theme }) => theme.accentColor}80;
    
    &::before {
      opacity: 1;
    }
  }
`;

const EducationTitle = styled(Card.Title)`
  color: ${({ theme }) => theme.accentColor};
  font-weight: 600;
  font-size: 1.3rem;
`;

const Institution = styled.h6`
  color: ${({ theme }) => theme.color};
  font-weight: 500;
  margin-bottom: 10px;
`;

const Duration = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  
  &::before {
    content: '🗓️';
    margin-right: 5px;
  }
`;

const Grade = styled.span`
  color: white;
  font-weight: 600;
  background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.accentColor}80);
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-left: 10px;
  box-shadow: 0 4px 10px ${({ theme }) => theme.accentColor}30;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px ${({ theme }) => theme.accentColor}40;
  }
`;

const Description = styled(Card.Text)`
  color: ${({ theme }) => theme.color};
  opacity: 0.9;
  line-height: 1.7;
  position: relative;
  padding: 15px;
  border-left: 3px solid ${({ theme }) => theme.accentColor}40;
  background: ${({ theme }) => theme.background}20;
  border-radius: 0 8px 8px 0;
  margin-top: 15px;
  font-size: 0.95rem;
  
  &::first-letter {
    font-size: 1.5em;
    font-weight: bold;
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Education = () => {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    fetch('/profile/education.json')
      .then(response => response.json())
      .then(data => setEducationData(data))
      .catch(error => console.error('Error loading education data:', error));
  }, []);

  if (!educationData) return null;

  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle>Education</SectionTitle>
        <Row>
          {educationData.education.map((edu, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Fade bottom delay={index * 200}>
                <EducationCard>
                  <Card.Body>
                    <EducationTitle>{edu.title}</EducationTitle>
                    <Institution>{edu.institution}</Institution>
                    <div className="mb-3">
                      <Duration>{edu.duration}</Duration>
                      <Grade>{edu.grade}</Grade>
                    </div>
                    <Description>{edu.description}</Description>
                  </Card.Body>
                </EducationCard>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </EducationSection>
  );
};

export default Education;
