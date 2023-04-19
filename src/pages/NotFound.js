// Library Imports
import React from "react";
import { Helmet } from 'react-helmet-async';
import {Link as RouterLink} from 'react-router-dom';

// Material UI Imports
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

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
          I see you're somewhere you're not supposed to be at
          <br/><br/>
          <Button
            variant="contained"
            component={RouterLink}
            to="/"
          >
            Go Back!
          </Button>
        </Typography>
      </Card>
    </Container>
  )
}