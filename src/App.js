// Library Imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Material UI Imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// Context Imports
import Theme from './context/Theme';

// Pages Imports
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

// Component Imports
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';

import { HelmetProvider } from "react-helmet-async";

// MAIN Function
export default function App() {

  return (
    <HelmetProvider>
      <Theme>
        <CssBaseline />
        <Router>
          <NavBar />
          {/* <Container maxWidth="md" style={{marginTop:'90px'}}> */}
          <Container maxWidth="false" style={{marginTop:'90px'}}>
          <ScrollToTop/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/resume">
              <Resume/>
            </Route>
            <Route exact path="/projects">
              <Projects/>
            </Route>
            <Route>
              <NotFound/>
            </Route>            
          </Switch>
          </Container>
        </Router>
      </Theme>
    </HelmetProvider>
  );
}
