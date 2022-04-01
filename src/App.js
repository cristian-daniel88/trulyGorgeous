
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
import { HashRouter } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import VictoriaJane from './components/Designers/VictoriaJane';
import RonaldJoyce from './components/Designers/RonaldJoyce';
import AssetsBottom from './components/AssetsBottom/AssetsBottom';





function App() {
  return (
    <>
    <HashRouter>

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

    
    <Route exact path='/designers/victoria-janes'>
         <VictoriaJane/>
    </Route>

    <Route exact path='/designers/ronald-joyce'>
         <RonaldJoyce/>
    </Route>

      
    </Switch>

    
    <Aside/>

     <Footer/>
     <AssetsBottom/>
    
       
    

    
    </HashRouter>
    </>
  );
}

export default App;

//https://my.hosting.co.uk/

//Please ensure you have unlocked your domain at your current registrar before continuing.
//Transfer to us and extend by 1 year* for