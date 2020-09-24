import React from 'react';
import { Helmet } from 'react-helmet';

// Material UI Imports
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

// Material UI Icon Imports
import GitHubIcon from '@material-ui/icons/GitHub';

// Data Import
import projectsData from '../data/projects.json';

export default function Resume(props){
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
                <br/>
                {data.meta.map(tag => {
                  return(
                    <Chip
                      style={{margin:'5px'}}
                      label={tag}
                      clickable
                      variant="outlined"
                    />
                  )
                })}                
              </Grid>

              <Grid item xs={12} md={8}>
                <Typography variant="h4">
                  <Link href="https://github.com/zl8115/kaggle-titanic" underline="none" color="inherit">
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