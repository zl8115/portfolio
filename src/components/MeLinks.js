// Library Imports
import React from 'react';

// Material UI Imports
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// Material UI Icon Imports
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function MeLinks(){
  return(
    <React.Fragment>
      <Tooltip title="LinkedIn Profile">
        <IconButton href="https://www.linkedin.com/in/zelum/">
          <LinkedInIcon/>
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub Profile">
        <IconButton href="https://github.com/zl8115">
          <GitHubIcon/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Facebook Profile">
        <IconButton href="https://www.facebook.com/zerong96">
          <FacebookIcon/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Instagram Profile">
        <IconButton href="https://www.instagram.com/zerg_lum/">
          <InstagramIcon/>
        </IconButton>
      </Tooltip>
      
      <Tooltip title="Gaming YouTube Channel">
        <IconButton href="https://www.youtube.com/channel/UCZfHlEteLxb4YlBRgSqGBjA">
          <YouTubeIcon/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Email">
        <IconButton href="mailto:ze.lum@elize.io">
          <EmailIcon/>
        </IconButton>
      </Tooltip>
    </React.Fragment>
  )
}