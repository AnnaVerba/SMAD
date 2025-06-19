import { useMemo, useState } from 'react';
import { darkTheme, lightTheme } from './thems.ts';
import { ThemeMode } from '../core';
import type { ThemeModeType } from '../core';
import type { UseThemeModeReturn } from '../core';

export const useThemeMode = (): UseThemeModeReturn => {
  const [mode, setMode] = useState<ThemeModeType>(ThemeMode.LIGHT);

  const theme = useMemo(() => (mode === ThemeMode.LIGHT ? lightTheme : darkTheme), [mode]);

  const toggleTheme = (): void => {
    setMode((prev): ThemeModeType => (prev === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT));
  };

  return { theme, mode, toggleTheme };
};
