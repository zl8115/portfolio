import React from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

// Material UI Icon SVGs
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import GitHubIcon from '@material-ui/icons/GitHub';


import { useTheme } from "../context/Theme";


export default function ExpandedNavbarOptions(props){
  // Load Theme Context
  const { darkTheme, setDarkTheme } = useTheme();

  // EventHandler: Button Function to Set Dark Theme
  function handleChange(event) {
    setDarkTheme(!darkTheme);
  }

  return(
    <React.Fragment>
      <Tooltip title="Toggle light/dark theme">
        <IconButton onClick={handleChange}>
          {(darkTheme) ? (<Brightness7Icon/>) : (<Brightness4OutlinedIcon />)}
        </IconButton>
      </Tooltip>
    </React.Fragment>
  )
}

