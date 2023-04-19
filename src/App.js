// Library Imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Material UI Imports
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Context Imports
import { TerminalContextProvider } from "react-terminal";
import Theme from './context/Theme';

// Pages Imports
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import AboutMe from './pages/AboutMe';

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
        <TerminalContextProvider>
          <Router>
            <NavBar />
            <Container maxWidth="false" style={{marginTop:'90px'}}>
            <ScrollToTop/>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/aboutme">
                <AboutMe/>
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
        </TerminalContextProvider>
      </Theme>
    </HelmetProvider>
  );
}
