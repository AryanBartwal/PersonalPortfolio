import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px ${props => props.theme.accentColor}40; }
  50% { box-shadow: 0 0 20px ${props => props.theme.accentColor}60, 0 0 30px ${props => props.theme.accentColor}40; }
`;

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.background} 0%, ${({ theme }) => theme.background}f0 100%);
  padding: 100px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, ${({ theme }) => theme.accentColor}05 0%, transparent 50%),
                radial-gradient(circle at 70% 20%, ${({ theme }) => theme.accentColor}08 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.color}, ${({ theme }) => theme.accentColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.accentColor}60);
    margin: 20px auto;
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color};
  opacity: 0.8;
  font-size: 1.1rem;
  margin-bottom: 50px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterButton = styled(Button)`
  background: ${props => props.active ? ({ theme }) => theme.accentColor : 'transparent'};
  border: 2px solid ${({ theme }) => theme.accentColor};
  color: ${props => props.active ? 'white' : ({ theme }) => theme.accentColor};
  border-radius: 25px;
  padding: 8px 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.accentColor};
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectCard = styled(Card)`
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  border-radius: 20px;
  transition: all 0.3s ease;
  height: 100%;
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
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    animation: ${glow} 2s infinite;
    
    &::before {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}20, ${({ theme }) => theme.accentColor}40);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.accentColor};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ProjectTitle = styled(Card.Title)`
  color: ${({ theme }) => theme.color};
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 15px;
`;

const ProjectText = styled(Card.Text)`
  color: ${({ theme }) => theme.color};
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechBadge = styled(Badge)`
  background: linear-gradient(135deg, ${({ theme }) => theme.accentColor}, ${({ theme }) => theme.accentColor}80);
  margin: 2px;
  padding: 6px 12px;
  font-size: 0.8rem;
  border-radius: 15px;
`;

const ProjectButton = styled(Button)`
  border-radius: 25px;
  padding: 8px 20px;
  margin: 5px;
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
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const sampleProjects = [
    {
      title: "Personal E-Portfolio",
      description: "A responsive portfolio website built with React, featuring dark mode, smooth animations, and modern design.",
      technologies: ["React", "Bootstrap", "Styled Components"],
      category: "Web Development",
      icon: "🌐",
      links: [
        { text: "Live Demo", href: "https://personal-portfolio-lilac-one-57.vercel.app/" },
        { text: "GitHub", href: "#" }
      ]
    },
    {
      title: "Role-Based Access Control System",
      description: "A robust system for managing user roles and permissions, ensuring secure access control for applications. Features include user authentication, role assignment, and permission management.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "React"],
      category: "Backend",
      icon: "🔐",
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/Role-Based-Access-Control-System" }
      ]
    },
    {
      title: "Multi-Threaded File System With Cache Management",
      description: "A high-performance file system project implementing multi-threading and advanced cache management for efficient file operations and resource utilization.",
      technologies: ["C++", "Multi-threading", "File System", "Cache Management"],
      category: "System Programming",
      icon: "💾",
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/Multi-Threaded-File-System-With-Cache-Management" }
      ]
    },
    {
      title: "Optimal Delivery Route Finder",
      description: "A solution for finding the most efficient delivery routes using advanced algorithms and mapping technologies, reducing delivery time and costs.",
      technologies: ["Python", "Algorithms", "Mapping APIs", "Optimization"],
      category: "AI/ML",
      icon: "🗺️",
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/Optimal-Delivery-Route-Finder" }
      ]
    },
    {
      title: "JAVA-TO-CPP",
      description: "A project for converting Java code to C++ code, facilitating cross-language development and codebase migration.",
      technologies: ["Java", "C++", "Code Conversion", "Parsing"],
      category: "Tools",
      icon: "🔄",
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/JAVA-TO-CPP" }
      ]
    },
    {
      title: "Expense Tracker",
      description: "A web application to track expenses, manage budgets, and visualize spending habits with interactive charts and reports.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      category: "Web Development",
      icon: "💰",
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/Expense-Tracker" }
      ]
    }
  ];

  const categories = ['All', 'Web Development', 'Backend', 'AI/ML', 'System Programming', 'Tools'];
  
  const filteredProjects = filter === 'All' 
    ? sampleProjects 
    : sampleProjects.filter(project => project.category === filter);

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <SectionSubtitle>
          Here are some of my recent projects that showcase my skills and passion for development
        </SectionSubtitle>
        
        <FilterContainer>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
              variant="outline-primary"
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <Row>
          {filteredProjects.map((project, index) => (
            <Col lg={6} md={6} key={index} className="mb-4">
              <Fade bottom delay={index * 100}>
                <ProjectCard>
                  <ProjectImage>
                    {project.icon}
                  </ProjectImage>
                  <Card.Body>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectText>{project.description}</ProjectText>
                    <div className="mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <TechBadge key={techIndex}>
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                    <div>
                      {project.links.map((link, linkIndex) => (
                        <ProjectButton
                          key={linkIndex}
                          variant={linkIndex === 0 ? "primary" : "outline-primary"}
                          size="sm"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.text}
                        </ProjectButton>
                      ))}
                    </div>
                  </Card.Body>
                </ProjectCard>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
