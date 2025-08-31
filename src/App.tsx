import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
import Card from './Card';
import Projects from './Projects';
import About from './About';
import Education from './Education';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={
            <>
              <Card />
              {/* <UserGreeting isLoggedIn={true} username='Riley' /> */}
            </>
          } />
          <Route path="/projects" element={
            <>
              <Projects></Projects>
            </>
          } />
          <Route path="education" element={
            <>
            <Education></Education> 
            </>
          } />
            
            
           
          <Route path="/about" element={
            <>
              <About></About>
            </>
          }/>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App
