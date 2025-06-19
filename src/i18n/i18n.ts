import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as ukTranslations from './locales/uk/translation.json';
import * as enTranslations from './locales/en/translation.json';
import { LOCALE_CONSTANTS } from '../core/constansts/locale.constant.ts';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: LOCALE_CONSTANTS.UK,
    fallbackLng: LOCALE_CONSTANTS.EN,
    supportedLngs: [LOCALE_CONSTANTS.EN, LOCALE_CONSTANTS.UK],
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    resources: {
      uk: ukTranslations,
      en: enTranslations,
    },
  });

export default i18n;
