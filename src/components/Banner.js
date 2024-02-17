import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { ArrowRightCircle } from 'react-bootstrap-icons'; // Ensure this import matches your icon library usage

import './Banner.css'; // Ensure the path matches your file structure

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ['Fedja Mulabegović'];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
            }
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta, loopNum, isDeleting, toRotate]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <div class="portfolio-section">
                        <span class="tagline">Welcome to my Portfolio</span>
                        <p>I'm a fifth-semester Computer Science student at TU Graz. I have a strong interest in technology and how we can apply it to solve complex problems.</p>
                        <p>I'm currently seeking internship opportunities where I can further explore areas like AI and software development. I'm excited about the chance to contribute to real-world projects and learn from experienced professionals.</p>
                        <p>Take a look at my CV to see my progress in both my academic and personal tech endeavors. If you have an opportunity or project in mind, let's connect—I'm ready to dive in and collaborate on something amazing.</p>
                        <button 
                        onClick={() => {
                        window.open('/Fedja_Mulabegovic-1.pdf', '_blank');
                        }} 
                        className="vvd"
                        >
                        Download my CV <ArrowRightCircle size={25} />
                        </button>
                    </div>

                    </Col>
                    <Col xs={12} md={6} xl={5} className="text-center">
                        <FontAwesomeIcon 
                            icon={faLaptopCode} 
                            size="10x" 
                            className="bright-blue-hover" 
                            style={{ fontSize: '200px' }} 
                        />
                        <div 
                            className="bright-blue-hover" 
                            style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}
                        >
                        Fedja Mulabegovic
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
 