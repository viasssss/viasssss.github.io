import mypic from './assets/pic.png';
import cookie from './assets/cookie.jpeg';
import movie from './assets/movie.png';
import { FC } from 'react';
import { Card as BootstrapCard, Container, Row, Col, Image } from 'react-bootstrap';

const Card: FC = () => {
    return(
        <Container className="py-3">
            <Row className="g-0">
                <Col md={4} className="pe-md-1 d-flex">
                    <BootstrapCard className="text-center shadow-sm w-100">
                        <BootstrapCard.Body style={{ padding: '0.1rem' }}>
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
                                color: '#736087ff'
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
                                
                            </div>
                            <div className="mt-4 mx-auto" style={{ 
                                fontFamily: "'Poppins', sans-serif",
                                maxWidth: "calc(100% - 2rem)",
                                textAlign: "left"
                            }}>
                                <h4 className="mb-3" style={{ 
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 600,
                                    color: '#736087ff',
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
                                            MSc in Applied Mathematics
                                        </p>
                                        <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                                            2020 - 2021
                                        </p>
                                    </div>
                                    <div className="mb-2">
                                        <p className="mb-1" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                                            Dalian Maritime University
                                        </p>
                                        <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                                            BSc in Applied Mathematics
                                        </p>
                                        <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                                            2016 - 2020
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </BootstrapCard.Body>
                    </BootstrapCard>
                </Col>
                <Col md={8} className="ps-md-1 d-flex">
                    <div className="p-3 rounded shadow-sm w-100 chat-bubble" style={{ fontFamily: "'Poppins', sans-serif",backgroundColor: "#edecedff"}}>
                        <h3 style={{ 
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 600,
                            color: '#736087ff'
                        }}>Hi!</h3>
                        <p style={{ fontSize: '0.95rem' }}>
                             Welcome to <b>Season Zero</b>, which is from my Chinese name. This is my little playground on the web where I share my journey of figuring life out, building cool stuff, and sometimes just goofing around.
                        </p>
                        <p>
                            I am currently a student studying Applied Mathematics. I am always fascinated by how even in a chaotic world, there is always hidden structure and logic to be found. I also enjoy learning, solving problems and facing challenges!
                        </p>
                        <p>
                            I’m excited to keep growing by applying my skills in data analytics, machine learning, and software development to real projects. I am on the lookout for opportunities where I can contribute, pick up new ideas, and work with great people.
                        </p>
                        
                        <p>
                            P.S. Here are some cookies I made recently and a film I found interesting!
                        </p>
                        
                           
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                            <img src={cookie} alt="homemade cookies" 
                                className="img-fluid rounded mt-3"
                                style={{ 
                                    height: '400px',       // fixed height
                                    width: 'auto',         // width scales to maintain aspect ratio
                                    objectFit: 'cover'     // fills the height nicely
                                        }}/>
                        <img src={movie} alt="a movie" 
                                className="img-fluid rounded mt-3"
                                style={{ 
                                    height: '400px',       // same height as first image
                                    width: 'auto',
                                    objectFit: 'cover'
                                        }}/>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Card