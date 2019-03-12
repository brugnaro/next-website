import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, pt } from './languages';

const resources = {
  en: {
    translation: en
  },
  pt: {
    translation: pt
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;