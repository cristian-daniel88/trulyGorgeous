
import './App.css';
import Nav from './components/Nav/Nav';
import { GlobalStyles } from './styles/GlobalStyles';
import { Switch, Route } from "react-router-dom"
import AboutUs from './pages/AboutUs';
import Top from './components/Top/Top';
import ToggleMenu from './components/ToggleMenu/ToggleMenu';
import Home from './pages/Home';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Nav/>
    <Top/>
    <ToggleMenu/>

    <Switch>


    <Route exact path='/'>
        <Home/>
    </Route>
      

    <Route exact path='/about-us'>
        <AboutUs/>
    </Route>

      
    </Switch>
    
    </>
  );
}

export default App;
