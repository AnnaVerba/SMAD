import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useTranslation } from 'react-i18next';
import './styles/style.scss';
import { Button, ThemeProvider } from '@mui/material';
import { useThemeMode } from './theme';
import { LOCALE_CONSTANTS } from './core';

function App() {
  const theme = useThemeMode();

  const [count, setCount] = useState(0);
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleChangeLanguage = () => {
    const newLanguage = language === LOCALE_CONSTANTS.EN ? LOCALE_CONSTANTS.UK : LOCALE_CONSTANTS.EN;
    changeLanguage(newLanguage);
  };

  return (
    <ThemeProvider theme={theme.theme}>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <h3>
          {t('language')}: {language}
        </h3>
        <Button onClick={handleChangeLanguage}>{t('switch language')}</Button>

        <h1>{t('welcome', { name: 'Гість' })}</h1>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <Button onClick={() => theme.toggleTheme()}>{t(`Theme ${theme.mode}`)}</Button>

      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          {t(`count`)} {count}
        </button>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </ThemeProvider>
  );
}

export default App;
