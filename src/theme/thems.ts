import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';
import { ThemeMode } from '../core';

const sharedComponentsTheme = {
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: '4px',

        '&:hover': {
          backgroundColor: '#509CDB',
        },
      },
    },
  },
};
export const lightTheme = createTheme({
  palette: {
    mode: ThemeMode.LIGHT,
    ...lightPalette,
  },
  components: {
    ...sharedComponentsTheme,
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
    MuiBadge: {
      styleOverrides: {
        badge: {
          radius: '8px',
          fontSize: '10px',
          fontFamily: 'Kumbh Sans',
          fontWeight: 600,
          width: '41px',
          height: '14px',
          color: 'black',
          backgroundColor: '#B9D7F1',
        },
      },
    },
  },
  typography: {
    fontFamily: `'Kumbh Sans', 'Helvetica', 'Arial', sans-serif`,
  },
});

export const darkTheme: typeof lightTheme = createTheme({
  palette: {
    mode: ThemeMode.DARK,
    ...darkPalette,
  },
  components: {
    ...sharedComponentsTheme,
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
    MuiBadge: {
      styleOverrides: {
        badge: {
          radius: '8px',
          fontSize: '10px',
          fontFamily: 'Kumbh Sans',
          fontWeight: 600,
          width: '41px',
          height: '14px',
          color: 'black',
          backgroundColor: '#B9D7F1',
        },
      },
    },
  },
  typography: {
    fontFamily: `'Kumbh Sans', 'Helvetica', 'Arial', sans-serif`,
  },
});
