// Library Imports
import React from 'react';
import { Box, Typography } from '@mui/material';
import "@fontsource/inconsolata"

//Context Imports
import { ThemeContext } from '../../context/Theme';

//Component Imports
import CppCode from './CppCode';

//CSS Imports
import './ProgrammerBlock.css';

export default function ProgrammerBlock()
{
  const { isDarkMode } = React.useContext(ThemeContext);
  const controlBarColor = isDarkMode ? '#454545' : '#D4D4D4';
  const backgroundColor = isDarkMode ? '#1E1E1E' : '#FFFFFF';

  return(
    <Box className={'ProgrammerBlock'}>
      <Box className={'Window'} sx={{backgroundColor: controlBarColor}}>
        <Box className={'ControlBar'}>
          <Box className={'ControlButton'} bgcolor={'#fc5b57'}/>
          <Box className={'ControlButton'} bgcolor={'#e5bf3c'}/>
          <Box className={'ControlButton'} bgcolor={'#57c038'}/>
          <Typography className={'Text'} fontFamily={'inherit'}>
            ZeRongLum.hpp
          </Typography>
        </Box>
        <Box className={'WindowBody'} bgcolor={backgroundColor}>
          <CppCode/>
        </Box>
        <Box className={'WindowBottom'}/>
      </Box>
    </Box>
  );
}