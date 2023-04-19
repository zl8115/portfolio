// Library Imports
import React, { useContext, useMemo } from 'react'
import { ReactTerminal } from "react-terminal";

// Component Imports
import { navigationKeyPairs } from "./NavBar/Navbar"

// Context Import
import { ThemeContext } from '../context/Theme';

const localSubpages = navigationKeyPairs.map((keyPair) => {
  let [page, link] = keyPair;
  if (link === "/")
  {
    return ".";
  }
  else
  {
    return link.slice(1); // Remove the '/'.
  }
})

function is_help_args(args)
{
  if (args === '-h' || args === '--help')
  {
    return true;
  }
  return false
}

function cd_command(args)
{
  if (!args) return;
  if (is_help_args(args)) return 'cd [subpage] - Change the current page to [subpage].'  

  let linkIndex = localSubpages.findIndex(link => link === args);
  if (linkIndex === -1)
  {
    return args + ' is not a directory';
  }
  else
  {
    window.location.pathname = navigationKeyPairs[linkIndex][1];
  }
}

function more_command(args)
{
  if (!args) return;
  if (is_help_args(args)) return 'more [subpage] - Short summary of [subpage] contents.'
  
  let linkIndex = localSubpages.findIndex(link => link === args);
  if (linkIndex === -1)
  {
    return 'Unrecognized subpage' + args;
  }

  var [page, link] = navigationKeyPairs[linkIndex];
  if (page === 'Home')
  {
    return 'The main webpage of this site, where this terminal resides in.';
  }
  else if (page === 'About Me')
  {
    return 'Description of who I am and my various experiences and interests.';
  }
  else if (page === 'Resume')
  {
    return 'A detailed web version of my resume.';
  }
  else if (page === 'Projects')
  {
    return 'Personal projects I have previously worked on.';
  }
  else
  {
    return 'No current summary for ' + page;
  }
}

export default function ZeTerminal(props) {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Load Theme Context

  // Available commands
  const custom_commands={
    whoami: 'Ze Rong Lum, a C/C++ Software Engineer.',
    ls: localSubpages.join(" "),
    cd: cd_command,
    more: more_command,
    toggleDarkMode: () => {toggleDarkMode(!isDarkMode)}
  }
  
  const full_commands={
    ...custom_commands,
    help: ["help", "clear"].concat(Object.keys(custom_commands).sort()).join(" "),
    }

  return (
    <ReactTerminal
      props
      theme={React.useMemo(
        () => isDarkMode ? 'material-dark' : 'material-light',
       [isDarkMode]
      )}
      commands={full_commands}
      errorMessage="command not found. Type 'help' for a list of available commands"
      welcomeMessage={<>Welcome to ZeTerminal v1.0<br/></>}
    />
  );
}