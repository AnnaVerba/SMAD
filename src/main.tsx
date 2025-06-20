import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.scss'
import App from './App.tsx'
import './i18n/i18n';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap"
              rel="stylesheet"/>

        <App/>
    </StrictMode>,
)
