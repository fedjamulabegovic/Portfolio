import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { FaGamepad, FaRobot } from 'react-icons/fa'; // For game and robotics projects
import { GiEarthAmerica, GiMagicPortal } from 'react-icons/gi'; // For geospatial and fantasy projects
import { AiOutlineMergeCells, AiOutlineCode } from 'react-icons/ai'; // For algorithm and coding projects
import './Projects.css'; // Assuming this is the correct path to your CSS

export const Projects = () => {
    const projects = [
        {
            title: "Imhotep Game",
            description: "Design & Development",
            icon: <FaGamepad size={30} />,
            githubUrl: "https://github.com/fedjamulabegovic/imhotep-game"
        },
        {
            title: "Geospatial Data Processing Project",
            description: "Data processing & Analysis",
            icon: <GiEarthAmerica size={30} />,
            githubUrl: "https://github.com/fedjamulabegovic/geospatial-data-processing-project"
        },
        {
            title: "Merge Algorithm",
            description: "Algorithm Development",
            icon: <AiOutlineMergeCells size={30} />,
            githubUrl: "https://github.com/fedjamulabegovic/merge-algorithm"
        },
       
    ];

    return (
        <section className="project-section" id="project">
            <Container fluid>
                <h2 className="text-center mb-4">Projects</h2>
                <Row className="project-row">
                    {projects.map((project, index) => (
                        <Col key={index} className="project-col" sm={12} md={6} lg={4}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                icon={project.icon}
                                githubUrl={project.githubUrl}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};
