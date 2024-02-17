import React, { useState, useEffect, useRef } from 'react'; // Added useRef here
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css'; // Make sure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faPython,
    faDocker,
    faNodeJs,
    faReact,
    faJava // Corrected import for Java
} from '@fortawesome/free-brands-svg-icons';

export const Skills = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const interactionTimer = useRef(null);

    // Function to reset the autoplay timer
    const resetAutoplayTimer = () => {
        setIsPlaying(false); // Stop autoplay immediately
        clearTimeout(interactionTimer.current); // Clear existing timer
        interactionTimer.current = setTimeout(() => {
            setIsPlaying(true); // Resume autoplay after delay
        }, 1000); // Delay before resuming autoplay
    };

    const handleUserInteraction = () => {
        resetAutoplayTimer(); // Reset the timer on user interaction
    };

    useEffect(() => {
        const leftArrow = document.querySelector('.carousel-left-arrow');
        const rightArrow = document.querySelector('.carousel-right-arrow');

        if (leftArrow) leftArrow.addEventListener('click', handleUserInteraction);
        if (rightArrow) rightArrow.addEventListener('click', handleUserInteraction);

        return () => {
            clearTimeout(interactionTimer.current);
            if (leftArrow) leftArrow.removeEventListener('click', handleUserInteraction);
            if (rightArrow) rightArrow.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    


        // Example responsive configuration
        const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


  
    return (
        <section className="skill-section" id="skills">
            <Container>
                <Row>
                    <Col>
                        <h2>Skills</h2>
                        <Carousel
                              responsive={responsive}
                              infinite={true}
                              autoPlay={isPlaying}
                              autoPlaySpeed={1000}
                              className="skill-slider"
                              transitionDuration={500}
                              pauseOnHover={true}
                              beforeChange={handleUserInteraction} // Called on user interaction
                          >
                                        
                            <div className="item">
                                <FontAwesomeIcon icon={faHtml5} size="3x" title="HTML5" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faCss3Alt} size="3x" title="CSS3" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faJsSquare} size="3x" title="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faPython} size="3x" title="Python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faDocker} size="3x" title="Docker" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faJava} size="3x" title="Java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faNodeJs} size="3x" title="Node.js" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <FontAwesomeIcon icon={faReact} size="3x" title="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                            <div className="icon-c" title="C Language"></div>
                            <h5>C</h5>
                            </div>
                            <div className="item">
                            <div className="icon-cpp" title="C++ Language"></div>
                            <h5>C++</h5>
                            </div>
                            <div className="item">
                            <div className="icon-csharp" title="C# Language"></div>
                            <h5>C#</h5>
                            </div>

                        </Carousel>
                        <p className="skills-description">
                        Beyond my technical proficiency in programming languages such as C, C++, and C#, I bring 
                        a collaborative spirit, having thrived in team-based environments. My foundation in object-oriented 
                        programming is complemented by a hands-on experience with low-level Assembly language, which has 
                        sharpened my understanding of computer architecture and optimized coding practices. My enthusiasm for Python 
                        is matched by my curiosity in machine learning, a field where I am actively expanding my knowledge. The 
                        banking sector, with its emphasis on security, efficiency, and reliability, offers a fascinating 
                        landscape where these skills can be leveraged to innovate and enhance financial technologies.
                    </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};