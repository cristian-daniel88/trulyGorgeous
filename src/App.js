
import './App.css';
import Nav from './components/Nav/Nav';
import { GlobalStyles } from './styles/GlobalStyles';
import { Switch, Route } from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Top from './components/Top/Top';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';
import Home from './pages/Home';
import Cover from './components/Cover/Cover';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
    <GlobalStyles/>
    <Nav/>
    <Top/>
    <Cover/>
    <ToggleMenu/>
    
    <Switch>


    <Route exact path='/'>
        <Home/>
    </Route>
      

    <Route exact path='/about-us'>
        <AboutUs/>
    </Route>

    <Route exact path='/contact'>
        <Contact/>
    </Route>

      
    </Switch>

 

     <Footer>
       Footer
     </Footer>
    
    </>
  );
}

export default App;

//https://my.hosting.co.uk/

//Please ensure you have unlocked your domain at your current registrar before continuing.
//Transfer to us and extend by 1 year* for