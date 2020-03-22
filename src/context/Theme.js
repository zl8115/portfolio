import React, { useEffect, useState, useContext } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const ThemeContext = React.createContext();

export default function ({ children }) {
  const defaultDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

  const [darkTheme, setDarkTheme] = useState(defaultDarkTheme);
  const [theme, setTheme] = useState(null);

  useEffect(
    () => {
      setTheme(createMuiTheme({
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