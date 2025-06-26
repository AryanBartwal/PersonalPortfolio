import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const EducationSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.background};
  padding: 100px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.color};

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme.accentColor};
    margin: 20px auto;
  }
`;

const EducationCard = styled(Card)`
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  border-radius: 15px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
  font-weight: 500;
  font-size: 0.9rem;
`;

const Grade = styled.span`
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  background: ${({ theme }) => theme.accentColor}20;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-left: 10px;
`;

const Description = styled(Card.Text)`
  color: ${({ theme }) => theme.color};
  opacity: 0.8;
  line-height: 1.6;
`;

const Education = () => {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    fetch('/personal-e-portfolio/profile/education.json')
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
