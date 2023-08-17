import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = ['eng', 'uzb']

const option = {
    order:['navigator','htmlTag','path','subdomail'],
    checkWhiteList:true
}

i18n
    .use(Backend)

    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        fallbackLng: localStorage.getItem('language') || 'en',
        debug: true,
        whitelist: availableLanguages,
        detection: option,
        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;