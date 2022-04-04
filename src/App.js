
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

import AssetsBottom from './components/AssetsBottom/AssetsBottom';
import ContactPage from './pages/ContactPage';
import WeddingDressesPage from './pages/WeddingDressesPage';
import FairyTalePage from './pages/FairyTalePage';
import ElegantPage from './pages/ElegantPage';
import RomanticPage from './pages/RomanticPage';
import SophisticatedPage from './pages/SophisticatedPage';
import DesignersPage from './pages/DesignersPage';
import PalomaBlancaPage from './pages/PalomaBlancaPage';
import RonaldJoycePages from './pages/RonaldJoycePages';
import VictoriaJanePages from './pages/VictoriaJanePages';

import AlanHannahPages from './pages/AlanHannahPages';
import SofiaBiancaPages from './pages/SofiaBiancaPages';

import LusanMandongusPage from './pages/LusanMandongusPage';
import AlterationsPage from './pages/AlterationsPage';
import PriceListPage from './pages/PriceListPage';
import OurCreationsPage from './pages/OurCreationsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactFooter from './components/ContactFooter/ContactFooter';
import ScrollTop from './components/ScrollTop/ScrollTop';
import SendMessagePages from './pages/SendMessagePages';





function App() {
  return (
    <>
    <HashRouter>
     <ScrollTop/>
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

    
    <Route exact path='/designers'>
         <DesignersPage/>
    </Route>

    <Route exact path='/paloma-blanca'>
         <PalomaBlancaPage/>
    </Route>

    <Route exact path='/ronald-joyce'>
         <RonaldJoycePages/>
    </Route>

    <Route exact path='/victoria-jane'>
         <VictoriaJanePages/>
    </Route>

    <Route exact path='/alan-hannah'>
         <AlanHannahPages/>
    </Route>

    <Route exact path='/sofia-bianca'>
         <SofiaBiancaPages/>
    </Route>


    <Route exact path='/lusan-mandongus'>
         <LusanMandongusPage/>
    </Route>

    <Route exact path='/alterations'>
         <AlterationsPage/>
    </Route>

    <Route exact path='/price-list'>
         <PriceListPage/>
    </Route>

    
    <Route exact path='/our-creations'>
         <OurCreationsPage/>
    </Route>

    <Route exact path='/testimonials'>
        <TestimonialsPage/>
    </Route>


    <Route exact path='/sent'>
        <SendMessagePages/>
    </Route>










      
    </Switch>

    
    <Aside/>

     <Footer/>



    {/* <AssetsBottom/> */}

     <ContactFooter/>
    
       
    

    
    </HashRouter>
    </>
  );
}

export default App;

//https://my.hosting.co.uk/

//Please ensure you have unlocked your domain at your current registrar before continuing.
//Transfer to us and extend by 1 year* for