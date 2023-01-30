// Library Imports
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Material UI Imports
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core";

// Asset Imports
import { profilePic } from "../assets/images/"

// Component Imports
import MeLinks from "../components/MeLinks";

// Component Styling
const styles = theme => ({
  headerCard: {
    height: 'calc(100vh - 124px)',
    margin:"30px",
    padding: "5vw",
    textAlign: "center",
    minHeight: '380px',
    position: 'relative',
    [theme.breakpoints.down('lg')]:{
      height: 'auto'
    },
  },

  profilePicture: {
    borderRadius: '50%',
    width:'80%',
    maxWidth: '300px',
    marginTop: '0',
    margin: '1vw',    
  }
})

// MAIN Function
function Home(props){
  const { classes } = props;

  return(
    <React.Fragment>
      <Helmet>
        <title>Home | Ze Rong Lum</title>
        <meta
          name="description"
          content="Ze Rong Lum, Software Engineer and keen enthusiast of Statistical Analysis and Machine Learning interested in Data Science."
        />
      </Helmet>

      <Card className={classes.headerCard}>
        <Grid container alignContent="center" alignItems="center" justify="center" style={{height:"100%", width:'100%'}} >
          
          <Grid item xs={12} lg={4}>
            <img src={profilePic} className={classes.profilePicture} alt="Ze Rong Lum's Headshot"/>
            <Typography variant="h4">
              <strong>Ze Rong Lum</strong>
            </Typography>
            <Typography variant="h6">
              Software Engineer at Micro Focus
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              MEng &amp; ACGI in Biomedical Engineering
            </Typography>
            <MeLinks />
          </Grid>

          <Grid item xs={12} lg={8} style={{textAlign:'left'}}>
            <Typography variant="h4">About Me </Typography>
            <hr/>
            <Typography variant="subtitle1">
              Originally from Kuala Lumpur, Malaysia, now a Software Engineer at Micro Focus, United Kingdom with an interest in Data Science. I graduated from Imperial College London in 2019 with a undergraduate Masters in Engineering (MEng) in Biomedical Engineering, taking up modules mostly related to Programming, Signal Analysis and Machine Learning.
              After graduation I worked on a startup idea, Elize.io, as a Full Stack Engineer, Machine Learning Engineer and Co-Founder. My main role was to develop the web platform and the technology that was used to achieve automated transcription and key sentence extraction. This experience in web development and machine learning allowed me to refine my interest in Data Science.
              Moving on from that startup, I currently work as a Software Engineer at Micro Focus where I am developing my software engineering skills following the best practices primarily in C/C++. My current role has me developing and maintaining new and old code; along with plenty of Software Testing and Debugging.
              <br/><br/>
              Aside my interest in Data Science, there are other things I am passionate about which are Kendo and Gaming.
              Kendo is a Japanese Martial Arts that is based on traditional swordsmanship that I started during my days in university.
              What really makes me passionate about Kendo are the values and discipline that it embodies.
              On the other hand, my passion for Gaming is mainly in First Person Shooters (FPS) and grinding games like Warframe and Monster Hunter.
              I like these genres in particular because I have an obsession with skill-based games to become better myself in order to win; 
              as well as the need to research and figure things out to best optimize (min-max'ing) the methods to obtaining items in games.
              I feel both my outlets for my passion shows that I am someone that has the discipline and tenacity to learn and develop the necessary skills to be successful; 
              and also my innate affinity towards optimization, data gathering and problem solving.
            </Typography>
            <br/> <br/>
            <Typography variant="h5">Fields of Interest </Typography>
            <Typography variant="subtitle2">
              <ul>
                {/* <li>Natural Language Processing (NLP): Working for Elize.io, I developed a keen interest in its applications from Named Entity Recognition to Summarizations tasks.</li>
                <li>Pattern Recognition/Image Processing: Most of university modules revolved around image processing and it has remained an active interest of mine.</li>
                <li>Signal Processing: One of my favourite modules in university and is still my goto methods for statistical analysis before Machine Learning.</li>
                <li>Complex Statistical Analysis: The concept of using Complex numbers for higher order statistics is promising in its applications.</li>
                <li>Optimization Methods: "Garbage In, Garbage Out" is the first problem, the next is having a decent optimization algorithm for the model to learn.</li> */}
                <li>Natural Language Processing (NLP)</li>
                <li>Pattern Recognition/Image Processing</li>
                <li>Signal Processing</li>
                <li>Complex Statistical Analysis</li>
                <li>Optimization Methods</li>
              </ul>
            </Typography>
          </Grid>

        </Grid>
      </Card>
    </React.Fragment>
  )
}

// Default Export with Component Styling Applied
export default withStyles(styles)(Home)