import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';

// Material UI Imports
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// Material UI Icon Imports
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

// Context Import
import { ThemeContext } from '../context/Theme';

// Data Import
import projectsData from '../data/projects.json';

// MAIN Function
export default function Resume(props){

  const { isDarkTheme } = useContext(ThemeContext); // Load Theme Context

  function chipColor(metaTag){
    let color = (isDarkTheme) ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)";

    switch(metaTag){
      case 'python':
        color = "";
        break;
      case 'machine learning':
        color = "";
        break;
      case 'React.js':
        color = "";
        break;
      case 'Express.js':
        color = "";
        break;
      case 'REST API':
        color = "";
        break;
      case 'matlab':
        color = "";
        break;
      
            
      default:
        break;
    }
    
    // color = "#ebc400";

    return color;
  }

  return(
    <Container maxWidth="md">
      <Helmet>
        <title>Projects | Ze Rong Lum</title>
        <meta
          name="description"
          content="The directory of projects done by Ze Rong Lum, the only candidate for a Data Science role. This lists all the publicly posted repositories of projects that I have worked on. More coming soon!"
        />
      </Helmet>

      {projectsData.map(data => {
        return(
          <Card>
            <Grid container justify='center' alignContent='center' alignItems="center">
              
              <Grid item xs={12} md={4} align="center">
                <img src={require("../assets/images/"+data.image)} style={{width:'80%'}} alt={data.title+"'s Header Image"}/>
                <br/>
                {data.gitLink &&
                  <Tooltip title="GitHub Link">
                    <IconButton href={data.gitLink}>
                      <GitHubIcon/>
                    </IconButton>
                  </Tooltip>
                }
                {data.webLink &&
                  <Tooltip title="Website Link">
                    <IconButton href={data.webLink}>
                      <WebIcon/>
                    </IconButton>
                  </Tooltip>
                }
                <br/>
                {data.meta.map(tag => {
                  return(
                    <Chip
                      style={{margin:'5px', borderColor: chipColor(tag)}}
                      label={tag}
                      clickable
                      variant="outlined"
                    />
                  )
                })}                
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography variant="h4">
                  <Link href={data.link} underline="none" color="inherit">
                      <strong>{data.title}</strong>
                  </Link>
                </Typography>

                <Typography variant="subtitle2" color="textSecondary" paragraph>
                  {data.description}
                </Typography>

                <Typography variant="body" dangerouslySetInnerHTML={{__html: data.content}} />
              </Grid>

            </Grid>
          </Card>
        )
      })}
    </Container>
  )
}