import type { ThemeMode } from '../constansts';

export type ThemeModeType = (typeof ThemeMode)[keyof typeof ThemeMode];
