import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { ThemeMode } from '../core';

export const lightTheme = createTheme({
  palette: {
    mode: ThemeMode.LIGHT,
    ...lightPalette,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: lightPalette.primary.main,

          color: lightPalette.text.primary,
          borderRadius: 25,
          textTransform: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: ThemeMode.DARK,
    ...darkPalette,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: darkPalette.primary.main,

          color: darkPalette.text.primary,
          textTransform: 'none',
        },
      },
    },
  },
});
