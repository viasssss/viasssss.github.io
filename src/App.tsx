import Footer from './Footer';
import Header from './Header';
import Card from './Card';
import Student from './Student';
import UserGreeting from './UserGreeting';
import { FC } from 'react';

const App: FC = () => {
  return(
    <>
    <Header></Header>
    <Card></Card>
      <UserGreeting isLoggedIn={true} username='Riley'></UserGreeting>

      <Student name="Riley" age={27} isStudent={true}></Student>
      
      <Student name="Bruce" age={29} isStudent={false}></Student>
      
      <Footer></Footer>
    </>
  );
  
}

export default App
