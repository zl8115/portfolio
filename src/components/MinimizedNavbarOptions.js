import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "../context/Theme";

export default function MinimizedNavbarOptions(props){
  const { darkTheme, setDarkTheme } = useTheme();

  // EventHandler: Button Function to Set Dark Theme
  function handleChange(event) {
    setDarkTheme(!darkTheme);
  }

  return(
    <Tooltip title="Toggle More Options">
      <MoreVertIcon/>
    </Tooltip>
  )
}