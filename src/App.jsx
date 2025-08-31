import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
 
function App() {
  return(
    <>
      <Header></Header>
      <Food></Food>
      <UserGreeting isLoggedIn={true} username='Riley'></UserGreeting>

      <Student name="Riley" age={27} isStudent={true}></Student>
      
      <Student name="Bruce" age={29} isStudent={false}></Student>
      <Card></Card>
      <Footer></Footer>
    </>
  );
  
}

export default App
