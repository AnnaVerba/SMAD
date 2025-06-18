import { useMemo, useState } from 'react';
import { darkTheme, lightTheme } from './thems.ts';


export const useThemeMode = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, mode, toggleTheme };
};
