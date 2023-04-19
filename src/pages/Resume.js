// Library Imports
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Material UI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Asset Imports
import { mainPic } from '../assets/images/'

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// Component Imports
import CareerStepper from '../components/CareerStepper';
import ResumeAccordian from '../components/ResumeAccordian';

// MAIN Function
export default function Resume(props){

  return(
    <Container maxWidth="md">
      {/* META Tags */}
      <Helmet>
        <title>Resume | Ze Rong Lum</title>
        <meta
          name="description"
          content="The resume or CV of Ze Rong Lum, Software Engineer with an interest in Data Science."
        />
      </Helmet>

      {/* Component Content */}
      <Card>

        <CardHeader
          title={
              <Typography variant="h4">
              <strong>Ze Rong Lum</strong>
              </Typography>
            } 
          subheader="A Software Engineer with a strong foundation in mathematics and engineering. Experienced in object-oriented programming; version control; full-stack development; and machine learning. I am autonomous, curious and methodological with a flair at project management and communication. "
          style={{textAlign:'center'}}
        />

        <CardMedia
          style={{
            height: 0,
            paddingTop: '56.25%', // 16:9}}
          }}
          image={mainPic}
          title="Ze Rong Lum - The Graduate circa 2019"
        />

        <CardActions style={{justifyContent:"center"}}>
          <Button
            href={"https://drive.google.com/file/d/1_TDklKb34HJTb6NFRVMpmCrALB3Utaxg/view?usp=share_link"}
            variant="contained"
          >
            <CloudDownloadIcon/> &nbsp; Download PDF Version
          </Button>
        </CardActions>

        <CardContent>
          
          <Typography variant="h4">Career Timeline: </Typography>
          <hr/>
          <CareerStepper />

          <br/> <br/>

          <Typography variant="h4">Detailed Resume: </Typography>
          <hr/>
          <ResumeAccordian/>

        </CardContent>
      </Card>
    </Container>
  )
}