// Library Imports
import React from 'react';

// Material UI Imports
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// Material UI Icon Imports
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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

      <Tooltip title="Email">
        <IconButton href="mailto:ze.rong96@gmail.com">
          <EmailIcon/>
        </IconButton>
      </Tooltip>
    </React.Fragment>
  )
}