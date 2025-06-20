import type { ThemeModeType } from './them-mode.ts';
import type { Theme } from '@mui/material';

export type UseThemeModeReturn = {
  theme: Theme;
  mode: ThemeModeType;
  toggleTheme: () => void;
};
