// import { FC } from 'react';
// import { Container } from 'react-bootstrap';

// 

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{height: "90px"}}>
      <div className="social-links">
        <div className="flex justify-center space-x-2 mb-1">
            <a href="#" className="hover:text-primary transition-colors">Resume</a>
          <a href="https://github.com/viasssss" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/riley-ji-66a368324/" className="hover:text-primary transition-colors">LinkedIn</a>
          
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Season Zero.</p>
      </div>
    </footer>
  );
};

export default Footer;