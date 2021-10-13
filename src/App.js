import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ScriptTag from 'react-script-tag';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About'
import Footer from './components/Footer';

function App() {

  
  return (
    <>
    
      <Router>
        <Navbar/>
        <Switch>
          <Route 
            exact
            path='/'
            component={(props) =>
                  <Home
                    {...props}
                  />}
            />

          <Route 
            exact
            path='/about'
            component={(props) =>
                  <About
                    {...props}
                  />}
            />
        </Switch>
        <Footer/>

      </Router>

    </>
  );
}

export default App;
