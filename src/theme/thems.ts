import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
    mode: 'dark',
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
