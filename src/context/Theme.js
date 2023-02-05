import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ThemeContext = React.createContext({ isDarkMode: false, toggleDarkMode: () => {} });

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#121212',
    },
    mode: 'dark',
  }
})

const lightTheme = createTheme({
  palette: {
    background: {
      paper: '#fff',
      default: '#eee',
    },
    mode: 'light',
  }
})

export default function Theme ({ children }) {
  const defaultIsDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(defaultIsDarkMode);

  const defaultThemeContext = React.useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode: () => {
        setIsDarkMode(!isDarkMode);
      },
    }),
    [isDarkMode]
  );

  const theme = React.useMemo(
    () => 
      isDarkMode ? darkTheme : lightTheme
    , [isDarkMode]
  );

  theme.components.MuiCard = {
    styleOverrides: {
      root: {
        padding: '15px',
        margin: '15px',
        [theme.breakpoints.down('xs')]:{
          marginLeft: '-15px',
          marginRight: '-15px',
          padding: '15px'
        },
      },
    }
  };

  return (
    <ThemeContext.Provider value={defaultThemeContext}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};