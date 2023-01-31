import React, { useEffect, useState, useContext } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ThemeContext = React.createContext();

export default function ({ children }) {
  const defaultDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

  const [darkTheme, setDarkTheme] = useState(defaultDarkTheme);
  const [theme, setTheme] = useState(createTheme());

  useEffect(
    () => {
      setTheme(createTheme({
        overrides: {
          MuiCard: {
            root: {
              padding: '15px',
              margin: '15px',
              [theme.breakpoints.down('xs')]:{
                marginLeft: '-15px',
                marginRight: '-15px',
                padding: '15px'
              },
            },
          },
        },
        palette: {
          type: darkTheme ? 'dark' : 'light',
        },
      }));
    }, [darkTheme]
  );

  const defaultContext = {
    darkTheme,
    setDarkTheme,
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={defaultContext}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}