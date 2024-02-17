import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, icon, githubUrl }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="project-icon">{icon}</div>
                <Button variant="primary" href={githubUrl} target="_blank">View Project</Button>
            </Card.Body>
        </Card>
    );
};

export default ProjectCard;
