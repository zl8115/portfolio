// Library Imports
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Material-UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material-UI Icons
import AdjustIcon from '@material-ui/icons/Adjust';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

// Context Import
import { useTheme } from '../../context/Theme';

// Component Styling
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: '300px',
  }
}));

// MAIN Function
export default function MobileDrawer(props){
  const classes = useStyles();
  const {navigationKeyPairs} = props;

  const { darkTheme, setDarkTheme } = useTheme(); // Load Theme Context
  
  // Light/Dark Theme Handler Function
  function handleChange(event) {
    setDarkTheme(!darkTheme);
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
        classes={{
          paper: classes.drawerPaper,
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
                smooth={item[1].includes('#')}
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
          <ListItem button onClick={() => {handleChange()}}>
            <ListItemIcon>
              {(darkTheme) ? (<Brightness7Icon/>) : (<Brightness4OutlinedIcon />)}
            </ListItemIcon>
            <ListItemText>
              {(darkTheme) ? ("Dark Theme") : ("Light Theme")}
            </ListItemText>
          </ListItem>

        </List>
      </Drawer>
    </React.Fragment>
  )
}