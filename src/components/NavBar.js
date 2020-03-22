import React from "react"

// Material-UI Imports
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Hidden from "@material-ui/core/Hidden"
// import { Switch } from "@material-ui/core";

// Component Imports
import ExpandedNavbarOptions from "./ExpandedNavbarOptions";
import MinimizedNavbarOptions from "./MinimizedNavbarOptions";

export default function NavBar (props) {
  // Copy Pasta Code from Material-UI
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  // Custom Styles
  const styles= {
    toolbarButtons:{
      marginLeft: 'auto',
    },
    toolbarZeroPadding:{
      padding: '0',
    },
  };

  return(
    <HideOnScroll {...props}>
      <AppBar color="inherit">
        <Container maxWidth="lg">
          <Toolbar style={styles.toolbarZeroPadding}>
            <Typography variant="h5">Ze App</Typography>

          {/* Force Toolbar Options to the Right of Screen */}
            <div style={styles.toolbarButtons}>
              {/* NavBar Buttons for larger screen sizes (>600px) */}
              <Hidden smDown>
                <ExpandedNavbarOptions />
              </Hidden>

              {/* NavBar Options for smaller screen sizes (>600px) */}
              <Hidden mdUp>
                <MinimizedNavbarOptions/>
              </Hidden>
            </div>
            
            </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}