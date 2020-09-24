import React, { useEffect, useState, useContext } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const ThemeContext = React.createContext();

export default function ({ children }) {
  const defaultDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

  const [darkTheme, setDarkTheme] = useState(defaultDarkTheme);
  const [theme, setTheme] = useState(createMuiTheme());

  useEffect(
    () => {
      setTheme(createMuiTheme({
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