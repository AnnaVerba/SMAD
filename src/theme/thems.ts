import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { ThemeMode } from '../core';

export const lightTheme = createTheme({
  palette: {
    mode: ThemeMode.LIGHT,
    ...lightPalette,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: { display: 'block' },
        paper: {
          width: '241px',
          boxSizing: 'border-box',
          backgroundColor: lightPalette.background.default,
          color: lightPalette.text.default,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: lightPalette.primary.main,

          color: lightPalette.text.primary,
          textTransform: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: `'Kumbh Sans', 'Helvetica', 'Arial', sans-serif`,

  },
});

export const darkTheme = createTheme({
  palette: {
    mode: ThemeMode.DARK,
    ...darkPalette,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: { display: 'block', background: darkPalette.primary.main },
        paper: {
          width: '241px',
          boxSizing: 'border-box',
          backgroundColor: lightPalette.background.default,
          color: lightPalette.text.default,
        },
      },
    },
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
  typography: {
    fontFamily: `'Kumbh Sans', 'Helvetica', 'Arial', sans-serif`,
  },
});
