import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const SkillsSection = styled.section`
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
  margin-bottom: 30px;
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

const IntroText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.color};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.accentColor};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }
`;



const SkillCard = styled(Card)`
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const SkillCategory = styled.h4`
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.accentColor}10;
    transform: translateY(-2px);
  }

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
    border-radius: 8px;
    object-fit: contain;
    background: ${({ theme }) => theme.background};
    padding: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color};
    font-weight: 500;
  }
`;

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    fetch('/profile/skills.json')
      .then(response => response.json())
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error loading skills data:', error));
  }, []);

  if (!skillsData) return null;

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills</SectionTitle>

        <IntroText>
          {skillsData.intro}
        </IntroText>
        <Row>
          {skillsData.skills.map((category, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Fade bottom delay={index * 200}>
                <SkillCard>
                  <SkillCategory>{category.title}</SkillCategory>
                  <SkillGrid>
                    {category.items.map((skill, skillIndex) => (
                      <SkillItem key={skillIndex}>
                        <img
                          src={skill.icon}
                          alt={skill.title}
                          onError={(e) => {
                            e.target.src = skill.fallback || `https://via.placeholder.com/50x50/3D84C6/ffffff?text=${encodeURIComponent(skill.title.charAt(0))}`;
                          }}
                        />
                        <span>{skill.title}</span>
                      </SkillItem>
                    ))}
                  </SkillGrid>
                </SkillCard>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
