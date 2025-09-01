// import { FC } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
// import Footer from './Footer';

import Card from './Card';
import Projects from './Projects';
import About from './About';
import { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from './Footer';


function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    
    <div>

<Header activeSection={activeSection} />
<section id="card" className="h-screen flex items-center justify-center bg-gray-100" >
  <Card />

</section>

<section id="projects" className="h-screen flex items-center justify-center bg-gray-200">
  <Projects />
</section>

<section id="about" className="h-screen flex items-center justify-center bg-gray-300">
  <About />
</section>

<Footer></Footer>

    </div>
  );
}

export default App;


// const App: FC = () => {
//   return (
//     <div className="app d-flex flex-column min-vh-100">
//       <Header />
//       <Container className="py-4 flex-grow-1">
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Card />
//               {/* <UserGreeting isLoggedIn={true} username='Riley' /> */}
//             </>
//           } />
//           <Route path="/projects" element={
//             <>
//               <Projects></Projects>
//             </>
//           } />
//           {/* <Route path="education" element={
//             <>
//             <Education></Education> 
//             </>
//           } /> */}
            
//           <Route path="/about" element={
//             <>
//               <About></About>
//             </>
//           }/>
//         </Routes>
//       </Container>
//       <Footer />
//     </div>
//   );
// }

// export default App;
