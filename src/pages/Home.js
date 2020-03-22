import React from 'react';

// Material UI Imports
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Avatar, CardMedia, CardContent, CardActions, Tooltip,IconButton, Link, Grid } from "@material-ui/core";

// Asset Imports
import { mainPic, profilePic } from "../assets/images/"

// Component Imports
import CareerStepper from "../components/CareerStepper";
import MeLinks from "../components/MeLinks";

export default function Home(){
  return(
    <Card>
      <CardHeader 
        avatar={
          <Link href="https://www.instagram.com/zerg_lum/">
            <Avatar alt="zerg_lum" src={profilePic}/>
          </Link>
        } 
        title={
          <Link 
            href="https://www.instagram.com/zerg_lum/" 
            color="inherit" 
            underline="none" 
            variant="h8"
          >
            <strong>Ze Rong Lum</strong>
          </Link>} 
        subheader="London, United Kingdom"
      />
      <CardMedia
        style={{
          height: 0,
          paddingTop: '56.25%', // 16:9}}
        }}
        image={mainPic}
        title="Test Text"
      />

      <CardActions>
        <MeLinks />
      </CardActions>

      <CardContent>
        <Typography variant="h5">Abstract: </Typography>
        <Typography variant="subtitle1">
          Web Developer | Interested in Data Analytics | MEng in Biomedical Engineering
        </Typography>

        <br/>

        <Typography variant="h5">Career Timeline: </Typography>

        <CareerStepper />

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Typography variant="h5" component="h1">
              Oct 2019 - Present
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" component="h1">
              Product Lead and Co-Founder
            </Typography>
            <Typography variant="subtitle1" component="h1">
              ELIZE.IO, UNITED KINGDOM
            </Typography>
          </Grid>
        </Grid>
        
        <br />
        <Typography variant="h5" component="h1">
          Oct 2016 - Oct 2019
        </Typography>
        <Typography variant="h6" component="h1">
          MEng in Biomedical Engineering
        </Typography>
        <Typography variant="subtitle1" component="h1">
          IMPERIAL COLLEGE LONDON, UNITED KINGDOM
        </Typography>
        <br/>
        <Typography variant="subtitle1" component="h1">
          After graduating in October 2019, I decided to pursue my interests which led me to being Product Lead and Co-Founder of Elize.io. 
          <br/>
          Web Developer <br/>
          Interested in Data Analytics
        </Typography>
      </CardContent>
    </Card>
  )
}