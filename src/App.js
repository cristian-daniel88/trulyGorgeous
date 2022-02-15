
import './App.css';
import Nav from './components/Nav/Nav';
import { GlobalStyles } from './styles/GlobalStyles';
import { Switch, Route } from "react-router-dom"
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Nav/>

    <Switch>

      <Route exact path='/about-us'>
        <AboutUs/>
      </Route>
      
    </Switch>
    </>
  );
}

export default App;
