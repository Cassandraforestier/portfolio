import enTranslations from "./locales/en.json";
import frTranslations from "./locales/fr.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: enTranslations,
    },
    fr: {
        translation: frTranslations,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr", // Langue par défaut
        fallbackLng: "fr", // Langue de secours si la langue préférée n'est pas disponible
        interpolation: {
            escapeValue: false, // Permet l'utilisation de balises HTML dans les traductions
        },
    });

export default i18n;