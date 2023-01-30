// Library Imports
import React from "react";
import { Helmet } from 'react-helmet-async';
import {Link as RouterLink} from 'react-router-dom';

// Material UI Imports
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Asset Imports
import { HelloThere } from "../assets/images";

// MAIN Function
export default function NotFound() {
  return(
    <Container style={{marginTop:"100px", textAlign:"center"}} maxWidth="md">
      <Helmet>
        <title>Page Not Found | Ze Rong Lum</title>
        <meta
          name="description"
          content="Cheeky... Digging where you're not supposed to..."
        />
      </Helmet>

      <Card style={{padding:"15px"}}>
        <img src={HelloThere} style={{width:"200px", display:"block", margin:"1rem auto", borderRadius: '50%'}} alt="Logo"/>
        <Typography variant="h4" paragraph>
          404 <br/> Hello There!
        </Typography>
        <Typography variant="h5">
          I see you're somewhere you're not supposed to be at.
          <br/>
          Let's bring you back...
          <br/>
          You naughty child...
          <br/><br/>
          <Button
            variant="contained"
            component={RouterLink}
            to="/"
            color="primary"
          >
            Go Back!
          </Button>
          <br/> <br/>
          <Button
            variant="contained"
            component={RouterLink}
            to="/"
            color="secondary"
          >
            Nah!
          </Button>
        </Typography>
      </Card>
    </Container>
  )
}