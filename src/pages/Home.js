// Library Imports
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Material UI Imports
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

// Asset Imports
import { profilePic } from "../assets/images/"

// Component Imports
import MeLinks from "../components/MeLinks";
import ZeTerminal from "../components/ZeTerminal";

// Component Styling
const HeaderCard = (props) => (
  <Card sx={(theme) => ({
    height: 'calc(100vh - 124px)',
    margin:"30px",
    padding: "5vw",
    textAlign: "center",
    minHeight: '380px',
    position: 'relative',
    [theme.breakpoints.down("lg")]: {
      height: 'auto'
    }
  })}>
    {props.children}
  </Card>
)

// MAIN Function
export default function Home(){
  return(
    <React.Fragment>
      <Helmet>
        <title>Home | Ze Rong Lum</title>
        <meta
          name="description"
          content="Ze Rong Lum, C/C++ Software Engineer."
        />
      </Helmet>

      <HeaderCard>
        <Grid container alignContent="center" alignItems="center" justify="center" style={{height:"100%", width:'100%'}} >
          
          <Grid item xs={12} lg={6}>
            <img src={profilePic} style={{
                borderRadius: '50%',
                width:'80%',
                maxWidth: '300px',
                marginTop: '0',
                margin: '1vw',    
              }} 
              alt="Ze Rong Lum's Headshot"/>
            <Typography variant="h4">
              <strong>Ze Rong Lum</strong>
            </Typography>
            <Typography variant="h6">
              Software Engineer at OpenText
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              MEng &amp; ACGI in Biomedical Engineering
            </Typography>
            <MeLinks />
          </Grid>

          <Grid item xs={12} lg={6} style={{textAlign:'left'}}>
            <Typography variant="h3">Welcome</Typography>
            <hr/>
            <Typography variant="h5" paragraph>
              This is the personal portfolio of Ze Rong Lum, a programmer by profession and an engineer by training. Besides a portfolio, this website is also used as a platform to explore React.js and my creativity.
              <br/><br/>
              At the moment, there is not a lot of content but hopefully this will continue to be developed over time. In the meantime, feel free to explore the website. You can also navigate the website using the interactive terminal below.
              <br/><br/>
            </Typography>
            <Typography variant="h6">The ZeTerminal</Typography>
            <hr/>
            <ZeTerminal/>
            
          </Grid>

        </Grid>
      </HeaderCard>
    </React.Fragment>
  )
}