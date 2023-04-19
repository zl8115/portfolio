// Library Imports
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Typewritter from 'typewriter-effect';

// Material UI Imports
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

// Component Import
import ProgrammerBlock from '../components/ProgrammerBlock';

// Asset Imports
import { Food1, Food2, Food3, Food4, ZeDoodle } from "../assets/images/"

// MAIN Function
export default function AboutMe(){
  return(
    <React.Fragment>
      <Helmet>
        <title>About Me | Ze Rong Lum</title>
        <meta
          name="description"
          content="Who is Ze Rong Lum?"
        />
      </Helmet>

      <Grid container alignContent="center" alignItems="center" justify="center" style={{height:"100%", width:'100%'}} >
        <Grid item lg={3} sx={{display: {sx: 'none', lg: 'inherit'}}}/>
        <Grid item xs={12} lg={6}>
          <Card style={{textAlign:'center'}}>
            <img
              src={ZeDoodle} 
              style={{
                borderRadius: '50%',
                width:'80%',
                maxWidth: '150px',
                marginTop: '0',
                margin: '1vw', 
              }}
              alt="Ze Doodle"
            />
            <Typography variant="h3">Who is Ze Rong Lum?</Typography>
            <Typography variant="h5" paragraph>
              A<Typewritter
                options = {{
                  strings: [
                    ' Programmer',
                    ' Cooking Enthusiast',
                    'n Amatuer Artist'
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2500,
                }}
              />
            </Typography>
          </Card>
        </Grid>
        <Grid item lg={3} sx={{display: {sx: 'none', lg: 'inherit'}}}/>

        <Grid item lg={2} sx={{display: {sx: 'none', lg: 'inherit'}}}/>
        <Grid item xs={12} lg={8}>
        <ProgrammerBlock/>
        </Grid>
        <Grid item lg={2} sx={{display: {sx: 'none', lg: 'inherit'}}}/>
        
        <Grid item xs={6} md={3}>
          <Card style={{borderRadius: '10px'}}>
            <CardMedia
              component="img"
              alt="Chilli Beef Lettuce Wraps"
              image={Food1}
            />
            <CardContent sx={{textAlign: 'center'}}>
              Chilli Beef Lettuce Wraps
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card style={{borderRadius: '10px'}}>
            <CardMedia
              component="img"
              alt="Pa-Jeon"
              image={Food2}
            />
            <CardContent sx={{textAlign: 'center'}}>
              Korean Pa-Jeon Vegetable Pancake
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card style={{borderRadius: '10px'}}>
            <CardMedia
              component="img"
              alt="Pho"
              image={Food3}
            />
            <CardContent sx={{textAlign: 'center'}}>
              Vietnamese Pho
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card style={{borderRadius: '10px'}}>
            <CardMedia
              component="img"
              alt="Ramen"
              image={Food4}
            />
            <CardContent sx={{textAlign: 'center'}}>
              Japanese Tonkotsu Ramen
            </CardContent>
          </Card>
        </Grid>

        </Grid>
    </React.Fragment>
  )
}