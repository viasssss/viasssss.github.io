
import { FC } from 'react';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

type HeaderProps = {
  activeSection: string;
};

const Header: FC<HeaderProps> = ({ activeSection }) => {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#card">Season Zero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link 
              href="#card" 
              className={activeSection === "card" ? "fw-bold text-primary" : ""}
            >
              Card
            </Nav.Link> */}
            <Nav.Link 
              href="#projects" 
              className={activeSection === "projects" ? "fw-bold text-primary" : ""}
            >
              Projects & Skills
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className={activeSection === "about" ? "fw-bold text-primary" : ""}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// const Header: FC = () => {
//     return (
//         <Navbar className="custom-navbar" variant="dark" expand="lg">
//             <Container>
//                 <Navbar.Brand as={Link} to="/">Season Zero</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
//                         {/* <Nav.Link as={Link} to="/education">Education</Nav.Link> */}
//                         <Nav.Link href="#projects">Projects & Skills</Nav.Link>
//                         <Nav.Link href="#about">About</Nav.Link>
                        
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

// export default Header