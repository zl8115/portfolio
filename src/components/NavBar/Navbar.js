// Library Import
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Component Import
import DesktopButtons from './DesktopButtons';
import MobileDrawer from './MobileDrawer';

// Material-UI Imports
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// Image Asset Import
import { ZeLogo } from '../../assets/images';

// Navigation Link Name and Route Key Pairs
export const navigationKeyPairs = [
  ["Home", "/"],
  ["About Me", "/aboutme"],
  ["Resume", "/resume"],
  ["Projects", "/projects"],
]

// MAIN Function
export default function Navbar(props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  
  return (
    <AppBar color="inherit" elevation={trigger ? 4 : 0}>
      <Container maxWidth="lg">
      <Toolbar style={{padding: '0'}}>
        <Link component={RouterLink} to="/" color="textPrimary">
          <img src={ZeLogo} alt="logo" style={{maxHeight: "50px", margin: '0px 15px'}} />
        </Link>

        <Link component={RouterLink} to="/" color="textPrimary" underline={'none'}>
          <Typography variant="h4" style={{alignItems: 'center'}}>
            Ze Rong Lum
          </Typography>
        </Link>
        
        

        {/* Force Toolbar Options to the Right of Screen */}
        <div style={{marginLeft: 'auto'}}>
          {/* Desktop Version of Navbar */}
          <Hidden smDown>
            <Grid container justify="center" alignItems="center" spacing={1}>
              <DesktopButtons 
                navigationKeyPairs={navigationKeyPairs}
              />
            </Grid>
          </Hidden>

          {/* Mobile Version of Navbar */}
          <Hidden mdUp>
            <Grid container justify="center" alignItems="center" spacing={1}>
              <MobileDrawer
                navigationKeyPairs={navigationKeyPairs}
              />
            </Grid>
          </Hidden>
        </div>
      </Toolbar>
      </Container>
    </AppBar>
  );
}