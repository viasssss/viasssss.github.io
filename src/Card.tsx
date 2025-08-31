import mypic from './assets/pic.png';
import cookie from './assets/cookie.jpeg';
import { FC } from 'react';
import { Card as BootstrapCard, Container, Row, Col, Image } from 'react-bootstrap';

const Card: FC = () => {
    return(
        <Container className="py-3">
            <Row className="g-0">
                <Col md={4} className="pe-md-1 d-flex">
                    <BootstrapCard className="text-center shadow-sm w-100">
                        <BootstrapCard.Body style={{ padding: '1rem' }}>
                            <Image 
                                src={mypic} 
                                alt="a picture of me" 
                                className="mb-3 img-fluid" 
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '250px',
                                    height: 'auto',
                                    objectFit: 'contain'
                                }}
                            />
                            <h2 className="mb-3" style={{ 
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 600,
                                color: '#2c3e50'
                            }}>Riley Ji</h2>
                            <div className="text-muted" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                <p className="mb-2" style={{ fontSize: '0.95rem' }}>
                                    <i className="bi bi-envelope-fill me-2"></i>
                                    rileyjjj98@gmail.com
                                </p>
                                <p className="mb-2" style={{ fontSize: '0.95rem' }}>
                                    <i className="bi bi-geo-alt-fill me-2"></i>
                                    Auckland, NZ
                                </p>
                                <p className="mb-2" style={{ fontSize: '0.95rem' }}>
                                    <i className="bi bi-mortarboard-fill me-2"></i>
                                    University of Auckland
                                </p>
                                <p className="mb-2" style={{ fontSize: '0.95rem' }}>
                                    <i className="bi bi-github me-2"></i>
                                    github.com/viasssss
                                </p>
                            </div>
                            <div className="mt-4 mx-auto" style={{ 
                                fontFamily: "'Poppins', sans-serif",
                                maxWidth: "calc(100% - 2rem)",
                                textAlign: "left"
                            }}>
                                <h4 className="mb-3" style={{ 
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 600,
                                    color: '#2c3e50',
                                    fontSize: '1.2rem'
                                }}>Education</h4>
                                <div className="text-start">
                                    <div className="mb-3">
                                        <p className="mb-1" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                                            University of Auckland
                                        </p>
                                        <p className="mb-1 text-muted" style={{ fontSize: '0.9rem' }}>
                                            PhD in Applied Mathematics
                                        </p>
                                        <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                                            2022 - Present
                                        </p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="mb-1" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                                            University of Manchester
                                        </p>
                                        <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                                            MSc in Applied Mathematics • 2020 - 2021
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </BootstrapCard.Body>
                    </BootstrapCard>
                </Col>
                <Col md={8} className="ps-md-1 d-flex">
                    <div className="p-3 rounded shadow-sm bg-light w-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <h3 style={{ 
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 600,
                            color: '#2c3e50'
                        }}>Hi!</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                            My name is Riley Ji, and I am currently a student studying Applied Mathematics. I am always fascinated by how even in a chaotic world, there is always hidden structure and logic to be found. I also enjoy learning, solving problems and facing challenges!
                        </p>
                        <p>
                            About this webpage, I just thought it would be cool to have my personal space that is only about me. Feel free to click around. 
                        </p>
                        <p>
                            P.S. Here are some cookies I made recently!
                        </p>
                        <img 
                            src={cookie} 
                            alt="homemade cookies" 
                            className="img-fluid rounded mt-3" 
                            style={{ 
                                maxWidth: '40%',
                                height: 'auto'
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Card