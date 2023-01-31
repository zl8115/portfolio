// Library Imports
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Material-UI Imports
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// Material UI Icon SVGs
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Context Import
import { useTheme } from '../../context/Theme';

// MAIN Function
export default function DesktopButtons(props) {
  const { navigationKeyPairs } = props; // Default prop passed from parent component (Navbar.js)
  
  const { darkTheme, setDarkTheme } = useTheme(); // Load Theme Context
  
  // Light/Dark Theme Handler Function
  function handleChange(event) {
    setDarkTheme(!darkTheme);
  }

  return (
    <React.Fragment>
      {navigationKeyPairs.map((item) => {
        const color="inherit";
        const variant="text";
        const activeClassName="nav-selected"

        return(
        <Grid item key={item[0]}>
          <Button 
            component={(item[1].includes('#')) ? HashLink : RouterNavLink} 
            exact to={ item[1] } 
            color={color}
            variant={variant}
            activeClassName={activeClassName}
            smooth={item[1].includes('#')}
          >
            { item[0] }
          </Button>
        </Grid>
        )
      })}

      <Grid item>
        <Tooltip title="Toggle light/dark theme">
          <IconButton onClick={handleChange}>
            {(darkTheme) ? (<Brightness7Icon/>) : (<Brightness4OutlinedIcon />)}
          </IconButton>
        </Tooltip>
      </Grid>
      
    </React.Fragment>
  );
}