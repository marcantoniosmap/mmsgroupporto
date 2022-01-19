import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About'
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Career from './Pages/Career';
import News from "./Pages/News";
import Subholding from "./Pages/Subholding";
import NewsContent from "./Pages/NewsContent";
import ScrollToTop from './ScrollToTop'
import CSR from "./Pages/CSR";
import { useState } from "react";

function App() {


  return (
    <>
    
      <Router>
        <Navbar />
        <ScrollToTop>
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

          {/* <Route
                path="/business"
                component={(props) =>
                  <Business
                    {...props}
                  />
                }
              /> */}

          <Route
            path="/business/:id"
            component={(props) =>
              <Subholding
                {...props}

              />
            }
            />

          <Route 

          exact
          path='/csr'
          component={(props) =>
                <CSR
                  {...props}
                />}
          />

          <Route 
            exact
            path='/newspage/:pagenum'
            component={(props) =>
                  <News 
                    {...props}
                  />}
            />

          <Route 
            path='/newspage'
            component={(props) =>
                  <Redirect to='/news/1'/>
            }
            />

          <Route 
            path='/news/:id'
            component={(props) =>
                  <NewsContent 
                    {...props}
                  />}
            />
           
          <Route 
            exact
            path='/career'
            component={(props) =>
                  <Career 
                    {...props}
                  />}
            />
          <Route 

            exact
            path='/contact'
            component={(props) =>
                  <Contact
                    {...props}
                  />}
            />
         <Redirect to="/" />
        </Switch>
        </ScrollToTop>

        <Footer/>

      </Router>

    </>
  );
}

export default App;
