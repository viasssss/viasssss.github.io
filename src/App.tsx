import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Card from './Card';
import Student from './Student';
import UserGreeting from './UserGreeting';
import About from './About';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Card />
            <UserGreeting isLoggedIn={true} username='Riley' />
          </>
        } />
        <Route path="/students" element={
          <>
            <Student name="Riley" age={27} isStudent={true} />
            <Student name="Bruce" age={29} isStudent={false} />
          </>
        } />
        <Route path="/about" element={
          <>
          <About></About>
          </>
        }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App
