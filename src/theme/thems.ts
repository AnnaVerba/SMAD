import { createTheme } from '@mui/material/styles';
import { lightPalette, darkPalette } from './palette';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...lightPalette,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPalette,
  },
});
