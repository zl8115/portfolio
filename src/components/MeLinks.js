// Library Imports
import React from 'react';

// Material UI Imports
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// Material UI Icon Imports
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
      
      <Tooltip title="YouTube Gaming Channel">
        <IconButton href="https://www.youtube.com/channel/UCZfHlEteLxb4YlBRgSqGBjA">
          <YouTubeIcon/>
        </IconButton>
      </Tooltip>

      <Tooltip title="Email">
        <IconButton href="mailto:ze.rong96@gmail.com">
          <EmailIcon/>
        </IconButton>
      </Tooltip>
    </React.Fragment>
  )
}