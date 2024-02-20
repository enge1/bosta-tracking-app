// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files
import translationEN from './locales/en.json';
import translationAR from './locales/ar.json';

// Initialize i18next
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        ar: {
            translation: translationAR,
        },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
        escapeValue: false, // React already safes from xss
    },
});

export default i18n;
