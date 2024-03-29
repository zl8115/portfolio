// Library Imports
import React, { useContext } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Material-UI Imports
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Material-UI Icons
import AdjustIcon from '@mui/icons-material/Adjust';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DescriptionIcon from '@mui/icons-material/Description';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

// Context Import
import { ThemeContext } from '../../context/Theme';

// MAIN Function
export default function MobileDrawer(props){
  const {navigationKeyPairs} = props;

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Load Theme Context
  
  // Light/Dark Theme Handler Function
  function handleChange(event) {
    toggleDarkMode(!isDarkMode);
  }

  // Open/Closed status for mobile drawer menu
  const [mobileDrawer, setMobileDrawer] = React.useState(false);

  const handleDrawerClick = (event) => {
    // setAnchorE1(event.currentTarget);
    setMobileDrawer(true)
  }

  const handleDrawerClose = () =>{
    // setAnchorE1(null);
    setMobileDrawer(false)
  }
  
  return(
    <React.Fragment>
      <IconButton
        aria-controls="navbar-menu"
        onClick={handleDrawerClick}
      >
        <MenuIcon />
      </IconButton>


      <Drawer
        id="navbar-menu"
        anchor="right"
        keepMounted
        open={mobileDrawer}
        onClose={handleDrawerClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        PaperProps={{
          sx: {
            width: '300px',
          }
        }}
      >
        <List>
          {/* Render all the links */}
          {navigationKeyPairs.map((item) => {
            let icon = <AdjustIcon />
            let activeClassName="nav-selected"

            switch(item[1]){
              case "/":
                icon = <HomeIcon />
                activeClassName = "nav-selected"
                break
              case "/resume":
                icon = <DescriptionIcon />
                activeClassName="nav-selected"
                break
              case "/projects":
                icon = <FolderIcon />
                activeClassName="nav-selected"
                break
              default:
                icon = <AdjustIcon />
                activeClassName="nav-selected"
                break
            }

            return(
              <Link
                key={ item[0] }
                component={(item[1].includes('#')) ? HashLink : RouterNavLink} 
                to={ item[1] } 
                color="textPrimary"
                underline="none"
                activeClassName={activeClassName}
                smooth={item[1].includes('#') ? "true" : undefined}
                exact
              >
                <ListItem 
                  key={item[0]}
                  alignItems="center"
                >
                  <ListItemIcon>
                    { icon }
                  </ListItemIcon>
                  <ListItemText>
                  { item[0] }
                  </ListItemText>
                </ListItem>
              </Link>
            )
          })}

          {/* TOGGLE LIGHT/DARK THEME BUTTON */}
          <hr/>
          <ListItemButton onClick={() => {handleChange()}}>
            <ListItemIcon>
              {(isDarkMode) ? (<Brightness7Icon/>) : (<Brightness4OutlinedIcon />)}
            </ListItemIcon>
            <ListItemText>
              {(isDarkMode) ? ("Dark Theme") : ("Light Theme")}
            </ListItemText>
          </ListItemButton>

        </List>
      </Drawer>
    </React.Fragment>
  )
}