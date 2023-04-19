import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ThemeContext = React.createContext({ isDarkMode: false, toggleDarkMode: () => {} });

const commonThemeSettings = {
  palette: {
    primary: {
      main: '#EBC400',
    },
    secondary: {
      main: '#a08f65',
    },
    error: {
      main: '#fc8c79',
    },
  },
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    ...commonThemeSettings['palette']
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#fff',
      default: '#eee',
    },
    ...commonThemeSettings['palette']
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