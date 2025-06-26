import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const AboutSection = styled.section`
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

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.color};
  text-align: justify;
`;

const ProfileImage = styled(Image)`
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/personal-e-portfolio/profile/about.json')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error loading about data:', error));
  }, []);

  if (!aboutData) return null;

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Fade left>
              <ProfileImage
                src={`/personal-e-portfolio/${aboutData.imageSource}`}
                alt="Profile"
                fluid
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x450/3D84C6/ffffff?text=Profile';
                }}
              />
            </Fade>
          </Col>
          <Col lg={6}>
            <Fade right>
              <AboutText>
                {aboutData.about}
              </AboutText>
            </Fade>
          </Col>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;