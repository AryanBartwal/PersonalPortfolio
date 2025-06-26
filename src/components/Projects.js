import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const ProjectsSection = styled.section`
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

const ProjectCard = styled(Card)`
  background: ${({ theme }) => theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.cardBorderColor};
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled(Card.Title)`
  color: ${({ theme }) => theme.color};
  font-weight: 600;
`;

const ProjectText = styled(Card.Text)`
  color: ${({ theme }) => theme.color};
  opacity: 0.8;
`;

const Projects = () => {
  // Sample project data
  const sampleProjects = [
    {
      title: "Personal E-Portfolio",
      description: "A responsive portfolio website built with React, featuring dark mode, smooth animations, and modern design.",
      technologies: ["React", "Bootstrap", "Styled Components"],
      links: [
        { text: "Live Demo", href: "#" },
        { text: "GitHub", href: "#" }
      ]
    },
    {
      title: "Role-Based Access Control System",
      description: "A robust system for managing user roles and permissions, ensuring secure access control for applications. Features include user authentication, role assignment, and permission management.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "React"],
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/Role-Based-Access-Control-System" }
      ]
    },
    {
      title: "Multi-Threaded File System With Cache Management",
      description: "A high-performance file system project implementing multi-threading and advanced cache management for efficient file operations and resource utilization.",
      technologies: ["C++", "Multi-threading", "File System", "Cache Management"],
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/Multi-Threaded-File-System-With-Cache-Management" }
      ]
    },
    {
      title: "Optimal Delivery Route Finder",
      description: "A solution for finding the most efficient delivery routes using advanced algorithms and mapping technologies, reducing delivery time and costs.",
      technologies: ["Python", "Algorithms", "Mapping APIs", "Optimization"],
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/Optimal-Delivery-Route-Finder" }
      ]
    },
    {
      title: "JAVA-TO-CPP",
      description: "A project for converting Java code to C++ code, facilitating cross-language development and codebase migration.",
      technologies: ["Java", "C++", "Code Conversion", "Parsing"],
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/JAVA-TO-CPP" }
      ]
    },
    {
      title: "Expense Tracker",
      description: "A web application to track expenses, manage budgets, and visualize spending habits with interactive charts and reports.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      links: [
        { text: "GitHub", href: "https://github.com/AryanBartwal/Expense-Tracker" }
      ]
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <Row>
          {sampleProjects.map((project, index) => (
            <Col lg={6} md={6} key={index} className="mb-4">
              <ProjectCard>
                <Card.Body>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectText>{project.description}</ProjectText>
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="badge bg-primary me-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div>
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </ProjectCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
