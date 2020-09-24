// Library Imports
import React from 'react';
import { Helmet } from 'react-helmet';

// Material UI Imports
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Asset Imports
import { mainPic } from '../assets/images/'

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

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
          content="The resume or CV of Ze Rong Lum, the immediate candidate for a Data Science role. A detailed journey of myself and what I have achieved in my lifetime and how I have come to pursue a career in Data Science."
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
          subheader="A recent MEng graduate with a strong foundation in mathematics and engineering. Experienced in object-oriented programming; version control; full-stack development; and machine learning. I am autonomous, curious and methodological with a flair at project management and communication. "
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
            className="btn btn-primary"
            href={"https://drive.google.com/file/d/1iXeKB7uMlQLumX2gGUODToY6ilk2pP7h/view?usp=sharing"}
            color="primary"
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