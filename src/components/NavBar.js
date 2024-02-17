import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon 
            icon={faLaptopCode} 
            style={{ fontSize: '40px', cursor: 'pointer' }} 
            onClick={() => window.location.reload()} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
      </Nav>

          <span className="navbar-text">
            <div className="connect-container" style={{ display: 'flex', alignItems: 'center' }}>
              
            <a href="https://www.linkedin.com/in/fedja-mulabegovi%C4%87-277a812aa/" className="linkedin">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/fedjamulabegovic" className="github">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
              <a href="mailto:mulabegovicfedja@gmail.com" className="vvd">
                <span>Let's Email</span>
              </a>
            </div>
          

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
