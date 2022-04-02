
import './App.css';
import Nav from './components/Nav/Nav';
import { GlobalStyles } from './styles/GlobalStyles';
import { Switch, Route } from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Top from './components/Top/Top';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';
import Home from './pages/Home';
import Cover from './components/Cover/Cover';

import Footer from './components/Footer/Footer';
import { HashRouter } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import VictoriaJane from './components/Designers/VictoriaJane';
import RonaldJoyce from './components/Designers/RonaldJoyce';
import AssetsBottom from './components/AssetsBottom/AssetsBottom';
import ContactPage from './pages/ContactPage';
import WeddingDressesPage from './pages/WeddingDressesPage';
import FairyTalePage from './pages/FairyTalePage';
import ElegantPage from './pages/ElegantPage';
import RomanticPage from './pages/RomanticPage';
import SophisticatedPage from './pages/SophisticatedPage';





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
        <ContactPage/>
    </Route>

    
    <Route exact path='/designers/victoria-janes'>
         <VictoriaJane/>
    </Route>

    <Route exact path='/designers/ronald-joyce'>
         <RonaldJoyce/>
    </Route>

    <Route exact path='/wedding-dresses'>
         <WeddingDressesPage/>
    </Route>

    <Route exact path='/fairytale'>
         <FairyTalePage/>
    </Route>

    <Route exact path='/elegant'>
         <ElegantPage/>
    </Route>

    <Route exact path='/romantic'>
         <RomanticPage/>
    </Route>

    <Route exact path='/sophisticated'>
         <SophisticatedPage/>
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