import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useTranslation } from 'react-i18next';
import './styles/style.scss';
import { ThemeProvider } from '@mui/material';
import { useThemeMode } from './theme/useTheme.ts';
import { CustomButton } from './shared/CustomButton.ts';

function App() {
  const theme = useThemeMode();

  const [count, setCount] = useState(0);
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleChangeLanguage = () => {
    const newLanguage = language === 'en' ? 'uk' : 'en';

    changeLanguage(newLanguage);
  };

  return (
    <ThemeProvider theme={theme.theme}>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <h3>Current Language: {language}</h3>
        <CustomButton onClick={handleChangeLanguage}>Change Language</CustomButton>

        <h1>{t('welcome', { name: 'Гість' })}</h1>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <CustomButton onClick={() => theme.toggleTheme()}>Theme {theme.mode}</CustomButton>

      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </ThemeProvider>
  );
}

export default App;
