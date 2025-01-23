import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import ButtonExternal from './ButtonExternal.jsx'
import ButtonM from './ButtonModules/ButtonM.jsx'
import ButtonInline from './ButtonInline.jsx'

function App() {
  
  return(
    <>
        <Header/>
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
