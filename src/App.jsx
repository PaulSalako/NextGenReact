import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import ButtonExternal from './ButtonExternal.jsx'
import ButtonM from './ButtonModules/ButtonM.jsx'
import ButtonInline from './ButtonInline.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'

function App() {
  
  return(
    <>
        <Header/>
        <UserGreeting isLoggedIn={true} username = "Paul Salako"/>
        <hr />
        <h3>using Props</h3>
        <Student name="Paul Salako" age={10} classIn="Backend Developer" isStudent={true}/>
        <Student name="Faith Mbiko" age={50} classIn="Frontend Developer" isStudent={false}/>
        <hr />
        <h3>using default Props</h3>
        <Student/>
        <hr />
        <Card/>
        <ButtonExternal/>
        <ButtonM/>
        <ButtonInline/>
        <Food/>
        <Footer/>
        
        


        
    </>
  );
}

export default App
