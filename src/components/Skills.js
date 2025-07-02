import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const slideIn = keyframes`
  from { width: 0%; }
  to { width: var(--target-width); }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(-45deg, ${({ theme }) => theme.background}, ${({ theme }) => theme.accentColor}10, ${({ theme }) => theme.background}dd);
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
  margin-bottom: 30px;
  background: linear-gradient(135deg, ${({ theme }) => theme.color}, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.color});
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  position: relative;
  animation: ${rotate} 6s ease infinite;
  text-shadow: 0 0 30px ${({ theme }) => theme.accentColor}30;

  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.accentColor}40);
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

const IntroText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.color};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const SkillCard = styled(Card)`
  background: ${({ theme }) => theme.cardBackground};
  border: 2px solid ${({ theme }) => theme.accentColor}30;
  border-radius: 20px;
  padding: 30px 20px;
  margin-bottom: 30px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

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

const SkillCategory = styled.h4`
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 25px;
  text-align: center;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.accentColor};
    border-radius: 1px;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 15px;
  border-radius: 15px;
  transition: all 0.3s ease;
  position: relative;
  background: ${({ theme }) => theme.background}50;

  &:hover {
    background: ${({ theme }) => theme.accentColor}10;
    transform: translateY(-5px) scale(1.05);
  }

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    border-radius: 12px;
    object-fit: contain;
    background: white;
    padding: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &:hover {
      animation: ${rotate} 0.5s ease;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
  }

  span {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.color};
    font-weight: 600;
  }
`;

const SkillProgress = styled.div`
  margin: 15px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SkillLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  display: flex;
  align-items: center;
  
  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border-radius: 4px;
  }
`;

const SkillLevelBadge = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white;
  background: ${props => {
    switch(props.level) {
      case 'Expert':
        return 'linear-gradient(135deg, #4CAF50, #388E3C)';
      case 'Advanced':
        return 'linear-gradient(135deg, #42A5F5, #1976D2)';
      case 'Intermediate':
        return 'linear-gradient(135deg, #FFA726, #F57C00)';
      case 'Beginner':
        return 'linear-gradient(135deg, #EF5350, #D32F2F)';
      default:
        return 'linear-gradient(135deg, #9C27B0, #7B1FA2)';
    }
  }};
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('/profile/skills.json')
      .then(response => response.json())
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error loading skills data:', error));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  if (!skillsData) return null;

  // Enhanced skills with proficiency levels using descriptive text instead of percentages
  const enhancedSkills = [
    {
      title: "Frontend Development",
      items: [
        { name: "React", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML/CSS", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Bootstrap", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
      ]
    },
    {
      title: "Backend Development",
      items: [
        { name: "Node.js", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ]
    },
    {
      title: "Programming Languages",
      items: [
        { name: "C++", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Java", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Technical Skills</SectionTitle>
        <IntroText>
          {skillsData.intro}
        </IntroText>
        
        <Row>
          {enhancedSkills.map((category, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Fade bottom delay={index * 200}>
                <SkillCard>
                  <SkillCategory>{category.title}</SkillCategory>
                  {category.items.map((skill, skillIndex) => (
                    <SkillProgress key={skillIndex}>
                      <SkillLabel>
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/24x24/3D84C6/ffffff?text=${encodeURIComponent(skill.name.charAt(0))}`;
                          }}
                        />
                        <span>{skill.name}</span>
                      </SkillLabel>
                      <SkillLevelBadge level={skill.level}>
                        {skill.level}
                      </SkillLevelBadge>
                    </SkillProgress>
                  ))}
                </SkillCard>
              </Fade>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col>
            <Fade bottom delay={600}>
              <SkillCard>
                <SkillCategory>Technologies & Tools</SkillCategory>
                <SkillGrid>
                  {skillsData.skills.map((category) => 
                    category.items.map((skill, skillIndex) => (
                      <SkillItem key={skillIndex}>
                        <img
                          src={skill.icon}
                          alt={skill.title}
                          onError={(e) => {
                            e.target.src = skill.fallback || `https://via.placeholder.com/60x60/3D84C6/ffffff?text=${encodeURIComponent(skill.title.charAt(0))}`;
                          }}
                        />
                        <span>{skill.title}</span>
                      </SkillItem>
                    ))
                  )}
                </SkillGrid>
              </SkillCard>
            </Fade>
          </Col>
        </Row>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
