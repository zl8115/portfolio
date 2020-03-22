import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Material UI Imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// Context Imports
import Theme from "./context/Theme";

// Pages Imports
import Home from "./pages/Home";

// Component Imports
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import WidthReturn from "./components/WidthReturn";


export default function App() {

  return (
    <Theme>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm" style={{marginTop:'90px'}}>
        <Router>
          <ScrollToTop/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Theme>
  );
}
